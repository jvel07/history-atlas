# History Atlas — working notes

History, science and ideas told as stories you can't stop reading. The audience
is anyone curious; the register is "understandable by a curious ten-year-old,
accurate enough for a specialist". It is public, so accuracy matters more than
volume.

- Vision: `docs/PRODUCT_VISION.md` (the founding brief, kept as written)
- How it is built and why: `docs/ARCHITECTURE.md`
- How to write for it: `docs/CONTENT_GUIDE.md`
- What is next: `docs/ROADMAP.md`

## Do this for every change, without being asked

1. Make the change.
2. `npm run verify` — typecheck, build, and the structural checks over the corpus.
3. Commit and push. Pushing to `main` deploys.
4. Report what was actually checked.

Do not stop at "the build passed". Every content bug this project can have
compiles perfectly: a citation id pointing at a renamed source, a story listing a
graph node that was deleted, a quiz answer index off by one, an edge with no
explanation. `scripts/check-content.mjs` exists because the compiler cannot see
any of those.

## Environment

Node 22 (`.nvmrc`). Tailwind v4 is configured **in CSS** (`src/index.css`), not in
a JS config file — there is no `tailwind.config.js` and there should not be.

```bash
nvm use && npm install && npm run verify
```

## Commands

| command | what it does |
| --- | --- |
| `npm run dev` | dev server on :5173 |
| `npm run verify` | typecheck + build + content checks (the one to run) |
| `npm run build` | typecheck, then production build |
| `npm run preview` | serve `dist/` on :4173 |
| `npm run lint:content` | just the corpus checks |
| `node scripts/ingest.mjs` | push the corpus into Postgres and embed it |

## The reel is the story

`/story/$slug` renders the **reel** — about thirty cards, one idea each, roughly
a minute. The long article lives behind `?full`. That is the default and it
should stay the default: nobody arrives wanting eleven minutes.

- **Write the reel first.** Written second, it comes out as a summary of the
  article — hedged, connective, full of "meanwhile". Written first, it comes out
  as a sequence of things that happen.
- **One card, one idea, one breath.** A card needing a second clause is two cards.
- The limits in `check-content.mjs` (12–40 cards, 450 words, 32 per card, median
  14) are the feature. If a reel fails them, cut it; do not raise them. The
  median is the one that matters — it catches every card drifting to the same
  comfortable length.
- **Steps are the spine where the story allows it.** A numbered procedure beats a
  chronology, and it is usually the honest reading: nobody stumbled into the
  Guatemalan coup. Do not force it onto a story that was a collision.
- Both formats carry the same eight beats and the same facts. The reel is
  shorter, never looser.

## Data rules

These keep the site citable. Breaking one is a real bug, not a style question.

- **Beats are named fields, not blocks.** `Story['beats']` has six required
  members plus the hook and the derived journey. A story cannot quietly skip
  "why it still matters".
- **Derived, never hand-written.** "Continue the journey" and "related stories"
  come from the knowledge graph. A hand-written list rots the moment a node is
  added, and then the page disagrees with the map the reader just looked at.
- **One axis per field.** `confidence` records how sure we are, not how important
  it is. `NodeKind` records what a thing is, not which cluster it belongs to.
- **Contested means specialists disagree in print**, and you can name them on both
  sides. It does not mean "some people online disagree". Contested claims render
  with a label everywhere they appear, including on graph edges.
- **Speculation lives only in `whatIf`**, always framed as speculation, always
  paired with the constraint pushing back on it.
- **Omit rather than infer.** A missing field means no source stated it.
- **Verify every citation before adding it.** A citation pointing at the wrong
  work manufactures confidence, which is worse than having none.
- **Never borrow wording.** Facts are free; phrasing is not.
- **Every story sets `reviewed` to the date a person read the whole thing.** It is
  displayed on the page as a claim.

## The AI rules

The generative half is the easiest way to destroy this project, so it is fenced:

- **The key never reaches the browser.** Generation runs in a Supabase Edge
  Function. There is no path where the frontend holds a credential.
- **The system prompt lives on the server** (`supabase/functions/_shared/prompt.ts`),
  not in the bundle. A prompt in the bundle is a prompt the reader can edit.
- **Generation is grounded in the story's own reviewed passages**, retrieved with
  `filter_slug` set. Cross-story retrieval would let a lens on the Opium Wars
  cite the Baghdad article with no way for the reader to tell.
- **A preset lens is never sent to a model.** It is already written and reviewed;
  paying to regenerate it can only make it worse.
- **Generated text is labelled as generated** on the page, with a note telling the
  reader to check it against the sources.
- **Do not bulk-generate articles.** A thousand articles is an afternoon's work
  and a tenth of them will contain confident invented detail. One wrong citation
  costs more trust than fifty correct pages earn.

## Layout

- `src/content/types.ts` — the content model. Read this first; the reasoning is
  inline.
- `src/content/graph.ts` — nodes and **labelled, directed** edges. Every edge note
  is a sentence, because the note is what the reader sees and "related topic" is
  what makes them close the tab.
- `src/content/stories/*.ts` — the actual writing. This is the product. `reel` is
  what almost everyone reads; `beats` is the long version.
- `src/components/StoryReel.tsx` — the reel player. CSS scroll-snap, not a
  gesture library, so thumb, wheel, spacebar and arrow keys all work and it
  degrades to a scrollable list. It pins itself to the viewport rather than
  subtracting a nav height, because the mobile nav is two rows.
- `src/content/index.ts` — registry, plus `nextSteps` and `relatedStories`, both
  derived from the graph.
- `src/lib/search.ts` — local index, and the provider interface the vector backend
  plugs into. It falls back to local on any backend failure: a search box that
  errors is worse than one that is merely literal.
- `src/lib/ai/index.ts` — the explanation client. Holds no key and no prompt.
- `src/components/StoryParts.tsx` — the beat renderers, myths, disagreements,
  before/after, what-if, quiz, sources.
- `src/router.tsx` — code-based routing so there is no codegen step. Home is
  eager; everything else is lazy.
- `vite.config.ts` — `base` must match the repo name or Pages serves a blank page.
  `BASE=/ npm run build` for a root-served host.

## Deploying

`.github/workflows/deploy.yml` runs `npm run verify`, copies `index.html` to
`404.html` (Pages has no SPA rewrite), and publishes on push to `main`.

The backend is written and **not yet deployed**. Until it is, `VITE_ATLAS_API` is
unset and the site runs on written lenses and the local search index — which is a
supported mode, not a degraded one.
