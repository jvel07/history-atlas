# Architecture

What each piece is for, and why it is that piece rather than an obvious
alternative. Where something is not built yet, it says so rather than describing
it in the present tense.

## The shape of the thing

A single-page React app serving a corpus that lives in git, with an optional
backend that adds semantic search and generated explanations. The app is fully
usable with the backend switched off — that is a deliberate property, not a
development convenience. It means the site cannot go dark because an API key
expired, and it means every reviewer can run the whole thing locally.

```
    git (source of truth)
      src/content/*.ts  ──────────┐
            │                     │  scripts/ingest.mjs (one-way)
            │ build                ▼
            ▼                Postgres + pgvector
        dist/ (static)            │
            │                     │  Edge Functions
            │                     ├── /search   embed → match_chunks
            └── browser ──────────┴── /explain  retrieve → Claude → prose
```

The arrow from git to Postgres runs one way only. Nothing written in the database
reaches a reader. A corpus that could be edited server-side would stop being
something you can cite, so retrieval gets a *projection* of the reviewed content
and no authority over it.

## Frontend

**Vite + React 19 + TypeScript.** Nothing exotic. The interesting choice is that
content is TypeScript modules rather than markdown or a CMS: the eight
storytelling beats are named fields, so a story that forgets "why it still
matters" fails to compile. A markdown corpus can only be checked by a linter that
someone has to remember to run.

**Tailwind v4**, configured in CSS (`src/index.css`) rather than a JS config —
that is v4's model. The palette is small on purpose: a warm paper, a cold ink,
one accent, and two supporting hues that carry meaning (contested claims,
long-run consequences). Colour that decorates is colour that cannot signal.
shadcn/ui token names are mapped onto that palette so `npx shadcn@latest add` on
a new component inherits the theme untouched.

**TanStack Router**, code-based rather than file-based. Code-based routing needs
no codegen step, which means `git clone && npm i && npm run build` works with
nothing generated. Five routes do not need a file convention.

**TanStack Query** manages exactly one thing today: generated explanations. It is
here rather than a `useState` because the next features that need it — reading
history, collections, bookmarks synced across devices — are all server state, and
retrofitting a cache is worse than starting with one.

**Motion** for animation. Every animated element respects
`prefers-reduced-motion`, enforced globally in `index.css`. Animation is used to
show *relationships* — a timeline card arriving, a graph re-centring — never as
decoration on arrival.

### Code splitting

Home loads eagerly. Story, Explore, Stories and About are lazy route components,
and the search dialog (Radix + the full corpus + the index) loads on first hover
or first keystroke of ⌘K. A first visit should not pay for the quiz engine and
the graph renderer before it has rendered a sentence.

### Routing on GitHub Pages

Pages has no SPA rewrite, so a real path 404s on reload or when someone pastes a
link. The deploy workflow copies `index.html` to `404.html`, which makes every
path serve the app. This works and keeps clean, shareable URLs — but Pages
returns HTTP 404 with that body, which crawlers may honour. Moving to a host with
real rewrites (Cloudflare Pages, Netlify, Vercel) is on the roadmap and is also
what server-side rendering would need. Hash routing was the other option; it was
rejected because a discovery product lives or dies on shareable links and search
indexing.

## Content model

`src/content/types.ts` carries the reasoning inline. The two load-bearing
decisions:

**Beats are named fields, not an array of blocks.** `beats.whyItMatters` is
required. There is no way to publish a story that skips the part explaining why
the reader should care.

**Claims carry confidence.** `established`, `contested`, `speculation`. Contested
claims render with a label everywhere they appear, including on graph edges.
Speculation is confined to `whatIf`, which always renders inside a warning frame
and always pairs the counterfactual with the constraint that pushes back on it.

## Knowledge graph

Nodes are things a person can be curious about. Edges are **directed and
labelled**: `caused`, `funded`, `enabled`, `preserved`, `destroyed`, and so on,
each with a one-sentence explanation.

This is the difference between a recommendation and an explanation. "You might
also like" gets a shrug; "the tax on tea paid for the navy that enforced the
opium trade" gets a click. The edge note is displayed on every connection card
for exactly that reason.

Two clusters exist that look unrelated — the British/Chinese opium chain and the
Baghdad/algebra chain — and they connect through
`hindu-arabic-numerals → double-entry-bookkeeping → east-india-company`. Both of
those edges are marked `contested`, because the lineage is real and the causal
claim is an interpretation. Surfacing that kind of link is the point of having a
graph at all; labelling its confidence is what stops it being a party trick.

Graph traversal (`connectionsFor`, `pathBetween`, `hubs`) is plain BFS over
in-memory arrays. At 39 nodes that is instant, and the same functions have a SQL
equivalent in `schema.sql` for when the corpus outgrows the bundle.

## Search

Two layers behind one `SearchProvider` interface.

**Local** (`src/lib/search.ts`) runs with no backend. It is not pretending to be
semantic. It strips question scaffolding ("why did", "what caused"), expands a
small hand-built synonym list, and indexes *sections* rather than documents so a
hit lands on the paragraph that answers the question. Terms the reader typed
outweigh terms we inferred for them.

**Vector** (`supabase/functions/search`) embeds the question with `voyage-3` and
runs `match_chunks`, an HNSW cosine search over passage embeddings. It has a
similarity floor so it can return nothing: a question the atlas has not covered
should produce an honest empty result rather than the least-bad paragraph in the
corpus.

The client falls back to local on any non-200. A search box that errors is worse
than one that is merely literal.

## Generated explanations

`supabase/functions/explain` retrieves passages from *the story the reader is on*
and asks Claude to re-tell them the way the reader asked.

Three constraints do the real work:

1. **The key never reaches the browser.** Generation is server-side, always.
2. **Retrieval is scoped to one story.** Cross-story retrieval would let an
   explanation of the Opium Wars quietly cite the Baghdad article.
3. **The prompt lives on the server** (`functions/_shared/prompt.ts`). A system
   prompt in the bundle is a system prompt the reader can edit, and its
   constraints are the only thing between "adaptive explanations" and "confident
   invented history under a masthead that promises citations".

The system prompt is worth reading — it encodes the voice rules and the
absolute requirement to work only from supplied passages. Model defaults to
`claude-sonnet-5`, overridable with `ATLAS_MODEL`. The system block is marked
cacheable, so repeat lenses on the same page are substantially cheaper.

A preset lens is never sent to a model: it is already written and reviewed.

## Database

`supabase/schema.sql`. Two halves, deliberately separate:

- **Corpus** (`stories`, `story_chunks`, `sources`, `graph_nodes`,
  `graph_edges`) — public read, written only by the ingest script running with
  the service role.
- **Reader state** (`bookmarks`, `collections`, `collection_items`,
  `reading_history`) — genuinely owned by the database, protected by RLS, never
  aggregated back into the corpus.

`reading_history` records which link a reader arrived by. That is what makes
"you were three topics away from here" possible later, and it is the only
telemetry the schema has room for.

## Configuration

| variable | where | effect |
| --- | --- | --- |
| `VITE_ATLAS_API` | build time | Supabase functions URL. Unset ⇒ offline mode: written lenses, local search. |
| `BASE` | build time | Vite base path. Defaults to `/history-atlas/` for Pages. |
| `ANTHROPIC_API_KEY` | function secret | Generation. |
| `VOYAGE_API_KEY` | function secret | Embeddings, `voyage-3`, 1024 dimensions. |
| `ATLAS_MODEL` | function secret | Model override. Default `claude-sonnet-5`. |
| `ATLAS_ALLOWED_ORIGIN` | function secret | CORS origin. Set it in production; the default `*` is for local work. |

## Not built yet

Listed here so nobody has to read the code to find out.

- **No maps.** The vision calls for interactive maps and empire borders. Doing it
  properly means sourced boundary data with dates attached, and drawing a border
  that is wrong by fifty years is worse than drawing none.
- **No images.** Portraits, artefacts and paintings need per-item licence and
  provenance checks. The rule against unverifiable sources applies to pictures.
- **No accounts.** The schema and RLS policies are ready; there is no auth UI, so
  bookmarks are `localStorage` today.
- **No flashcards or learning paths.** Quizzes exist; spaced repetition does not.
- **No Neo4j.** The vision mentions it as an option. At this size the relational
  graph tables plus in-memory traversal do everything, and a second datastore
  would be a second source of truth. Revisit when a query needs variable-depth
  traversal that recursive CTEs handle badly.
- **No SSR.** Which is the real cost of GitHub Pages, and the main argument for
  moving hosts.
