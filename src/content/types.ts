/**
 * The content model.
 *
 * Two rules shape everything here, and both exist because the alternative
 * produces a worse product, not because types are nice:
 *
 * 1. The eight storytelling beats are *named fields*, not an array of blocks.
 *    A story that forgets "Why it still matters" should fail to compile, not
 *    render a shorter page. `scripts/check-content.mjs` leans on this.
 *
 * 2. A claim carries its confidence and its source. "Established", "contested"
 *    and "speculation" render differently on the page, and speculation is never
 *    allowed to sit in the narrative voice. Accuracy is worth more than virality.
 */

export type Era =
  | 'ancient'
  | 'classical'
  | 'medieval'
  | 'early-modern'
  | 'industrial'
  | 'modern'
  | 'contemporary'

export const ERA_LABEL: Record<Era, string> = {
  ancient: 'Ancient world',
  classical: 'Classical antiquity',
  medieval: 'Medieval',
  'early-modern': 'Early modern',
  industrial: 'Industrial age',
  modern: 'Modern',
  contemporary: 'Contemporary',
}

/** How sure are we? Drives the badge, and whether the claim may be narrated flatly. */
export type Confidence = 'established' | 'contested' | 'speculation'

export type SourceKind = 'primary' | 'book' | 'paper' | 'archive' | 'dataset'

export interface Source {
  id: string
  kind: SourceKind
  author: string
  title: string
  year: number
  /** Publisher, journal, archive reference — whatever makes it findable offline. */
  detail?: string
  url?: string
  /** Why this source, and what it is good for. Shown under the citation. */
  note?: string
}

/** A paragraph-level narrative block. `sourceIds` point into the story's sources. */
export interface Beat {
  heading: string
  /** Short paragraphs. The reader should never meet a wall of text. */
  paragraphs: string[]
  /** An optional pull-out: an analogy, a number, a voice from the time. */
  aside?: {
    kind: 'analogy' | 'number' | 'voice' | 'caution'
    label: string
    body: string
    /** Required when kind is 'voice' — a quotation needs its source. */
    sourceId?: string
  }
  sourceIds?: string[]
}

export interface ConsequenceBeat extends Beat {
  shortTerm: string[]
  longTerm: string[]
  /** The ones nobody saw coming. This is usually the most interesting list. */
  unexpected: string[]
}

export interface TimelineEvent {
  year: number
  /** Month/day when known — "1839-06-03". Sorting only ever uses `year` plus this. */
  date?: string
  title: string
  detail: string
  /** Marks the hinge moments; the rail gives these a heavier dot. */
  pivotal?: boolean
  confidence?: Confidence
}

export interface CauseEffect {
  cause: string
  effect: string
  /** The mechanism in one clause — the part textbooks leave out. */
  because: string
}

export interface Myth {
  myth: string
  reality: string
  /** Why the myth exists is usually as interesting as the correction. */
  whyItPersists?: string
  sourceIds?: string[]
}

export interface Disagreement {
  question: string
  positions: { view: string; heldBy: string; sourceId?: string }[]
  /** What the atlas will and will not assert in its own voice. */
  atlasPosition: string
}

/**
 * A different angle on the same story. The base article is written for a curious
 * ten-year-old and stays accurate; a lens re-frames it without replacing it.
 * Pre-written lenses ship with the story so the feature works with no backend;
 * `src/lib/ai` generates the rest on demand when a provider is configured.
 */
export interface Lens {
  id: string
  label: string
  kind: 'age' | 'length' | 'angle' | 'contrast'
  paragraphs: string[]
}

export interface BeforeAfter {
  label: string
  before: { title: string; points: string[] }
  after: { title: string; points: string[] }
}

/** A "what if?" — always rendered as clearly-labelled speculation, never as history. */
export interface WhatIf {
  question: string
  /** The plausible branch, with its reasoning shown. */
  reasoning: string
  /** What actually constrains the counterfactual — why it may not have gone that way. */
  constraint: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  answerIndex: number
  /** Shown after answering. Teaching happens here, not in the score. */
  explains: string
}

export interface Story {
  slug: string
  title: string
  /** One line, on the card and under the title. */
  subtitle: string
  /**
   * Beat 1. The surprising sentence that starts everything. Rendered at hero
   * size — if it does not make a stranger stop scrolling, it is not the hook.
   */
  hook: string
  era: Era
  /** Signed years; negative is BCE. */
  years: readonly [number, number]
  regions: string[]
  /** Graph node ids this story is *about*. The first is its primary node. */
  nodes: string[]
  tags: string[]
  readingMinutes: number
  /** ISO date of the last review by a person. */
  reviewed: string
  beats: {
    worldBefore: Beat
    problem: Beat
    story: Beat
    whyItHappened: Beat
    consequences: ConsequenceBeat
    whyItMatters: Beat
  }
  timeline: TimelineEvent[]
  causeEffect: CauseEffect[]
  myths: Myth[]
  disagreements: Disagreement[]
  didYouKnow: string[]
  lenses: Lens[]
  beforeAfter?: BeforeAfter
  whatIf?: WhatIf[]
  quiz: QuizQuestion[]
  sources: Source[]
}

/* ------------------------------------------------------------------ graph -- */

export type NodeKind =
  | 'person'
  | 'empire'
  | 'organisation'
  | 'event'
  | 'idea'
  | 'technology'
  | 'trade'
  | 'place'
  | 'religion'
  | 'discovery'

export const NODE_KIND_LABEL: Record<NodeKind, string> = {
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
}

export interface GraphNode {
  id: string
  label: string
  kind: NodeKind
  /** One sentence. Shown on hover and on the node card. */
  blurb: string
  era: Era
  years?: readonly [number, number]
  /** Slug of the story that covers this node, when one exists. */
  story?: string
}

/**
 * Edges are *labelled and directed*. "Britain → Opium Wars" is not the same
 * relationship as "Opium Wars → Hong Kong", and a graph that flattens both into
 * "related" cannot answer "what happened next?" — which is the entire product.
 */
export type EdgeRelation =
  | 'caused'
  | 'enabled'
  | 'funded'
  | 'ruled'
  | 'studied-at'
  | 'wrote'
  | 'traded-with'
  | 'conquered'
  | 'succeeded-by'
  | 'preserved'
  | 'inspired'
  | 'destroyed'

export const RELATION_PHRASE: Record<EdgeRelation, string> = {
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
}

export interface GraphEdge {
  from: string
  to: string
  relation: EdgeRelation
  /** The one-line "why", shown on the connection card. */
  note: string
  confidence?: Confidence
}
