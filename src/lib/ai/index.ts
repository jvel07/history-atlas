import type { Lens, Story } from '@/content/types'

/**
 * The adaptive-explanation client.
 *
 * The product promise is that a reader can say "explain it like I'm 16", "in one
 * minute", "focus on the economics", and get that. Two things follow from taking
 * accuracy seriously while promising that:
 *
 * 1. **The key never touches the browser.** Generation goes through a Supabase
 *    Edge Function that holds the credential and does the retrieval. The prompt
 *    lives there too — a system prompt shipped to the client is a system prompt
 *    the client can edit.
 *
 * 2. **Nothing is generated from nothing.** The function is given the story's own
 *    text and sources as context and told to work from them. A model asked to
 *    free-associate about the Qing dynasty will produce fluent, plausible,
 *    partly-invented history, which is exactly the failure this atlas exists to
 *    avoid.
 *
 * With no backend configured, the pre-written lenses that ship with each story
 * still work, and the free-text box says so instead of silently doing nothing.
 */

export interface ExplainRequest {
  storySlug: string
  /** Free-text instruction: "focus on the economics", "compare with Rome". */
  instruction: string
  /** Preset lens the reader picked, when they picked one rather than typing. */
  lensId?: string
}

export interface Explanation {
  paragraphs: string[]
  /** Which lens this is, for the UI. Pre-written lenses reuse their own id. */
  lensId: string
  label: string
  /** Set when a model wrote it, so the page can say so. Absent when pre-written. */
  generatedBy?: string
}

export interface ExplainProvider {
  id: 'prewritten' | 'remote'
  /** Whether free-text instructions are possible, as opposed to preset lenses only. */
  canGenerate: boolean
  explain(request: ExplainRequest, story: Story): Promise<Explanation>
}

export class ExplainUnavailableError extends Error {
  constructor() {
    super(
      'Custom explanations need the AI backend. Set VITE_ATLAS_API to a deployed ' +
        'Supabase functions URL — see docs/ARCHITECTURE.md. The lenses below work offline.',
    )
    this.name = 'ExplainUnavailableError'
  }
}

function fromLens(lens: Lens): Explanation {
  return { paragraphs: lens.paragraphs, lensId: lens.id, label: lens.label }
}

export const prewrittenProvider: ExplainProvider = {
  id: 'prewritten',
  canGenerate: false,
  async explain(request, story) {
    const lens = story.lenses.find((l) => l.id === request.lensId)
    if (!lens) throw new ExplainUnavailableError()
    return fromLens(lens)
  },
}

export function remoteProvider(endpoint: string): ExplainProvider {
  return {
    id: 'remote',
    canGenerate: true,
    async explain(request, story) {
      // A preset lens is already written and reviewed. Never pay a model to
      // reproduce something a person has already checked.
      const preset = story.lenses.find((l) => l.id === request.lensId)
      if (preset) return fromLens(preset)

      const response = await fetch(`${endpoint}/explain`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ slug: request.storySlug, instruction: request.instruction }),
      })

      if (!response.ok) {
        throw new Error(`The explainer returned ${response.status}. Try again in a moment.`)
      }

      const data = (await response.json()) as {
        paragraphs: string[]
        label?: string
        model?: string
      }

      return {
        paragraphs: data.paragraphs,
        lensId: 'custom',
        label: data.label ?? request.instruction,
        generatedBy: data.model ?? 'claude',
      }
    },
  }
}

const endpoint = import.meta.env.VITE_ATLAS_API as string | undefined

export const explainProvider: ExplainProvider = endpoint
  ? remoteProvider(endpoint)
  : prewrittenProvider

/** Suggestions offered under the box, drawn from the vision's own examples. */
export const INSTRUCTION_SUGGESTIONS = [
  'Explain it like I’m 10',
  'Go into deep detail',
  'Focus on the economics',
  'Focus on the military strategy',
  'Compare this with another civilisation',
  'Challenge the common myths',
  'Show me the opposing historical views',
]
