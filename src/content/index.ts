import type { GraphNode, Story } from './types'
import { connectionsFor, nodeById, NODES } from './graph'
import { opiumWars } from './stories/opium-wars'
import { alKhwarizmi } from './stories/al-khwarizmi'
import { vladTepes } from './stories/vlad-tepes'

export * from './types'
export * from './graph'

export const STORIES: Story[] = [vladTepes, opiumWars, alKhwarizmi]

export const STORY_BY_SLUG = new Map(STORIES.map((s) => [s.slug, s]))

export function storyBySlug(slug: string): Story | undefined {
  return STORY_BY_SLUG.get(slug)
}

/** The story covering a node, if one has been written. */
export function storyForNode(nodeId: string): Story | undefined {
  const node = nodeById(nodeId)
  return node?.story ? STORY_BY_SLUG.get(node.story) : undefined
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

export function nextSteps(story: Story, limit = 8): NextStep[] {
  const seen = new Set<string>(story.nodes)
  const steps: NextStep[] = []

  for (const nodeId of story.nodes) {
    for (const { edge, node } of connectionsFor(nodeId)) {
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

/** Stories other than this one, nearest first by shared graph neighbourhood. */
export function relatedStories(slug: string): Story[] {
  const story = STORY_BY_SLUG.get(slug)
  if (!story) return []

  const neighbourhood = new Set<string>()
  for (const nodeId of story.nodes) {
    neighbourhood.add(nodeId)
    for (const { node } of connectionsFor(nodeId)) neighbourhood.add(node.id)
  }

  return STORIES.filter((other) => other.slug !== slug)
    .map((other) => ({
      other,
      overlap: other.nodes.filter((n) => neighbourhood.has(n)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .map((entry) => entry.other)
}

/** Every "did you know?" in the atlas, tagged with where it came from. */
export interface Curio {
  fact: string
  storySlug: string
  storyTitle: string
}

export const CURIOS: Curio[] = STORIES.flatMap((story) =>
  story.didYouKnow.map((fact) => ({ fact, storySlug: story.slug, storyTitle: story.title })),
)

/** Nodes with no story yet — shown honestly rather than linked into a dead end. */
export function unwrittenNodes(): GraphNode[] {
  return NODES.filter((node) => !node.story)
}

export const ATLAS_STATS = {
  stories: STORIES.length,
  nodes: NODES.length,
  sources: new Set(STORIES.flatMap((s) => s.sources.map((src) => `${src.author}|${src.title}`))).size,
  minutes: STORIES.reduce((total, s) => total + s.readingMinutes, 0),
}
