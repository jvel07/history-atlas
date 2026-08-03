-- History Atlas — database schema
--
-- Postgres + pgvector, deployed on Supabase. Two things are stored here and
-- they are kept deliberately separate:
--
--   * the corpus (stories, their sections, the graph) — the source of truth for
--     the site's content lives in `src/content/*.ts`, in git, reviewed by a
--     person. This database holds a *projection* of it for retrieval, refreshed
--     by `scripts/ingest.mjs`. Nothing here is authored; nothing written here
--     reaches the site.
--
--   * reader state (bookmarks, collections, reading history, quiz results),
--     which is genuinely owned by the database and protected by RLS.
--
-- The separation matters. If generated or user-supplied text could flow into the
-- corpus, the atlas would stop being something you can cite.

create extension if not exists vector;
create extension if not exists pg_trgm;

-- ---------------------------------------------------------------- corpus --

create table if not exists stories (
  slug            text primary key,
  title           text        not null,
  subtitle        text        not null,
  hook            text        not null,
  era             text        not null,
  year_from       integer     not null,
  year_to         integer     not null,
  regions         text[]      not null default '{}',
  tags            text[]      not null default '{}',
  reading_minutes integer     not null,
  reviewed_on     date        not null,
  updated_at      timestamptz not null default now()
);

-- One row per retrievable passage: a narrative beat, a myth, a disagreement, a
-- timeline entry. Retrieval returns passages, not whole articles, so a generated
-- answer can be grounded in the specific paragraph that supports it.
create table if not exists story_chunks (
  id          bigserial primary key,
  slug        text        not null references stories (slug) on delete cascade,
  kind        text        not null check (kind in ('beat', 'myth', 'disagreement', 'timeline', 'fact', 'lens')),
  -- Anchor within the story, e.g. 'whyItHappened' — used to deep-link a citation.
  anchor      text        not null,
  heading     text,
  body        text        not null,
  -- Source ids backing this passage, so a generated answer can cite them.
  source_ids  text[]      not null default '{}',
  confidence  text        not null default 'established'
                check (confidence in ('established', 'contested', 'speculation')),
  -- voyage-3 returns 1024 dimensions. Change both this and the ingest script
  -- together if you switch embedding model.
  embedding   vector(1024),
  token_count integer,
  created_at  timestamptz not null default now()
);

create index if not exists story_chunks_slug_idx on story_chunks (slug);
create index if not exists story_chunks_body_trgm_idx on story_chunks using gin (body gin_trgm_ops);

-- HNSW over cosine distance: the corpus is small now but this is the index that
-- stays sane as it grows, and rebuilding later means re-embedding everything.
create index if not exists story_chunks_embedding_idx
  on story_chunks using hnsw (embedding vector_cosine_ops);

create table if not exists sources (
  id      text primary key,
  slug    text not null references stories (slug) on delete cascade,
  kind    text not null check (kind in ('primary', 'book', 'paper', 'archive', 'dataset')),
  author  text not null,
  title   text not null,
  year    integer not null,
  detail  text,
  url     text,
  note    text
);

-- ----------------------------------------------------------------- graph --

create table if not exists graph_nodes (
  id        text primary key,
  label     text not null,
  kind      text not null,
  blurb     text not null,
  era       text not null,
  year_from integer,
  year_to   integer,
  story     text references stories (slug) on delete set null
);

create table if not exists graph_edges (
  id         bigserial primary key,
  from_id    text not null references graph_nodes (id) on delete cascade,
  to_id      text not null references graph_nodes (id) on delete cascade,
  relation   text not null,
  note       text not null,
  confidence text not null default 'established',
  unique (from_id, to_id, relation)
);

create index if not exists graph_edges_from_idx on graph_edges (from_id);
create index if not exists graph_edges_to_idx on graph_edges (to_id);

-- Neighbours of a node in both directions. The site treats an edge as
-- undirected for navigation and directed for explanation, so this returns the
-- direction alongside the row rather than losing it.
create or replace function neighbours(node_id text)
returns table (
  other_id   text,
  other_label text,
  relation   text,
  note       text,
  direction  text,
  confidence text
)
language sql stable
as $$
  select e.to_id, n.label, e.relation, e.note, 'out'::text, e.confidence
    from graph_edges e join graph_nodes n on n.id = e.to_id
   where e.from_id = node_id
  union all
  select e.from_id, n.label, e.relation, e.note, 'in'::text, e.confidence
    from graph_edges e join graph_nodes n on n.id = e.from_id
   where e.to_id = node_id;
$$;

-- ------------------------------------------------------------- retrieval --

-- Semantic search over passages. `min_similarity` exists so the function can
-- return nothing: a question the atlas has not covered should produce an honest
-- empty result, not the least-bad paragraph in the corpus.
create or replace function match_chunks(
  query_embedding vector(1024),
  match_count     integer default 8,
  min_similarity  double precision default 0.25,
  filter_slug     text default null
)
returns table (
  id         bigint,
  slug       text,
  kind       text,
  anchor     text,
  heading    text,
  body       text,
  source_ids text[],
  confidence text,
  similarity double precision
)
language sql stable
as $$
  select c.id, c.slug, c.kind, c.anchor, c.heading, c.body, c.source_ids, c.confidence,
         1 - (c.embedding <=> query_embedding) as similarity
    from story_chunks c
   where c.embedding is not null
     and (filter_slug is null or c.slug = filter_slug)
     and 1 - (c.embedding <=> query_embedding) > min_similarity
   order by c.embedding <=> query_embedding
   limit match_count;
$$;

-- ------------------------------------------------------------ readers ----

create table if not exists bookmarks (
  user_id    uuid not null references auth.users (id) on delete cascade,
  slug       text not null references stories (slug) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, slug)
);

create table if not exists collections (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  name       text not null,
  created_at timestamptz not null default now()
);

create table if not exists collection_items (
  collection_id uuid not null references collections (id) on delete cascade,
  slug          text not null references stories (slug) on delete cascade,
  added_at      timestamptz not null default now(),
  primary key (collection_id, slug)
);

-- The reading trail is what makes "you were three topics away from here"
-- possible. It is per-user and never aggregated into the corpus.
create table if not exists reading_history (
  id          bigserial primary key,
  user_id     uuid not null references auth.users (id) on delete cascade,
  slug        text not null references stories (slug) on delete cascade,
  -- Where they came from, so the graph can learn which links actually get used.
  from_slug   text references stories (slug) on delete set null,
  read_at     timestamptz not null default now(),
  seconds     integer,
  finished    boolean not null default false
);

create index if not exists reading_history_user_idx on reading_history (user_id, read_at desc);

alter table bookmarks         enable row level security;
alter table collections       enable row level security;
alter table collection_items  enable row level security;
alter table reading_history   enable row level security;

create policy "own bookmarks" on bookmarks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own collections" on collections
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own collection items" on collection_items
  for all using (
    exists (select 1 from collections c where c.id = collection_id and c.user_id = auth.uid())
  ) with check (
    exists (select 1 from collections c where c.id = collection_id and c.user_id = auth.uid())
  );

create policy "own history" on reading_history
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- The corpus is world-readable and written only by the ingest script running
-- with the service role, which bypasses RLS.
alter table stories      enable row level security;
alter table story_chunks enable row level security;
alter table sources      enable row level security;
alter table graph_nodes  enable row level security;
alter table graph_edges  enable row level security;

create policy "corpus is public" on stories      for select using (true);
create policy "corpus is public" on story_chunks for select using (true);
create policy "corpus is public" on sources      for select using (true);
create policy "corpus is public" on graph_nodes  for select using (true);
create policy "corpus is public" on graph_edges  for select using (true);
