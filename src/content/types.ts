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

/**
 * One card of the reel. The reel is the *default* way a story is told: a stack
 * of single-idea cards you flick through with a thumb, about a minute end to
 * end. The long-form article still exists behind it, but almost nobody arrives
 * wanting eleven minutes — they arrive wanting to know what happened.
 *
 * The constraint that makes it work: one card, one idea, one breath. If a card
 * needs a comma-spliced second clause to land, it is two cards.
 */
export interface ReelCard {
  /** The line. Hard-capped at 32 words by `check-content.mjs`, usually far under. */
  text: string
  /** Small label above the line: a year, a place, a number. */
  kicker?: string
  /** Which narrative beat this card belongs to, for the progress rail. */
  beat: ReelBeat
  /** A turn in the story. Rendered in the accent colour, and given more air. */
  punch?: boolean
  /**
   * Renders this card as a chapter break — "Step 3" on a plain card, with the
   * text as the step's title. It is a small device that does a lot: it turns a
   * sequence of events into a procedure somebody followed on purpose, which is
   * usually the honest reading and always the more gripping one.
   */
  step?: number
  /**
   * An abstract mark drawn above the line. These are *diagrams of the sentence*,
   * not pictures of the scene — a hub with spokes for a company holding every
   * utility, arrows leaving a vessel for silver draining east. Illustration
   * would need licensed art or a generator; a shape that means something needs
   * neither and cannot be wrong about a face.
   *
   * Use them sparingly. A mark on every card is wallpaper.
   */
  mark?: MarkName
}

export type MarkName =
  | 'imbalance'
  | 'drain'
  | 'reversal'
  | 'chain'
  | 'spike'
  | 'collapse'
  | 'web'
  | 'gate'
  | 'press'
  | 'echo'

/** Reel colour registers. Defined in `index.css`, one block per theme. */
export type Mood = 'ember' | 'noir' | 'lapis' | 'jungle'

export const MOODS: Mood[] = ['ember', 'noir', 'lapis', 'jungle']

export type ReelBeat =
  | 'hook'
  | 'worldBefore'
  | 'problem'
  | 'story'
  | 'whyItHappened'
  | 'consequences'
  | 'whyItMatters'

export const REEL_BEAT_LABEL: Record<ReelBeat, string> = {
  hook: 'The hook',
  worldBefore: 'Before',
  problem: 'The problem',
  story: 'What happened',
  whyItHappened: 'Why',
  consequences: 'What changed',
  whyItMatters: 'Why it matters',
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
  /**
   * The story at reel length — what a reader gets unless they ask for more.
   * Same eight beats, same facts, roughly a fiftieth of the words.
   */
  reel: ReelCard[]
  /**
   * The reel's colour register. Only the reel uses it — the rest of the atlas
   * stays one consistent surface, because a site that changes identity per page
   * reads as broken rather than as designed. Each mood is defined for both
   * themes and every pairing is checked at 4.5:1.
   */
  mood: Mood
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
  | 'named'
  | 'held'
  | 'fought'

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
  named: 'gave its name to',
  held: 'held captive',
  fought: 'fought',
}

export interface GraphEdge {
  from: string
  to: string
  relation: EdgeRelation
  /** The one-line "why", shown on the connection card. */
  note: string
  confidence?: Confidence
}
