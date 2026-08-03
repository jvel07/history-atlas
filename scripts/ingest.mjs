/**
 * Push the reviewed corpus into Postgres and embed it for retrieval.
 *
 * The direction is one-way and that is the point: git is the source of truth,
 * the database is a projection. Nothing this script writes can be edited in the
 * database and end up on the site, so a compromised or careless write to the
 * corpus tables cannot change what a reader sees — only what retrieval finds.
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... VOYAGE_API_KEY=... \
 *     node scripts/ingest.mjs
 *
 * Re-running is safe: rows are upserted and chunks for a story are replaced
 * wholesale, so deleted paragraphs actually disappear from retrieval.
 */

import { build } from 'esbuild'
import { createClient } from '@supabase/supabase-js'
import { mkdir, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const EMBEDDING_MODEL = 'voyage-3'
const BATCH = 64

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const voyageKey = process.env.VOYAGE_API_KEY

if (!url || !serviceKey || !voyageKey) {
  console.error('Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and VOYAGE_API_KEY.')
  process.exit(1)
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, '.ingest')
const outFile = path.join(outDir, 'content.mjs')

await mkdir(outDir, { recursive: true })
await build({
  entryPoints: [path.join(root, 'src/content/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: outFile,
  logLevel: 'error',
  alias: { '@': path.join(root, 'src') },
})

const { STORIES, NODES, EDGES } = await import(pathToFileURL(outFile).href)
const supabase = createClient(url, serviceKey, { auth: { persistSession: false } })

/** One chunk per retrievable passage. Beats stay whole — splitting mid-argument
 *  produces passages that retrieve well and read as non-sequiturs in context. */
function chunksFor(story) {
  const chunks = []

  for (const [anchor, beat] of Object.entries(story.beats)) {
    chunks.push({
      slug: story.slug,
      kind: 'beat',
      anchor,
      heading: beat.heading,
      body: [beat.paragraphs.join('\n\n'), beat.aside && `${beat.aside.label}: ${beat.aside.body}`]
        .filter(Boolean)
        .join('\n\n'),
      source_ids: beat.sourceIds ?? [],
      confidence: 'established',
    })
  }

  const { consequences } = story.beats
  chunks.push({
    slug: story.slug,
    kind: 'beat',
    anchor: 'consequences',
    heading: 'What changed',
    body: [
      'Straight away:',
      ...consequences.shortTerm,
      'Over the long run:',
      ...consequences.longTerm,
      'Unexpected:',
      ...consequences.unexpected,
    ].join('\n'),
    source_ids: consequences.sourceIds ?? [],
    confidence: 'established',
  })

  for (const myth of story.myths) {
    chunks.push({
      slug: story.slug,
      kind: 'myth',
      anchor: 'myths',
      heading: `Myth: ${myth.myth}`,
      body: [myth.reality, myth.whyItPersists].filter(Boolean).join('\n\n'),
      source_ids: myth.sourceIds ?? [],
      confidence: 'established',
    })
  }

  for (const disagreement of story.disagreements) {
    chunks.push({
      slug: story.slug,
      kind: 'disagreement',
      anchor: 'disagreements',
      heading: disagreement.question,
      body: [
        ...disagreement.positions.map((p) => `${p.heldBy}: ${p.view}`),
        `Where the atlas stands: ${disagreement.atlasPosition}`,
      ].join('\n\n'),
      source_ids: disagreement.positions.map((p) => p.sourceId).filter(Boolean),
      confidence: 'contested',
    })
  }

  for (const event of story.timeline) {
    chunks.push({
      slug: story.slug,
      kind: 'timeline',
      anchor: 'timeline',
      heading: `${event.year}: ${event.title}`,
      body: event.detail,
      source_ids: [],
      confidence: event.confidence ?? 'established',
    })
  }

  for (const fact of story.didYouKnow) {
    chunks.push({
      slug: story.slug,
      kind: 'fact',
      anchor: 'continue',
      heading: null,
      body: fact,
      source_ids: [],
      confidence: 'established',
    })
  }

  for (const lens of story.lenses) {
    chunks.push({
      slug: story.slug,
      kind: 'lens',
      anchor: 'lenses',
      heading: lens.label,
      body: lens.paragraphs.join('\n\n'),
      source_ids: [],
      confidence: 'established',
    })
  }

  return chunks
}

async function embedAll(texts) {
  const vectors = []
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH)
    const response = await fetch('https://api.voyageai.com/v1/embeddings', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${voyageKey}` },
      body: JSON.stringify({ input: batch, model: EMBEDDING_MODEL, input_type: 'document' }),
    })
    if (!response.ok) throw new Error(`embedding failed: ${response.status} ${await response.text()}`)
    const data = await response.json()
    vectors.push(...data.data.map((row) => row.embedding))
    process.stdout.write(`  embedded ${Math.min(i + BATCH, texts.length)}/${texts.length}\r`)
  }
  return vectors
}

for (const story of STORIES) {
  await supabase.from('stories').upsert({
    slug: story.slug,
    title: story.title,
    subtitle: story.subtitle,
    hook: story.hook,
    era: story.era,
    year_from: story.years[0],
    year_to: story.years[1],
    regions: story.regions,
    tags: story.tags,
    reading_minutes: story.readingMinutes,
    reviewed_on: story.reviewed,
    updated_at: new Date().toISOString(),
  })

  await supabase.from('sources').delete().eq('slug', story.slug)
  await supabase.from('sources').insert(
    story.sources.map((source) => ({
      id: source.id,
      slug: story.slug,
      kind: source.kind,
      author: source.author,
      title: source.title,
      year: source.year,
      detail: source.detail ?? null,
      url: source.url ?? null,
      note: source.note ?? null,
    })),
  )

  const chunks = chunksFor(story)
  console.log(`${story.slug}: ${chunks.length} passages`)
  const embeddings = await embedAll(chunks.map((chunk) => chunk.body))

  await supabase.from('story_chunks').delete().eq('slug', story.slug)
  const { error } = await supabase.from('story_chunks').insert(
    chunks.map((chunk, index) => ({
      ...chunk,
      embedding: embeddings[index],
      token_count: Math.round(chunk.body.length / 4),
    })),
  )
  if (error) throw error
}

await supabase.from('graph_nodes').upsert(
  NODES.map((node) => ({
    id: node.id,
    label: node.label,
    kind: node.kind,
    blurb: node.blurb,
    era: node.era,
    year_from: node.years?.[0] ?? null,
    year_to: node.years?.[1] ?? null,
    story: node.story ?? null,
  })),
)

await supabase.from('graph_edges').delete().neq('id', 0)
await supabase.from('graph_edges').insert(
  EDGES.map((edge) => ({
    from_id: edge.from,
    to_id: edge.to,
    relation: edge.relation,
    note: edge.note,
    confidence: edge.confidence ?? 'established',
  })),
)

await rm(outDir, { recursive: true, force: true })
console.log(`\ningested ${STORIES.length} stories, ${NODES.length} nodes, ${EDGES.length} edges`)
