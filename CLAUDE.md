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
- The limits in `check-content.mjs` (12–30 cards, 450 words, 32 per card, median
  14) are the feature. If a reel fails them, cut it; do not raise them. The
  median is the one that matters — it catches every card drifting to the same
  comfortable length.
- **One sentence, split across cards.** A card is a breath inside a sentence that
  keeps going, not a sentence of its own. Most cards end mid-clause on a comma,
  dash or conjunction; full stops are rare and land a turn. Five words, full
  stop, five words, full stop reads as a telegram — that failure mode is what
  the current reels were rewritten to fix. No story uses `step` any more.
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
- **English and Spanish are the same atlas.** Structure is shared and must match
  exactly: slugs and their order, era, years, nodes, tags, mood, reading time,
  reel length with the same beat/punch/mark on each card, `sourceIds`, timeline
  years and dates, lens ids, and — the one that would be invisible forever — the
  same `answerIndex` on every quiz question. `check-content.mjs` compares all of
  it. Spanish gets a 520-word reel budget (median 15) rather than 450/14,
  because it runs longer per idea. Write it as Spanish, not as a gloss.

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
- `src/content/stories/*.ts` — the actual writing, in English. This is the
  product. `reel` is what almost everyone reads; `beats` is the long version.
- `src/content/es/stories/*.ts` — the same stories in Spanish, one file each.
  `src/content/es/graph.ts` is a label/note **overlay** on the one graph.
- `src/lib/i18n.tsx` — `Lang`, the provider, and every UI string. `ES` is typed
  as `typeof EN`, so a string added to one language and forgotten in the other
  does not compile.
- `src/content/labels.ts` — enum labels (era, beat, node kind, relation, source
  kind) per language. `src/content/useCorpus.ts` is the hook every page uses.
- `src/components/StoryReel.tsx` — the reel player. Autoplays with a continuous
  progress bar; tap pauses. `src/components/ReelBackdrop.tsx` draws the card
  background — a sourced photo when the card has one, a procedural mood field
  otherwise. Images live in `public/reel/<slug>/` and need a licence + credit.
  It is CSS scroll-snap, not a gesture library, so thumb, wheel, spacebar and
  arrow keys all work; it pins to the viewport because the mobile nav is two rows.
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

## In progress: categories, and two stories in each

Last commit is `fc51351` (the EN/ES toggle). The tree is clean; **none of the
work below has been started.** This is the next job, requested with a screenshot
of six category chips.

**What was asked:** a category taxonomy matching those six chips, and two
stories in each.

| category | emoji | status |
| --- | --- | --- |
| Epic battles | 🛡️ | 0 — needs 2 |
| Key milestones | 🧭 | 0 — needs 2 |
| Ancient worlds | 🏺 | 0 — needs 2 |
| Great discoveries | 💡 | 0 — needs 2 |
| Ages & eras | 🕰️ | 0 — needs 2 |
| Historic icons | 🎩 | 0 — needs 2 |

**Decide first, with the user if possible:** whether the existing five stories
count toward the two (Opium Wars → milestones, Al-Khwārizmī → discoveries, Vlad
→ icons, El Pulpo → milestones, Markopolos → icons), which needs ~7 new, or
whether "2 for each" means twelve *new* stories on top. The literal reading is
twelve new. Assume twelve unless told otherwise, and say which you assumed.

**Shape of the work, in order:**

1. `Category` union in `types.ts`, a required `category` on `Story`,
   `CATEGORY_LABELS` (per `Lang`) and `CATEGORY_EMOJI` in `labels.ts`. Assign a
   category to the five existing stories.
2. Browse-by-category on `/stories` — chips that filter, matching the
   screenshot's ordering. A category with no story behind it must not render.
3. Add a check: every category has at least one story, and the parity check
   already in `check-content.mjs` should compare `category` between languages.
4. Then the stories, **in batches of two, verifying and committing each batch**.
   Each needs graph nodes and edges too (`≥3` onward connections, primary node
   pointing back at the slug) and the Spanish twin.

**Candidate stories, chosen because the primary sources are real and citable and
because several already exist as graph nodes:**

- Battles: Cannae 216 BC (Polybius, Livy, Goldsworthy); the fall of
  Constantinople 1453 (Runciman, Barbaro's diary, Crowley) — `fall-of-constantinople`
  is already a node and already links to Vlad.
- Milestones: the printing press (Eisenstein, Füssel) — already a node, already
  linked to the Dracula pamphlets; the transatlantic cable 1866 (Standage,
  Gordon).
- Ancient worlds: the Library of Alexandria and the myth that it burned in one
  night (Bagnall 2002, El-Abbadi); the Bronze Age collapse c.1177 BC (Cline, the
  Ugarit letters).
- Discoveries: Semmelweis and handwashing 1847 (his 1861 *Ätiologie*, Nuland) —
  pairs with Markopolos on the warning-ignored thread the atlas already runs;
  penicillin and the myth that Fleming did it alone (Fleming 1929, Lax).
- Ages & eras: the Black Death (Benedictow, Herlihy); the Meiji Restoration
  (Jansen, the 1868 Charter Oath) — connects to the unequal treaties.
- Icons: Ada Lovelace and Note G (Menabrea/Lovelace 1843, Hollings/Martin/Rice) —
  already in the al-Khwārizmī timeline; Mansa Musa and the 1324 hajj (al-Umari,
  Ibn Khaldun, the 1375 Catalan Atlas, Gomez).

Swap any of these freely — what matters is that the sources are checkable and
the story earns its place. Do not bulk-generate; the rule above still holds.

**Browser suites live outside the repo**, in the session scratchpad:
`browser-check.mjs` (60 checks), `reel-check.mjs` (52) and `lang-check.mjs`
(54). They drive `npm run preview` on :4173. If a new session cannot find them,
they are worth rewriting — `npm run verify` does not open a browser, and every
render bug this project has hit compiled cleanly.

## Deploying

`.github/workflows/deploy.yml` runs `npm run verify`, copies `index.html` to
`404.html` (Pages has no SPA rewrite), and force-pushes `dist/` to the
`gh-pages` branch on every push to `main`. Live at
https://jvel07.github.io/history-atlas/.

**Do not switch this back to the Pages artifact route without checking the Pages
source first.** The artifact route (`configure-pages` and friends) needs
Settings → Pages → Source set to "GitHub Actions". It is not, and eight
consecutive deploys failed on that single step while the site quietly served a
months-old branch. Branch publishing needs no setting anyone has to go and find.

The backend is written and **not yet deployed**. Until it is, `VITE_ATLAS_API` is
unset and the site runs on written lenses and the local search index — which is a
supported mode, not a degraded one.
