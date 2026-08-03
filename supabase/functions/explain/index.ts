/**
 * POST /functions/v1/explain
 *
 * Body: { slug: string, instruction: string }
 * Returns: { paragraphs: string[], label: string, model: string }
 *
 * Retrieves the story's own reviewed passages, then asks Claude to re-tell them
 * the way the reader asked. The key never leaves this function, and the model
 * never sees anything except passages a person already checked.
 *
 * Deploy:  supabase functions deploy explain
 * Secrets: supabase secrets set ANTHROPIC_API_KEY=... VOYAGE_API_KEY=...
 */

import { createClient } from 'jsr:@supabase/supabase-js@2'
import Anthropic from 'npm:@anthropic-ai/sdk@0.65.0'
import { ATLAS_SYSTEM_PROMPT, buildContext, type RetrievedChunk } from '../_shared/prompt.ts'

const MODEL = Deno.env.get('ATLAS_MODEL') ?? 'claude-sonnet-5'
const EMBEDDING_MODEL = 'voyage-3'

const CORS = {
  'access-control-allow-origin': Deno.env.get('ATLAS_ALLOWED_ORIGIN') ?? '*',
  'access-control-allow-headers': 'authorization, content-type',
  'access-control-allow-methods': 'POST, OPTIONS',
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const anthropic = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY')! })

async function embed(text: string): Promise<number[]> {
  const response = await fetch('https://api.voyageai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${Deno.env.get('VOYAGE_API_KEY')}`,
    },
    body: JSON.stringify({ input: [text], model: EMBEDDING_MODEL, input_type: 'query' }),
  })
  if (!response.ok) throw new Error(`embedding failed: ${response.status}`)
  const data = await response.json()
  return data.data[0].embedding
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'content-type': 'application/json' },
  })
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS })
  if (request.method !== 'POST') return json({ error: 'POST only' }, 405)

  try {
    const { slug, instruction } = await request.json()

    if (typeof slug !== 'string' || typeof instruction !== 'string') {
      return json({ error: 'slug and instruction are required' }, 400)
    }
    // A long "instruction" is usually an attempt to smuggle in content to
    // rewrite. The field is a lens request, and lens requests are short.
    if (instruction.length > 280) {
      return json({ error: 'instruction too long' }, 400)
    }

    // Retrieve within this story only. Cross-story retrieval would let an
    // explanation of the Opium Wars quietly cite the Baghdad article.
    const embedding = await embed(instruction)
    const { data: chunks, error } = await supabase.rpc('match_chunks', {
      query_embedding: embedding,
      match_count: 12,
      min_similarity: 0.2,
      filter_slug: slug,
    })
    if (error) throw error

    if (!chunks || chunks.length === 0) {
      return json(
        {
          paragraphs: [
            'There is nothing in this story that answers that. Rather than guess, the atlas ' +
              'would rather say so — try one of the written lenses, or ask about something the ' +
              'article actually covers.',
          ],
          label: instruction,
          model: MODEL,
        },
        200,
      )
    }

    const { data: sources } = await supabase
      .from('sources')
      .select('id, title, author, year')
      .eq('slug', slug)

    const context = buildContext(chunks as RetrievedChunk[], sources ?? [])

    const message = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1400,
      system: [
        // The corpus context is stable per story; caching it makes repeat lenses
        // on the same page substantially cheaper.
        { type: 'text', text: ATLAS_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
      ],
      messages: [
        {
          role: 'user',
          content:
            `${context}\n\n` +
            `The reader is on the story "${slug}" and asked: "${instruction}"\n\n` +
            `Re-tell this material the way they asked, working only from the passages above.`,
        },
      ],
    })

    const text = message.content
      .filter((block): block is { type: 'text'; text: string } => block.type === 'text')
      .map((block) => block.text)
      .join('\n')

    const paragraphs = text
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)

    return json({ paragraphs, label: instruction, model: MODEL })
  } catch (cause) {
    console.error('explain failed', cause)
    return json({ error: 'The explainer is unavailable. The written lenses still work.' }, 502)
  }
})
