/**
 * POST /functions/v1/search
 *
 * Body: { query: string, limit?: number }
 * Returns: { results: SearchResult[] }
 *
 * Semantic search over story passages. "Why did Britain sell opium?" contains
 * none of the words in the paragraph that answers it, which is the entire reason
 * this exists rather than a LIKE query.
 *
 * No model writes anything here — it embeds the question, finds passages, and
 * returns them. Generation is a separate function, on purpose: search results
 * that were paraphrased by a model are no longer quotable.
 *
 * Deploy: supabase functions deploy search
 */

import { createClient } from 'jsr:@supabase/supabase-js@2'

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

interface Chunk {
  slug: string
  kind: string
  anchor: string
  heading: string | null
  body: string
  confidence: string
  similarity: number
}

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

function excerpt(text: string, limit = 180): string {
  if (text.length <= limit) return text
  const cut = text.slice(0, limit)
  const space = cut.lastIndexOf(' ')
  return `${cut.slice(0, space > 80 ? space : limit)}…`
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS })

  try {
    const { query, limit = 8 } = await request.json()
    if (typeof query !== 'string' || query.trim().length < 2) {
      return new Response(JSON.stringify({ results: [] }), {
        headers: { ...CORS, 'content-type': 'application/json' },
      })
    }

    const embedding = await embed(query)
    const { data, error } = await supabase.rpc('match_chunks', {
      query_embedding: embedding,
      match_count: Math.min(limit, 20),
      // Deliberately higher than the explain threshold. An empty search result
      // is a fine answer; a confidently irrelevant one is not.
      min_similarity: 0.3,
      filter_slug: null,
    })
    if (error) throw error

    const { data: titles } = await supabase.from('stories').select('slug, title')
    const titleBySlug = new Map((titles ?? []).map((row) => [row.slug, row.title]))

    const results = (data as Chunk[]).map((chunk) => ({
      kind: chunk.kind === 'beat' ? 'section' : chunk.kind === 'fact' ? 'fact' : 'section',
      title: chunk.heading ?? titleBySlug.get(chunk.slug) ?? chunk.slug,
      href: `/story/${chunk.slug}#${chunk.anchor}`,
      snippet: excerpt(chunk.body),
      score: chunk.similarity,
      context:
        `${titleBySlug.get(chunk.slug) ?? chunk.slug}` +
        (chunk.confidence === 'contested' ? ' · contested' : ''),
    }))

    return new Response(JSON.stringify({ results }), {
      headers: { ...CORS, 'content-type': 'application/json' },
    })
  } catch (cause) {
    console.error('search failed', cause)
    // The client falls back to its local index on any non-200, so a failure here
    // degrades to keyword search rather than to a broken search box.
    return new Response(JSON.stringify({ error: 'search unavailable' }), {
      status: 502,
      headers: { ...CORS, 'content-type': 'application/json' },
    })
  }
})
