# History Atlas

History, science and ideas told as stories you can't stop reading. Every page
leads to the next.

The goal is not to compete with Wikipedia. An encyclopedia answers the question
you arrived with; this is built to leave you with a better one. A good session
here is not "found the fact" — it is arriving for one thing and leaving an hour
later, six topics away, still going.

```bash
npm install
npm run dev          # http://localhost:5173
npm run verify       # typecheck + build + content integrity checks
```

Node 22 or newer.

---

## What is here

| | |
| --- | --- |
| **Reels** | The default way a story is told: ~30 cards, one idea each, about a minute, flicked through with a thumb. Nobody arrives wanting eleven minutes — they arrive wanting to know what happened, holding a phone. |
| **The long version** | Behind `?full`. Same story with the sources, the myth corrections and the parts historians argue about. One tap from the end of the reel. |
| **Storytelling engine** | Eight narrative beats — hook, the world before, the problem, the story, why it happened, consequences, why it still matters, continue the journey — carried by both formats and enforced as named fields in the type system rather than as a style guide nobody reads. |
| **Knowledge graph** | 69 topics, 83 labelled and directed relationships. Every link carries the *reason* it exists, in a sentence. "Continue the journey" is derived from it, never hand-written. |
| **Five written stories** | Nine Years Early (Madoff), El Pulpo, Vlad Țepeș, the Opium Wars and Al-Khwārizmī — 34 sources between them, in two languages. The stories are the product; the framework exists to serve them. |
| **Adaptive explanations** | Pre-written lenses ship with each story and work offline. Free-text requests ("focus on the economics", "explain it like I'm 10") go through a server-side RAG pipeline over the story's own reviewed text. |
| **Search** | A local index with synonym expansion out of the box; pgvector semantic search when the backend is configured. Stop words, stemming and the synonym list are per language. |
| **English and Spanish** | A toggle in the nav, and the *whole* atlas moves — stories, map labels, edge notes, interface. Not a summary in the second language: the same claims, the same sources on the same sentences, the same correct quiz answers. `npm run verify` compares the two corpora field by field and fails if they drift. |
| **Interactive pieces** | Timeline positioned by real dates, cause→effect chains with mechanisms, myth corrections, historian disagreements, before/after, "what if?" speculation, quizzes, bookmarks. |

Five stories is not an oversight. It takes an afternoon to generate a thousand
articles and about the same to discover a tenth of them contain confident
invented detail. One wrong citation costs more trust than fifty correct pages
earn. Topics appear on the map before they have a story, and say so.

## Commands

| command | what it does |
| --- | --- |
| `npm run dev` | dev server on :5173 |
| `npm run build` | typecheck, then production build to `dist/` |
| `npm run preview` | serve `dist/` on :4173 |
| `npm run lint:content` | structural checks over the corpus — see below |
| `npm run verify` | build + content checks; the one to run before pushing |
| `node scripts/ingest.mjs` | push the corpus into Postgres and embed it (needs backend env) |

### What `lint:content` catches that the build cannot

Every real content bug compiles perfectly. The check bundles the corpus and
verifies the references *between* pieces resolve:

- a reel that has drifted back into being an article: over 40 cards, over 450
  words total, a single card over 32 words, or a *median* card over 14 — the
  median is the one that catches every card creeping to the same medium length
- a reel that never reaches the hook, the story, or why it still matters
- a `sourceId` pointing at a citation that was renamed
- a story listing a graph node that no longer exists, or a node pointing at a
  missing story
- a quiz whose `answerIndex` is off by one, or that repeats an option
- an edge with no explanation — an unlabelled link is not information
- a quoted aside with no source
- a story with fewer than three onward connections, i.e. an island
- a timeline `date` that disagrees with its own `year`
- a stated reading time that the body text does not support

## How it is built

```
src/
  content/
    types.ts              the content model, and the reasons for its shape
    graph.ts              nodes, labelled edges, path-finding
    stories/*.ts          the stories themselves
    index.ts              registry; derives related stories and next steps
  components/             story parts, timeline, graph map, search, lenses
  routes/                 Home · Stories · Story · Explore · About
  lib/
    search.ts             local index + pluggable vector provider
    ai/index.ts           explanation client; never holds a key
supabase/
  schema.sql              Postgres + pgvector, corpus and reader state
  functions/explain/      RAG + Claude, server-side
  functions/search/       embedding search over passages
scripts/
  check-content.mjs       the integrity checks
  ingest.mjs              git → database projection
```

Stack: Vite, React 19, TypeScript, Tailwind v4, shadcn/ui conventions, TanStack
Router and Query, Motion. Backend is Supabase — Postgres, pgvector, Edge
Functions. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for why each of
those, and what is deliberately not there yet.

## The rules that make it citable

Written out in full in [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md). In short:

- **Facts and interpretations are marked differently.** Where historians
  disagree, both positions appear with who holds them, and the atlas states what
  it will and will not assert in its own voice.
- **Speculation is fenced.** "What if?" is always labelled and always paired with
  the constraint pushing back on it.
- **Absence means no source said it.** A missing field is not an invitation to
  infer.
- **The AI never writes unsourced history.** Generation is grounded in the
  story's own reviewed passages, runs server-side, and is labelled as generated
  on the page.
- **Every story shows the date a person last reviewed it.**

## Deploying

Pushing to `main` builds, runs the content checks, and force-pushes `dist/` to
the `gh-pages` branch, which is what this repository's Pages source is set to.
Live at https://jvel07.github.io/history-atlas/.

`vite.config.ts` sets `base` to `/history-atlas/` to match the repository name —
a mismatch there serves a blank page. For a root-served host, build with
`BASE=/ npm run build`.

The tidier alternative is the Actions artifact route (`configure-pages` /
`upload-pages-artifact` / `deploy-pages`), which gives a real deployment record.
It requires Settings → Pages → Source to be **GitHub Actions**, and that setting
only exists on the web — the GitHub mobile app has no repository settings at all.
`.github/workflows/deploy.yml` documents how to switch.

The AI and semantic search stay dormant until `VITE_ATLAS_API` points at deployed
Supabase functions. Without it the site is fully usable: written lenses, local
search, the whole corpus.

## Contributing

Corrections are worth more than new articles. Every story lists its sources and
its review date — open an issue with the claim and what it should say.

New stories: read `docs/CONTENT_GUIDE.md` first, then copy the shape of
`src/content/stories/opium-wars.ts`. `npm run verify` must pass.
