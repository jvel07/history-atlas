import type { Lang } from '@/lib/i18n'
import type { Category, Era, EdgeRelation, NodeKind, ReelBeat, SourceKind } from './types'

/**
 * The vocabulary of the content model, in both languages.
 *
 * These are labels for *enum values*, not prose: the era of a story, the kind of
 * a node, the relation on an edge. The value itself (`medieval`, `caused`) never
 * changes — only how it is written on screen. Keeping them here rather than in
 * `types.ts` means the type file stays a description of the data, and adding a
 * language cannot silently leave an enum half-translated: every map below is a
 * `Record<Lang, Record<…>>`, so a missing value does not compile.
 */

export const ERA_LABELS: Record<Lang, Record<Era, string>> = {
  en: {
    ancient: 'Ancient world',
    classical: 'Classical antiquity',
    medieval: 'Medieval',
    'early-modern': 'Early modern',
    industrial: 'Industrial age',
    modern: 'Modern',
    contemporary: 'Contemporary',
  },
  es: {
    ancient: 'Mundo antiguo',
    classical: 'Antigüedad clásica',
    medieval: 'Edad Media',
    'early-modern': 'Edad Moderna',
    industrial: 'Era industrial',
    modern: 'Época contemporánea',
    contemporary: 'Actualidad',
  },
}

/**
 * The browse chips. The emoji lives in `types.ts` with the category itself,
 * because a shield is not language; only these words are.
 */
export const CATEGORY_LABELS: Record<Lang, Record<Category, string>> = {
  en: {
    battles: 'Epic battles',
    milestones: 'Key milestones',
    ancient: 'Ancient worlds',
    discoveries: 'Great discoveries',
    eras: 'Ages & eras',
    icons: 'Historic icons',
  },
  es: {
    battles: 'Batallas épicas',
    milestones: 'Hitos decisivos',
    ancient: 'Mundos antiguos',
    discoveries: 'Grandes descubrimientos',
    eras: 'Edades y épocas',
    icons: 'Iconos de la historia',
  },
}

export const REEL_BEAT_LABELS: Record<Lang, Record<ReelBeat, string>> = {
  en: {
    hook: 'The hook',
    worldBefore: 'Before',
    problem: 'The problem',
    story: 'What happened',
    whyItHappened: 'Why',
    consequences: 'What changed',
    whyItMatters: 'Why it matters',
  },
  es: {
    hook: 'El gancho',
    worldBefore: 'Antes',
    problem: 'El problema',
    story: 'Qué pasó',
    whyItHappened: 'Por qué',
    consequences: 'Qué cambió',
    whyItMatters: 'Por qué importa',
  },
}

export const NODE_KIND_LABELS: Record<Lang, Record<NodeKind, string>> = {
  en: {
    person: 'Person',
    empire: 'Empire or state',
    organisation: 'Organisation',
    event: 'Event',
    idea: 'Idea',
    technology: 'Technology',
    trade: 'Trade',
    place: 'Place',
    religion: 'Religion',
    discovery: 'Discovery',
  },
  es: {
    person: 'Persona',
    empire: 'Imperio o Estado',
    organisation: 'Organización',
    event: 'Acontecimiento',
    idea: 'Idea',
    technology: 'Tecnología',
    trade: 'Comercio',
    place: 'Lugar',
    religion: 'Religión',
    discovery: 'Descubrimiento',
  },
}

/**
 * Read as "A <phrase> B". Spanish keeps the same subject-verb-object reading,
 * which is what the connection cards on the map render.
 */
export const RELATION_PHRASES: Record<Lang, Record<EdgeRelation, string>> = {
  en: {
    caused: 'caused',
    enabled: 'made possible',
    funded: 'paid for',
    ruled: 'ruled',
    'studied-at': 'worked at',
    wrote: 'wrote',
    'traded-with': 'traded with',
    conquered: 'conquered',
    'succeeded-by': 'was followed by',
    preserved: 'preserved',
    inspired: 'inspired',
    destroyed: 'destroyed',
    named: 'gave its name to',
    held: 'held captive',
    fought: 'fought',
    ran: 'ran',
    led: 'led',
    warned: 'warned',
    ignored: 'ignored',
    exposed: 'exposed',
    was: 'was a',
  },
  es: {
    caused: 'provocó',
    enabled: 'hizo posible',
    funded: 'pagó',
    ruled: 'gobernó',
    'studied-at': 'trabajó en',
    wrote: 'escribió',
    'traded-with': 'comerció con',
    conquered: 'conquistó',
    'succeeded-by': 'fue seguido por',
    preserved: 'conservó',
    inspired: 'inspiró',
    destroyed: 'destruyó',
    named: 'dio su nombre a',
    held: 'tuvo preso a',
    fought: 'luchó contra',
    ran: 'dirigió',
    led: 'encabezó',
    warned: 'avisó a',
    ignored: 'ignoró',
    exposed: 'destapó',
    was: 'fue un',
  },
}

export const SOURCE_KIND_LABELS: Record<Lang, Record<SourceKind, string>> = {
  en: {
    primary: 'Primary source',
    book: 'Book',
    paper: 'Paper',
    archive: 'Archive',
    dataset: 'Dataset',
  },
  es: {
    primary: 'Fuente primaria',
    book: 'Libro',
    paper: 'Artículo académico',
    archive: 'Archivo',
    dataset: 'Conjunto de datos',
  },
}

export const ASIDE_KIND_LABELS: Record<Lang, Record<'analogy' | 'number' | 'voice' | 'caution', string>> = {
  en: { analogy: 'Picture it', number: 'The number', voice: 'A voice from the time', caution: 'Careful' },
  es: {
    analogy: 'Imagínalo',
    number: 'La cifra',
    voice: 'Una voz de la época',
    caution: 'Con cuidado',
  },
}
