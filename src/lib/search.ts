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

function expand(tokens: string[]): string[] {
  const out = new Set<string>()
  for (const token of tokens) {
    if (QUESTION_WORDS.has(token)) continue
    out.add(token)
    // Crude stemming: enough to match "invented"/"invent", "numerals"/"numeral".
    if (token.endsWith('s') && token.length > 3) out.add(token.slice(0, -1))
    if (token.endsWith('ed') && token.length > 4) out.add(token.slice(0, -2))
    for (const related of ASSOCIATIONS[token] ?? []) out.add(related)
  }
  return [...out]
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

function index(): IndexEntry[] {
  INDEX ??= [...STORIES.flatMap(storyEntries), ...NODES.map(nodeEntry)]
  return INDEX
}

export function searchLocal(query: string, limit = 8): SearchResult[] {
  const raw = tokenise(query)
  if (raw.length === 0) return []
  const terms = expand(raw)
  // Terms the reader actually typed count more than ones we inferred for them.
  const typed = new Set(raw)

  const scored: SearchResult[] = []

  for (const entry of index()) {
    let score = 0
    let matched = 0

    for (const term of terms) {
      const weight = typed.has(term) ? 1 : 0.45
      const count = entry.bag.get(term) ?? 0
      if (count > 0) {
        matched += 1
        score += weight * (1 + Math.log(count))
      }
      if (entry.titleBag.has(term)) score += weight * 2.5
    }

    if (matched === 0) continue

    // Reward covering more of the question rather than repeating one word.
    score *= 0.6 + 0.4 * (matched / terms.length)
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
