/**
 * Structural checks over the corpus.
 *
 * The type system already guarantees that a story has all six narrative beats —
 * they are named fields, so a missing one will not compile. What it cannot check
 * is whether the *references between* pieces of content resolve: a `sourceId`
 * pointing at a citation that was renamed, a story listing a graph node that no
 * longer exists, an edge to a deleted node, a quiz whose answer index is off by
 * one. Every one of those compiles perfectly and is wrong on the page.
 *
 * Content is TypeScript, so it is bundled with esbuild first and then imported.
 */

import { build } from 'esbuild'
import { mkdir, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, '.verify')
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

const content = await import(pathToFileURL(outFile).href)
const { STORIES, NODES, EDGES, nextSteps, MOODS } = content

/** Marks are drawn by hand in ReelMarks.tsx; a typo would silently render nothing. */
const MARKS = new Set([
  'imbalance', 'drain', 'reversal', 'chain', 'spike', 'collapse', 'web', 'gate', 'press', 'echo', 'toosmooth',
])

const failures = []
const warnings = []

function check(condition, message) {
  if (!condition) failures.push(message)
}

/* ------------------------------------------------------------ graph -- */

const nodeIds = new Set(NODES.map((n) => n.id))
check(nodeIds.size === NODES.length, 'duplicate node ids in the graph')

for (const node of NODES) {
  if (node.years) {
    check(
      node.years[0] <= node.years[1],
      `node "${node.id}" has years running backwards: ${node.years.join('–')}`,
    )
  }
  check(node.blurb.trim().length > 20, `node "${node.id}" has no real blurb`)
}

for (const edge of EDGES) {
  check(nodeIds.has(edge.from), `edge references missing node "${edge.from}"`)
  check(nodeIds.has(edge.to), `edge references missing node "${edge.to}"`)
  check(edge.from !== edge.to, `edge from "${edge.from}" points at itself`)
  check(
    edge.note.trim().length > 15,
    `edge ${edge.from} → ${edge.to} has no explanation; an unlabelled link is not information`,
  )
}

const edgeKeys = new Set(EDGES.map((e) => `${e.from}>${e.to}`))
check(edgeKeys.size === EDGES.length, 'duplicate edges in the graph')

/* ---------------------------------------------------------- stories -- */

const slugs = new Set(STORIES.map((s) => s.slug))
check(slugs.size === STORIES.length, 'duplicate story slugs')

for (const story of STORIES) {
  const where = `story "${story.slug}"`
  const sourceIds = new Set(story.sources.map((s) => s.id))
  check(sourceIds.size === story.sources.length, `${where}: duplicate source ids`)

  const resolve = (ids, context) => {
    for (const id of ids ?? []) {
      check(sourceIds.has(id), `${where}: ${context} cites unknown source "${id}"`)
    }
  }

  // Every beat must actually say something, and cite what it says. Consequences
  // is the exception: its substance is the three lists below, and its prose is a
  // single line of framing by design.
  for (const [key, beat] of Object.entries(story.beats)) {
    const minimum = key === 'consequences' ? 1 : 2
    check(
      beat.paragraphs.length >= minimum,
      `${where}: beat "${key}" has fewer than ${minimum} paragraph(s)`,
    )
    check(beat.heading.trim().length > 0, `${where}: beat "${key}" has no heading`)
    resolve(beat.sourceIds, `beat "${key}"`)
    if (beat.aside) {
      resolve(beat.aside.sourceId ? [beat.aside.sourceId] : [], `aside in "${key}"`)
      // A quotation without a citation is the one aside kind that cannot ship.
      check(
        beat.aside.kind !== 'voice' || Boolean(beat.aside.sourceId),
        `${where}: quoted aside in "${key}" has no source`,
      )
    }
  }

  const { consequences } = story.beats
  check(consequences.shortTerm.length > 0, `${where}: no short-term consequences`)
  check(consequences.longTerm.length > 0, `${where}: no long-term consequences`)
  check(consequences.unexpected.length > 0, `${where}: no unexpected consequences`)

  /* ---------------------------------------------------------- the reel --
   *
   * These limits are the feature, not a formality. The reel is the default way
   * a story is told, and every long-form instinct pulls it back towards being a
   * paragraph cut into pieces. A card that needs a second clause to land is two
   * cards, and a reel over the word budget is an article wearing a costume.
   */
  const reelWords = story.reel.reduce((n, card) => n + card.text.split(/\s+/).length, 0)

  check(MOODS.includes(story.mood), `${where}: unknown reel mood "${story.mood}"`)

  check(story.reel.length >= 12, `${where}: reel has only ${story.reel.length} cards; it needs at least 12`)
  check(story.reel.length <= 30, `${where}: reel has ${story.reel.length} cards; over 30 is no longer only the important events`)
  check(reelWords <= 450, `${where}: reel is ${reelWords} words; the budget is 450`)

  // The cap catches the worst card; the median catches the real failure mode,
  // which is every card creeping up to fourteen or fifteen words at once. A
  // reel is short sentences with a few long ones, not uniformly medium ones.
  const lengths = story.reel.map((card) => card.text.split(/\s+/).length).sort((a, b) => a - b)
  const median = lengths[Math.floor(lengths.length / 2)]
  check(median <= 14, `${where}: median card is ${median} words; it should be 14 or fewer`)

  for (const [cardIndex, card] of story.reel.entries()) {
    const words = card.text.split(/\s+/).length
    check(
      words <= 32,
      `${where}: reel card ${cardIndex + 1} is ${words} words — "${card.text.slice(0, 50)}…"`,
    )
    check(card.text.trim().length > 0, `${where}: reel card ${cardIndex + 1} is empty`)
    if (card.mark) {
      check(MARKS.has(card.mark), `${where}: reel card ${cardIndex + 1} uses unknown mark "${card.mark}"`)
    }
    // An image without a licence and a credit is a liability, not an asset.
    if (card.image) {
      for (const field of ['src', 'alt', 'credit', 'licence', 'source']) {
        check(
          typeof card.image[field] === 'string' && card.image[field].trim().length > 0,
          `${where}: reel card ${cardIndex + 1} has an image missing "${field}"`,
        )
      }
      check(
        card.image.src.startsWith('/reel/'),
        `${where}: reel card ${cardIndex + 1} image should live under /reel/, got "${card.image.src}"`,
      )
    }
  }

  // The reel has to carry the whole arc, not just the exciting middle.
  const reelBeats = new Set(story.reel.map((card) => card.beat))
  for (const required of ['hook', 'story', 'whyItMatters']) {
    check(reelBeats.has(required), `${where}: reel never reaches the "${required}" beat`)
  }
  check(story.reel[0]?.beat === 'hook', `${where}: the reel does not open on the hook`)

  // A mark on every card is wallpaper, and stops meaning anything.
  const marked = story.reel.filter((card) => card.mark).length
  check(
    marked <= Math.ceil(story.reel.length / 5),
    `${where}: ${marked} marked cards out of ${story.reel.length} — marks should stay rare`,
  )

  // The hook is beat one and carries the whole page.
  check(story.hook.trim().length > 30, `${where}: the hook is too short to hook anyone`)
  check(!story.hook.endsWith('.') || story.hook.length < 220, `${where}: the hook is too long`)

  for (const myth of story.myths) resolve(myth.sourceIds, 'a myth')
  for (const disagreement of story.disagreements) {
    check(
      disagreement.positions.length >= 2,
      `${where}: "${disagreement.question}" lists fewer than two positions`,
    )
    check(
      disagreement.atlasPosition.trim().length > 30,
      `${where}: "${disagreement.question}" does not say where the atlas stands`,
    )
    for (const position of disagreement.positions) {
      resolve(position.sourceId ? [position.sourceId] : [], 'a disagreement position')
    }
  }

  for (const question of story.quiz) {
    check(
      question.answerIndex >= 0 && question.answerIndex < question.options.length,
      `${where}: quiz answer index out of range for "${question.question}"`,
    )
    check(
      new Set(question.options).size === question.options.length,
      `${where}: quiz question "${question.question}" repeats an option`,
    )
    check(
      question.explains.trim().length > 30,
      `${where}: quiz question "${question.question}" does not explain the answer`,
    )
  }

  const lensIds = new Set(story.lenses.map((l) => l.id))
  check(lensIds.size === story.lenses.length, `${where}: duplicate lens ids`)
  check(story.lenses.length >= 3, `${where}: fewer than three lenses`)

  // Graph wiring: a story must be reachable from the map and vice versa.
  for (const nodeId of story.nodes) {
    check(nodeIds.has(nodeId), `${where}: lists unknown node "${nodeId}"`)
  }
  const primary = NODES.find((n) => n.id === story.nodes[0])
  check(
    primary?.story === story.slug,
    `${where}: primary node "${story.nodes[0]}" does not point back at this story`,
  )

  // "Continue the journey" is derived; if it comes back empty the story is an
  // island, which defeats the entire premise of the site.
  check(nextSteps(story).length >= 3, `${where}: fewer than three onward connections`)

  for (const event of story.timeline) {
    check(event.detail.trim().length > 15, `${where}: timeline entry "${event.title}" has no detail`)
    if (event.date) {
      check(
        event.date.startsWith(String(event.year)),
        `${where}: timeline date "${event.date}" disagrees with year ${event.year}`,
      )
    }
  }
  check(story.timeline.length >= 5, `${where}: timeline is too thin to be worth drawing`)

  for (const item of story.causeEffect) {
    check(
      item.because.trim().length > 15,
      `${where}: cause/effect "${item.cause}" has no mechanism`,
    )
  }

  check(/^\d{4}-\d{2}-\d{2}$/.test(story.reviewed), `${where}: review date is not ISO`)

  // Reading time is shown to the reader as a promise; keep it roughly honest.
  const words = [
    story.hook,
    ...Object.values(story.beats).flatMap((b) => b.paragraphs),
    ...story.beats.consequences.shortTerm,
    ...story.beats.consequences.longTerm,
    ...story.beats.consequences.unexpected,
  ]
    .join(' ')
    .split(/\s+/).length
  const estimate = Math.round(words / 200)
  if (Math.abs(estimate - story.readingMinutes) > 4) {
    warnings.push(
      `${where}: reading time says ${story.readingMinutes} min, body text suggests ~${estimate} min`,
    )
  }
}

/* -------------------------------------------------------- node/story -- */

for (const node of NODES) {
  if (node.story) {
    check(slugs.has(node.story), `node "${node.id}" points at missing story "${node.story}"`)
  }
}

await rm(outDir, { recursive: true, force: true })

for (const warning of warnings) console.warn(`  warn  ${warning}`)

if (failures.length > 0) {
  console.error(`\n${failures.length} content problem(s):\n`)
  for (const failure of failures) console.error(`  fail  ${failure}`)
  process.exit(1)
}

console.log(
  `content ok — ${STORIES.length} stories, ${NODES.length} nodes, ${EDGES.length} edges, ` +
    `${STORIES.reduce((n, s) => n + s.sources.length, 0)} citations` +
    (warnings.length ? `, ${warnings.length} warning(s)` : ''),
)
