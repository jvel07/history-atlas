import type { Lang } from '@/lib/i18n'
import type { GraphNode, Story } from './types'
import { graphFor, type GraphView } from './graph'
import { opiumWars } from './stories/opium-wars'
import { alKhwarizmi } from './stories/al-khwarizmi'
import { vladTepes } from './stories/vlad-tepes'
import { unitedFruit } from './stories/united-fruit'
import { markopolos } from './stories/markopolos'
import { opiumWarsEs } from './es/stories/opium-wars'
import { alKhwarizmiEs } from './es/stories/al-khwarizmi'
import { vladTepesEs } from './es/stories/vlad-tepes'
import { unitedFruitEs } from './es/stories/united-fruit'
import { markopolosEs } from './es/stories/markopolos'
import { cannae } from './stories/cannae'
import { fallOfConstantinople } from './stories/fall-of-constantinople'
import { cannaeEs } from './es/stories/cannae'
import { fallOfConstantinopleEs } from './es/stories/fall-of-constantinople'
import { printingPress } from './stories/printing-press'
import { transatlanticCable } from './stories/transatlantic-cable'
import { printingPressEs } from './es/stories/printing-press'
import { transatlanticCableEs } from './es/stories/transatlantic-cable'
import { libraryOfAlexandria } from './stories/library-of-alexandria'
import { bronzeAgeCollapse } from './stories/bronze-age-collapse'
import { libraryOfAlexandriaEs } from './es/stories/library-of-alexandria'
import { bronzeAgeCollapseEs } from './es/stories/bronze-age-collapse'

export * from './types'
export * from './graph'
export * from './labels'

/**
 * The corpus, per language.
 *
 * Order is part of the content — the first story is what the home page leads
 * with — so it is written out per language rather than derived, and
 * `check-content.mjs` checks the two lists carry the same slugs in the same
 * order. Everything downstream (the map, "continue the journey", the search
 * index) is derived from whichever corpus is active, so a reader never crosses
 * a language boundary mid-journey.
 */
const STORIES_BY_LANG: Record<Lang, Story[]> = {
  en: [markopolos, cannae, fallOfConstantinople, unitedFruit, printingPress, transatlanticCable, vladTepes, libraryOfAlexandria, bronzeAgeCollapse, opiumWars, alKhwarizmi],
  es: [markopolosEs, cannaeEs, fallOfConstantinopleEs, unitedFruitEs, printingPressEs, transatlanticCableEs, vladTepesEs, libraryOfAlexandriaEs, bronzeAgeCollapseEs, opiumWarsEs, alKhwarizmiEs],
}

/**
 * "Continue the journey" is *derived from the graph*, never hand-written per
 * story. A hand-written list rots the moment a node is added; a derived one
 * cannot disagree with the map the reader just looked at.
 *
 * Ordering is deliberate: somewhere to *go* first (a node with a story behind
 * it), then the nodes that only exist as connections, because a reader who
 * clicks and finds nothing stops clicking.
 */
export interface NextStep {
  node: GraphNode
  /** The sentence explaining the link, taken from the edge. */
  why: string
  hasStory: boolean
  contested: boolean
}

/** Every "did you know?" in the atlas, tagged with where it came from. */
export interface Curio {
  fact: string
  storySlug: string
  storyTitle: string
}

export interface Corpus {
  lang: Lang
  graph: GraphView
  stories: Story[]
  storyBySlug(slug: string): Story | undefined
  /** The story covering a node, if one has been written. */
  storyForNode(nodeId: string): Story | undefined
  nextSteps(story: Story, limit?: number): NextStep[]
  /** Stories other than this one, nearest first by shared graph neighbourhood. */
  relatedStories(slug: string): Story[]
  curios: Curio[]
  /** Nodes with no story yet — shown honestly rather than linked into a dead end. */
  unwrittenNodes(): GraphNode[]
  stats: { stories: number; nodes: number; sources: number; minutes: number }
}

function build(lang: Lang): Corpus {
  const graph = graphFor(lang)
  const stories = STORIES_BY_LANG[lang]
  const bySlug = new Map(stories.map((s) => [s.slug, s]))

  function storyBySlug(slug: string) {
    return bySlug.get(slug)
  }

  function nextSteps(story: Story, limit = 8): NextStep[] {
    const seen = new Set<string>(story.nodes)
    const steps: NextStep[] = []

    for (const nodeId of story.nodes) {
      for (const { edge, node } of graph.connectionsFor(nodeId)) {
        if (seen.has(node.id)) continue
        seen.add(node.id)
        steps.push({
          node,
          why: edge.note,
          hasStory: Boolean(node.story),
          contested: edge.confidence === 'contested',
        })
      }
    }

    return steps
      .sort((a, b) => Number(b.hasStory) - Number(a.hasStory))
      .slice(0, limit)
  }

  function relatedStories(slug: string): Story[] {
    const story = bySlug.get(slug)
    if (!story) return []

    const neighbourhood = new Set<string>()
    for (const nodeId of story.nodes) {
      neighbourhood.add(nodeId)
      for (const { node } of graph.connectionsFor(nodeId)) neighbourhood.add(node.id)
    }

    return stories
      .filter((other) => other.slug !== slug)
      .map((other) => ({
        other,
        overlap: other.nodes.filter((n) => neighbourhood.has(n)).length,
      }))
      .sort((a, b) => b.overlap - a.overlap)
      .map((entry) => entry.other)
  }

  return {
    lang,
    graph,
    stories,
    storyBySlug,
    storyForNode(nodeId) {
      const node = graph.nodeById(nodeId)
      return node?.story ? bySlug.get(node.story) : undefined
    },
    nextSteps,
    relatedStories,
    curios: stories.flatMap((story) =>
      story.didYouKnow.map((fact) => ({ fact, storySlug: story.slug, storyTitle: story.title })),
    ),
    unwrittenNodes: () => graph.nodes.filter((node) => !node.story),
    stats: {
      stories: stories.length,
      nodes: graph.nodes.length,
      sources: new Set(stories.flatMap((s) => s.sources.map((src) => `${src.author}|${src.title}`)))
        .size,
      minutes: stories.reduce((total, s) => total + s.readingMinutes, 0),
    },
  }
}

const CORPORA: Partial<Record<Lang, Corpus>> = {}

export function corpusFor(lang: Lang): Corpus {
  return (CORPORA[lang] ??= build(lang))
}

/** Every language's stories, for the checks that compare them. */
export const ALL_STORIES = STORIES_BY_LANG
