import { NODES, STORIES } from '@/content'
import type { GraphNode, Story } from '@/content/types'

/**
 * Search, in two layers.
 *
 * The product wants semantic search — "why did Britain sell opium?" should work,
 * and it does not contain the word "trade". Real semantics needs embeddings, so
 * that lives behind `SearchProvider` and is answered by pgvector through the
 * Supabase function in `supabase/functions/search`.
 *
 * This file is the layer underneath it: a local index that runs with no backend
 * at all. It is not pretending to be semantic. It does three cheap things that
 * cover most of the gap — it strips question scaffolding ("why did", "what
 * caused"), it expands a small hand-built synonym set, and it indexes *sections*
 * rather than whole documents so a hit can land on the paragraph that answers
 * the question. When the vector backend is configured it takes over, and this
 * stays as the offline fallback.
 */

export type ResultKind = 'story' | 'section' | 'node' | 'fact'

export interface SearchResult {
  kind: ResultKind
  title: string
  /** Where clicking goes: a route path, hash included when it targets a section. */
  href: string
  snippet: string
  score: number
  /** Shown as a small label on the result row. */
  context: string
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'of', 'in', 'on', 'at', 'to', 'for', 'and', 'or', 'but', 'is', 'was', 'were',
  'be', 'been', 'it', 'its', 'this', 'that', 'these', 'those', 'as', 'by', 'with', 'from', 'about',
  'into', 'over', 'after', 'before', 'do', 'does', 'did', 'have', 'has', 'had', 'i', 'me', 'my',
])

/** Question scaffolding carries intent but no content. Strip it, keep the rest. */
const QUESTION_WORDS = new Set(['why', 'what', 'who', 'when', 'where', 'how', 'which', 'whom'])

/**
 * Verbs that are almost always the *frame* of a question rather than its
 * subject. "Who invented algorithms?" is a question about algorithms; matching
 * on "invented" found a myth about Vlad Țepeș inventing impalement and ranked it
 * first. These still count — an entry containing them is marginally better than
 * one that does not — but they never anchor a result and never boost a title.
 */
const WEAK_VERBS = new Set([
  'invented', 'invent', 'created', 'create', 'made', 'make', 'called', 'named',
  'started', 'start', 'began', 'begin', 'caused', 'cause', 'used', 'use',
  'happened', 'happen', 'become', 'became', 'known',
])

/**
 * The cheapest possible stand-in for embeddings: a hand-built association list.
 * It is small and honest about being small. Each entry earns its place by being
 * a query someone actually types that the corpus answers under another word.
 */
const ASSOCIATIONS: Record<string, string[]> = {
  drug: ['opium', 'narcotic', 'poppy'],
  drugs: ['opium', 'narcotic', 'poppy'],
  sell: ['trade', 'sold', 'export', 'smuggle'],
  sold: ['trade', 'sell', 'export'],
  buy: ['trade', 'import', 'purchase'],
  war: ['wars', 'battle', 'military', 'fleet'],
  money: ['silver', 'revenue', 'treasury', 'trade', 'debt'],
  economy: ['trade', 'silver', 'revenue', 'tariff'],
  maths: ['mathematics', 'algebra', 'arithmetic'],
  math: ['mathematics', 'algebra', 'arithmetic'],
  computer: ['algorithm', 'computing', 'machine'],
  computing: ['algorithm', 'computer', 'turing'],
  code: ['algorithm', 'computing'],
  invented: ['wrote', 'created', 'origin', 'first'],
  invent: ['wrote', 'created', 'origin'],
  fall: ['collapse', 'decline', 'destroyed', 'defeat'],
  fell: ['collapse', 'decline', 'destroyed'],
  zero: ['numerals', 'arithmetic', 'brahmagupta'],
  number: ['numerals', 'arithmetic', 'digits'],
  numbers: ['numerals', 'arithmetic', 'digits'],
  tea: ['trade', 'silver', 'canton'],
  britain: ['british', 'england', 'london', 'parliament'],
  british: ['britain', 'england', 'empire'],
  china: ['chinese', 'qing', 'canton', 'beijing'],
  chinese: ['china', 'qing'],
  islam: ['islamic', 'muslim', 'abbasid', 'caliphate'],
  islamic: ['abbasid', 'baghdad', 'caliphate'],
  arab: ['arabic', 'islamic', 'baghdad'],
  book: ['wrote', 'text', 'manuscript', 'translation'],
}

function tokenise(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token))
}

/**
 * Expand a query into weighted terms.
 *
 * The weights matter more than the expansion does. "Who invented algorithms?"
 * once returned a myth about Vlad Țepeș, because `algorithms` was stemmed to
 * `algorithm` and lost its status as a word the reader had typed, while the
 * generic verb `invented` kept full weight and matched a heading elsewhere.
 * A morphological variant of a typed word is still that word; only a synonym
 * we guessed at deserves a discount.
 */
function expand(tokens: string[]): Map<string, number> {
  const out = new Map<string, number>()
  const put = (term: string, weight: number) => {
    if ((out.get(term) ?? 0) < weight) out.set(term, weight)
  }

  for (const token of tokens) {
    if (QUESTION_WORDS.has(token)) continue
    const weak = WEAK_VERBS.has(token)
    put(token, weak ? 0.4 : 1)
    // Crude stemming: enough to match "invented"/"invent", "numerals"/"numeral".
    if (token.endsWith('s') && token.length > 3) put(token.slice(0, -1), weak ? 0.4 : 0.9)
    if (token.endsWith('ed') && token.length > 4) put(token.slice(0, -2), weak ? 0.4 : 0.9)
    for (const related of ASSOCIATIONS[token] ?? []) put(related, 0.45)
  }
  return out
}

interface IndexEntry {
  kind: ResultKind
  title: string
  href: string
  snippet: string
  context: string
  /** Lower-cased haystack, already tokenised into a bag with counts. */
  bag: Map<string, number>
  /** Words in the title weigh more — a title match is usually the right answer. */
  titleBag: Set<string>
}

function toBag(text: string): Map<string, number> {
  const bag = new Map<string, number>()
  for (const token of tokenise(text)) bag.set(token, (bag.get(token) ?? 0) + 1)
  return bag
}

function excerpt(text: string, limit = 180): string {
  if (text.length <= limit) return text
  const cut = text.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : limit)}…`
}

function storyEntries(story: Story): IndexEntry[] {
  const entries: IndexEntry[] = []
  const base = `/story/${story.slug}`

  entries.push({
    kind: 'story',
    title: story.title,
    href: base,
    snippet: story.hook,
    context: `Story · ${story.readingMinutes} min`,
    bag: toBag([story.title, story.subtitle, story.hook, ...story.tags, ...story.regions].join(' ')),
    titleBag: new Set(tokenise(`${story.title} ${story.subtitle}`)),
  })

  for (const [key, beat] of Object.entries(story.beats)) {
    const body = beat.paragraphs.join(' ')
    entries.push({
      kind: 'section',
      title: beat.heading,
      href: `${base}#${key}`,
      snippet: excerpt(body),
      context: story.title,
      bag: toBag(`${beat.heading} ${body} ${beat.aside?.body ?? ''}`),
      titleBag: new Set(tokenise(`${beat.heading} ${story.title}`)),
    })
  }

  for (const myth of story.myths) {
    entries.push({
      kind: 'section',
      title: myth.myth,
      href: `${base}#myths`,
      snippet: excerpt(myth.reality),
      context: `${story.title} · myth`,
      bag: toBag(`${myth.myth} ${myth.reality} ${myth.whyItPersists ?? ''}`),
      titleBag: new Set(tokenise(myth.myth)),
    })
  }

  for (const fact of story.didYouKnow) {
    entries.push({
      kind: 'fact',
      title: excerpt(fact, 90),
      href: base,
      snippet: fact,
      context: `${story.title} · did you know`,
      bag: toBag(fact),
      titleBag: new Set(tokenise(fact)),
    })
  }

  return entries
}

function nodeEntry(node: GraphNode): IndexEntry {
  return {
    kind: 'node',
    title: node.label,
    href: node.story ? `/story/${node.story}` : `/explore?focus=${node.id}`,
    snippet: node.blurb,
    context: node.story ? 'Has a story' : 'On the map',
    bag: toBag(`${node.label} ${node.blurb} ${node.kind}`),
    titleBag: new Set(tokenise(node.label)),
  }
}

let INDEX: IndexEntry[] | null = null
/** Inverse document frequency, so a rare word outranks a common one. */
let IDF: Map<string, number> | null = null

function index(): IndexEntry[] {
  if (!INDEX) {
    INDEX = [...STORIES.flatMap(storyEntries), ...NODES.map(nodeEntry)]

    // Without this, "invented" and "algorithm" count the same, and a query is
    // won by whichever entry happens to repeat the commonest word in it.
    const documentFrequency = new Map<string, number>()
    for (const entry of INDEX) {
      for (const term of new Set([...entry.bag.keys(), ...entry.titleBag])) {
        documentFrequency.set(term, (documentFrequency.get(term) ?? 0) + 1)
      }
    }
    IDF = new Map()
    for (const [term, df] of documentFrequency) {
      IDF.set(term, Math.log(1 + INDEX.length / df))
    }
  }
  return INDEX
}

function idf(term: string): number {
  // An unseen term cannot match anything, so its weight is never used; the
  // fallback just keeps the arithmetic total.
  return IDF?.get(term) ?? 1
}

export function searchLocal(query: string, limit = 8): SearchResult[] {
  const raw = tokenise(query)
  if (raw.length === 0) return []
  const entries = index()
  const terms = expand(raw)

  const scored: SearchResult[] = []

  for (const entry of entries) {
    let score = 0
    let matched = 0

    for (const [term, weight] of terms) {
      const rarity = idf(term)
      const count = entry.bag.get(term) ?? 0
      if (count > 0) {
        matched += 1
        score += weight * rarity * (1 + Math.log(count))
      }
      // Only words the reader actually typed, and that carry content, are worth
      // a title boost. Boosting a guessed synonym or a framing verb is how a
      // heading wins a query that is not about it.
      if (weight >= 0.9 && entry.titleBag.has(term)) score += weight * rarity * 2.5
    }

    if (matched === 0) continue

    // Reward covering more of the question rather than repeating one word.
    score *= 0.6 + 0.4 * (matched / terms.size)
    // A whole story beats a fragment of one when both match equally well.
    if (entry.kind === 'story') score *= 1.25
    if (entry.kind === 'node') score *= 0.9

    scored.push({
      kind: entry.kind,
      title: entry.title,
      href: entry.href,
      snippet: entry.snippet,
      context: entry.context,
      score,
    })
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit)
}

/* -------------------------------------------------------- provider ---- */

export interface SearchProvider {
  id: 'local' | 'vector'
  search(query: string, limit?: number): Promise<SearchResult[]>
}

export const localSearchProvider: SearchProvider = {
  id: 'local',
  async search(query, limit) {
    return searchLocal(query, limit)
  },
}

/**
 * pgvector-backed search. Enabled by setting VITE_ATLAS_API to the deployed
 * Supabase functions URL; falls back to local rather than failing the page,
 * because a search box that errors is worse than one that is merely literal.
 */
export function vectorSearchProvider(endpoint: string): SearchProvider {
  return {
    id: 'vector',
    async search(query, limit = 8) {
      try {
        const response = await fetch(`${endpoint}/search`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ query, limit }),
        })
        if (!response.ok) throw new Error(`search failed: ${response.status}`)
        const data = (await response.json()) as { results: SearchResult[] }
        return data.results
      } catch {
        return searchLocal(query, limit)
      }
    },
  }
}

const endpoint = import.meta.env.VITE_ATLAS_API as string | undefined

export const searchProvider: SearchProvider = endpoint
  ? vectorSearchProvider(endpoint)
  : localSearchProvider
