# Backend

Postgres with pgvector, plus two Edge Functions. Everything here is optional —
the site is fully usable without it, on written lenses and the local search
index. This adds semantic search and generated explanations.

**Status: written, not yet deployed.** The SQL and the functions have not been
run against a live project. Treat the first deploy as the shakedown.

## Setting it up

```bash
supabase link --project-ref <ref>
supabase db push                      # or paste schema.sql into the SQL editor

supabase secrets set \
  ANTHROPIC_API_KEY=sk-ant-... \
  VOYAGE_API_KEY=pa-... \
  ATLAS_ALLOWED_ORIGIN=https://jvel07.github.io

supabase functions deploy search
supabase functions deploy explain

SUPABASE_URL=https://<ref>.supabase.co \
SUPABASE_SERVICE_ROLE_KEY=... \
VOYAGE_API_KEY=... \
  node ../scripts/ingest.mjs
```

Then build the site with `VITE_ATLAS_API=https://<ref>.supabase.co/functions/v1`,
or set the `ATLAS_API_URL` repository variable so the deploy workflow does it.

## What is where

| file | what it does |
| --- | --- |
| `schema.sql` | Corpus tables, graph tables, reader state, RLS, `match_chunks` and `neighbours` |
| `functions/_shared/prompt.ts` | The system prompt and context builder |
| `functions/search/` | Embed a question, return matching passages |
| `functions/explain/` | Retrieve within one story, generate a re-telling |
| `../scripts/ingest.mjs` | git → database, one way |

## Two things worth knowing before changing anything

**The database is a projection, not a source.** `scripts/ingest.mjs` runs one
way, from the reviewed content in git into Postgres. Nothing written in the
database reaches a reader. If that ever becomes untrue, the atlas stops being
something you can cite — every claim would need to be verified against the
database rather than against a reviewed file in version control.

**Retrieval is scoped to one story in `explain`.** `filter_slug` is not an
optimisation. Without it, a lens on the Opium Wars can retrieve and cite
paragraphs from the Baghdad article, and the reader has no way to tell.

## Costs

Embeddings are one-off per passage — the corpus is a few hundred passages, which
is cents. Generation is per custom lens; preset lenses never reach a model, and
the system block is marked cacheable so repeat requests on the same story reuse
it.

The search function embeds a query per search. If that becomes the dominant cost,
cache embeddings by normalised query string before reaching for a bigger fix.
