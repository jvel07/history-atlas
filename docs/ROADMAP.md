# Roadmap

Ordered by what most increases the chance that someone arrives for one fact and
is still reading an hour later.

## Now — the engine works, the corpus is thin

Two stories cannot produce an endless journey. Everything below is secondary to
this.

- [ ] **The opium chain, end to end.** `east-india-company`, `industrial-revolution`,
      `hong-kong`, `century-of-humiliation`. Each one already sits on the map with
      edges into a written story, so each lands a reader mid-journey rather than
      cold.
- [ ] **The Baghdad chain, end to end.** `house-of-wisdom`, `islamic-golden-age`,
      `mongol-invasion`, `european-renaissance`.
- [ ] **A third cluster that touches both.** The printing press, or paper. The
      moment three clusters interlock, the graph stops being two lines and starts
      being a map.

Target: fifteen stories. That is roughly where "you might also like" starts
producing surprises rather than the obvious neighbour.

## Next — depth on what exists

- [ ] **Deploy the backend.** Schema, functions and ingest script are written and
      unrun. Until they are deployed, semantic search and custom lenses are
      offline. This is the single largest gap between the built thing and the
      described thing.
- [ ] **Accounts.** Schema and RLS policies are ready; there is no auth UI.
      Bookmarks live in `localStorage` and do not survive a browser change.
- [ ] **Reading trail.** `reading_history` records which link a reader arrived by.
      Once there is data, "you came here from the tea trade — three topics back"
      becomes possible, and so does knowing which edges actually get used.
- [ ] **Collections.** Save a journey, not just a page. Shareable.
- [ ] **Story-to-story transitions.** The single highest-leverage piece of polish:
      the end of an article is where a reader decides whether to continue, and it
      currently just lists cards.

## Later — the things the vision asks for that need real groundwork

- [ ] **Maps.** Interactive, with empire borders that move. Needs sourced boundary
      data with dates attached. A border wrong by fifty years is worse than no
      border, so this waits for a dataset that can be cited.
- [ ] **Images.** Portraits, artefacts, paintings. Every one needs a licence and a
      provenance check — the verify-every-source rule applies to pictures, and
      hot-linking someone's scan is not a licence.
- [ ] **Flashcards and spaced repetition.** Quizzes exist and teach in the
      explanation rather than the score. Retention is the next step.
- [ ] **Learning paths.** A curated route through the graph — "the making of the
      modern world in nine stories".
- [ ] **Audio.** The writing is already built for narration; it is written to be
      read aloud.

## Infrastructure, when it starts hurting

- [ ] **Move off GitHub Pages.** No SPA rewrite and no SSR. `404.html` covers
      reloads but returns HTTP 404 with the app in the body, which crawlers may
      honour — bad for a discovery product. Cloudflare Pages or Netlify fixes
      routing today and opens the door to SSR later.
- [ ] **Server-side rendering.** Every story should be indexable and should render
      its first paragraph before JavaScript arrives.
- [ ] **Corpus out of the bundle.** At maybe fifty stories the content stops
      belonging in the JS bundle and should be fetched per route.
- [ ] **A visual regression check.** The build cannot catch a timeline rendering
      its events in the wrong order, or a dark-mode contrast regression.

## Explicitly not doing

- **Generating articles at scale.** It would take an afternoon to produce a
  thousand and about the same to discover a tenth contain confident invented
  detail. One wrong citation costs more trust than fifty correct pages earn.
- **Neo4j, for now.** The relational graph tables plus in-memory traversal do
  everything at this size, and a second datastore is a second source of truth.
  Revisit when a query needs variable-depth traversal that recursive CTEs handle
  badly.
- **Comments.** Corrections go through issues, where they get a diff and a review.
- **Engagement metrics as a goal.** The success measure is a long session that
  ended somewhere unexpected, which is not the same as time-on-site and must not
  be optimised as if it were.
