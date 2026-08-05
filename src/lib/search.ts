import { corpusFor } from '@/content'
import type { GraphNode, Story } from '@/content/types'
import type { Lang } from '@/lib/i18n'

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

const STOP_WORDS: Record<Lang, Set<string>> = {
  en: new Set([
    'a', 'an', 'the', 'of', 'in', 'on', 'at', 'to', 'for', 'and', 'or', 'but', 'is', 'was', 'were',
    'be', 'been', 'it', 'its', 'this', 'that', 'these', 'those', 'as', 'by', 'with', 'from', 'about',
    'into', 'over', 'after', 'before', 'do', 'does', 'did', 'have', 'has', 'had', 'i', 'me', 'my',
  ]),
  es: new Set([
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'en', 'a', 'al', 'para',
    'por', 'y', 'e', 'o', 'u', 'pero', 'es', 'son', 'era', 'eran', 'ser', 'sido', 'lo', 'su', 'sus',
    'este', 'esta', 'esto', 'esos', 'esas', 'como', 'con', 'desde', 'sobre', 'entre', 'hacia',
    'tras', 'hace', 'hizo', 'ha', 'han', 'yo', 'mi', 'se', 'que', 'no', 'si',
  ]),
}

/** Question scaffolding carries intent but no content. Strip it, keep the rest. */
const QUESTION_WORDS: Record<Lang, Set<string>> = {
  en: new Set(['why', 'what', 'who', 'when', 'where', 'how', 'which', 'whom']),
  es: new Set(['por', 'qué', 'que', 'quién', 'quien', 'cuándo', 'cuando', 'dónde', 'donde', 'cómo', 'como', 'cuál', 'cual']),
}

/**
 * Verbs that are almost always the *frame* of a question rather than its
 * subject. "Who invented algorithms?" is a question about algorithms; matching
 * on "invented" found a myth about Vlad Țepeș inventing impalement and ranked it
 * first. These still count — an entry containing them is marginally better than
 * one that does not — but they never anchor a result and never boost a title.
 */
const WEAK_VERBS: Record<Lang, Set<string>> = {
  en: new Set([
    'invented', 'invent', 'created', 'create', 'made', 'make', 'called', 'named',
    'started', 'start', 'began', 'begin', 'caused', 'cause', 'used', 'use',
    'happened', 'happen', 'become', 'became', 'known',
  ]),
  es: new Set([
    'inventó', 'invento', 'inventar', 'creó', 'creo', 'crear', 'hizo', 'hacer', 'llamó', 'llamo',
    'llamar', 'empezó', 'empezo', 'empezar', 'provocó', 'provoco', 'provocar', 'usó', 'uso', 'usar',
    'pasó', 'paso', 'pasar', 'convirtió', 'convirtio', 'conocido',
  ]),
}

/**
 * The cheapest possible stand-in for embeddings: a hand-built association list.
 * It is small and honest about being small. Each entry earns its place by being
 * a query someone actually types that the corpus answers under another word.
 */
const ASSOCIATIONS: Record<Lang, Record<string, string[]>> = {
  en: {
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
  },
  es: {
    droga: ['opio', 'narcótico', 'adormidera'],
    drogas: ['opio', 'narcótico', 'adormidera'],
    vender: ['comercio', 'vendía', 'exportar', 'contrabando'],
    vendía: ['comercio', 'vender', 'exportar'],
    comprar: ['comercio', 'importar'],
    guerra: ['guerras', 'batalla', 'militar', 'flota'],
    dinero: ['plata', 'ingresos', 'tesoro', 'comercio', 'deuda'],
    economía: ['comercio', 'plata', 'ingresos', 'arancel'],
    matemáticas: ['álgebra', 'aritmética', 'matemático'],
    ordenador: ['algoritmo', 'informática', 'máquina'],
    computadora: ['algoritmo', 'informática', 'máquina'],
    código: ['algoritmo', 'informática'],
    caída: ['derrumbe', 'declive', 'destruido', 'derrota'],
    cero: ['cifras', 'aritmética', 'brahmagupta'],
    número: ['cifras', 'aritmética', 'guarismo'],
    números: ['cifras', 'aritmética', 'guarismo'],
    té: ['comercio', 'plata', 'cantón'],
    británica: ['británico', 'inglaterra', 'londres', 'parlamento'],
    china: ['chino', 'qing', 'cantón', 'pekín'],
    islam: ['islámico', 'musulmán', 'abasí', 'califato'],
    islámica: ['abasí', 'bagdad', 'califato'],
    árabe: ['arábigo', 'islámico', 'bagdad'],
    libro: ['escribió', 'texto', 'manuscrito', 'traducción'],
    fraude: ['estafa', 'ponzi', 'madoff'],
    golpe: ['cia', 'guatemala', 'árbenz'],
    vampiro: ['drácula', 'stoker', 'vlad'],
  },
}

function tokenise(text: string, lang: Lang): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS[lang].has(token))
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
function expand(tokens: string[], lang: Lang): Map<string, number> {
  const out = new Map<string, number>()
  const put = (term: string, weight: number) => {
    if ((out.get(term) ?? 0) < weight) out.set(term, weight)
  }

  for (const token of tokens) {
    if (QUESTION_WORDS[lang].has(token)) continue
    const weak = WEAK_VERBS[lang].has(token)
    put(token, weak ? 0.4 : 1)
    // Crude stemming: enough to match "invented"/"invent", "numerals"/"numeral".
    // Spanish plurals are the same two suffixes, so the rule carries over.
    if (token.endsWith('s') && token.length > 3) put(token.slice(0, -1), weak ? 0.4 : 0.9)
    if (token.endsWith('es') && token.length > 4) put(token.slice(0, -2), weak ? 0.4 : 0.9)
    if (token.endsWith('ed') && token.length > 4) put(token.slice(0, -2), weak ? 0.4 : 0.9)
    for (const related of ASSOCIATIONS[lang][token] ?? []) put(related, 0.45)
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

function toBag(text: string, lang: Lang): Map<string, number> {
  const bag = new Map<string, number>()
  for (const token of tokenise(text, lang)) bag.set(token, (bag.get(token) ?? 0) + 1)
  return bag
}

/**
 * Result labels, in the language being searched. The index is per language, so
 * a Spanish query never returns an English snippet with a Spanish badge on it.
 */
const LABELS: Record<Lang, { story: (m: number) => string; myth: string; curio: string; hasStory: string; onMap: string }> = {
  en: {
    story: (m) => `Story · ${m} min`,
    myth: 'myth',
    curio: 'did you know',
    hasStory: 'Has a story',
    onMap: 'On the map',
  },
  es: {
    story: (m) => `Historia · ${m} min`,
    myth: 'mito',
    curio: 'sabías que',
    hasStory: 'Tiene historia',
    onMap: 'En el mapa',
  },
}

function excerpt(text: string, limit = 180): string {
  if (text.length <= limit) return text
  const cut = text.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : limit)}…`
}

function storyEntries(story: Story, lang: Lang): IndexEntry[] {
  const entries: IndexEntry[] = []
  const labels = LABELS[lang]
  const base = `/story/${story.slug}`

  entries.push({
    kind: 'story',
    title: story.title,
    href: base,
    snippet: story.hook,
    context: labels.story(story.readingMinutes),
    bag: toBag([story.title, story.subtitle, story.hook, ...story.tags, ...story.regions].join(' '), lang),
    titleBag: new Set(tokenise(`${story.title} ${story.subtitle}`, lang)),
  })

  for (const [key, beat] of Object.entries(story.beats)) {
    const body = beat.paragraphs.join(' ')
    entries.push({
      kind: 'section',
      title: beat.heading,
      href: `${base}#${key}`,
      snippet: excerpt(body),
      context: story.title,
      bag: toBag(`${beat.heading} ${body} ${beat.aside?.body ?? ''}`, lang),
      titleBag: new Set(tokenise(`${beat.heading} ${story.title}`, lang)),
    })
  }

  for (const myth of story.myths) {
    entries.push({
      kind: 'section',
      title: myth.myth,
      href: `${base}#myths`,
      snippet: excerpt(myth.reality),
      context: `${story.title} · ${labels.myth}`,
      bag: toBag(`${myth.myth} ${myth.reality} ${myth.whyItPersists ?? ''}`, lang),
      titleBag: new Set(tokenise(myth.myth, lang)),
    })
  }

  for (const fact of story.didYouKnow) {
    entries.push({
      kind: 'fact',
      title: excerpt(fact, 90),
      href: base,
      snippet: fact,
      context: `${story.title} · ${labels.curio}`,
      bag: toBag(fact, lang),
      titleBag: new Set(tokenise(fact, lang)),
    })
  }

  return entries
}

function nodeEntry(node: GraphNode, lang: Lang): IndexEntry {
  return {
    kind: 'node',
    title: node.label,
    href: node.story ? `/story/${node.story}` : `/explore?focus=${node.id}`,
    snippet: node.blurb,
    context: node.story ? LABELS[lang].hasStory : LABELS[lang].onMap,
    bag: toBag(`${node.label} ${node.blurb} ${node.kind}`, lang),
    titleBag: new Set(tokenise(node.label, lang)),
  }
}

interface Index {
  entries: IndexEntry[]
  /** Inverse document frequency, so a rare word outranks a common one. */
  idf: Map<string, number>
}

const INDEXES: Partial<Record<Lang, Index>> = {}

function index(lang: Lang): Index {
  const cached = INDEXES[lang]
  if (cached) return cached

  const corpus = corpusFor(lang)
  const entries = [
    ...corpus.stories.flatMap((story) => storyEntries(story, lang)),
    ...corpus.graph.nodes.map((node) => nodeEntry(node, lang)),
  ]

  // Without this, "invented" and "algorithm" count the same, and a query is
  // won by whichever entry happens to repeat the commonest word in it.
  const documentFrequency = new Map<string, number>()
  for (const entry of entries) {
    for (const term of new Set([...entry.bag.keys(), ...entry.titleBag])) {
      documentFrequency.set(term, (documentFrequency.get(term) ?? 0) + 1)
    }
  }
  const idf = new Map<string, number>()
  for (const [term, df] of documentFrequency) {
    idf.set(term, Math.log(1 + entries.length / df))
  }

  return (INDEXES[lang] = { entries, idf })
}

export function searchLocal(query: string, lang: Lang = 'en', limit = 8): SearchResult[] {
  const raw = tokenise(query, lang)
  if (raw.length === 0) return []
  const { entries, idf: idfMap } = index(lang)
  const terms = expand(raw, lang)
  // An unseen term cannot match anything, so its weight is never used; the
  // fallback just keeps the arithmetic total.
  const idf = (term: string) => idfMap.get(term) ?? 1

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
  search(query: string, lang: Lang, limit?: number): Promise<SearchResult[]>
}

export const localSearchProvider: SearchProvider = {
  id: 'local',
  async search(query, lang, limit) {
    return searchLocal(query, lang, limit)
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
    async search(query, lang, limit = 8) {
      try {
        const response = await fetch(`${endpoint}/search`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ query, lang, limit }),
        })
        if (!response.ok) throw new Error(`search failed: ${response.status}`)
        const data = (await response.json()) as { results: SearchResult[] }
        return data.results
      } catch {
        return searchLocal(query, lang, limit)
      }
    },
  }
}

const endpoint = import.meta.env.VITE_ATLAS_API as string | undefined

export const searchProvider: SearchProvider = endpoint
  ? vectorSearchProvider(endpoint)
  : localSearchProvider
