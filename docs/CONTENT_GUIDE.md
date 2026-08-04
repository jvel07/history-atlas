# Writing for the atlas

The product is the writing. Everything else exists to serve it.

## Write the reel first

**The reel is the story.** It is what a reader gets by default: 25–35 cards, one
idea each, about a minute end to end, flicked through with a thumb. The long
article is the optional director's cut behind `?full`.

This ordering is not a preference. Write the article first and the reel becomes a
summary of it — hedged, connective, full of "meanwhile" and "it is worth noting".
Write the reel first and it comes out as a sequence of things that happen, which
is what a story is.

`npm run verify` enforces the shape: 12–40 cards, 450 words total, 32 words per
card maximum, opens on the hook, reaches `story` and `whyItMatters`.

### What a card is

One idea. One breath. If it needs a second clause to land, it is two cards.

```ts
{ beat: 'story', text: 'One problem. China banned opium in 1729.' },
{ beat: 'story', text: 'So the Company does not smuggle anything. It grows the opium and auctions the chests in Calcutta.' },
{ beat: 'story', text: 'Other people smuggle it. The paperwork stays clean.' },
```

Not:

```ts
{ beat: 'story', text: 'Although opium had been banned in China since 1729, the East India Company avoided legal exposure by growing it in India and auctioning it in Calcutta to private traders, who then smuggled it.' },
```

Same facts. The first is three beats a reader falls through; the second is a
sentence they bounce off.

Rules that follow:

- **Present tense, mostly.** "China sends its most incorruptible official." It
  puts the reader in the moment instead of the archive.
- **Short sentences. Full stops over commas.** A comma invites a subordinate
  clause; a full stop invites a swipe.
- **Numbers land on their own card.** "Forty thousand chests a year" is a card.
- **Set `punch: true` on the turns.** They render in the accent, and they should
  be the lines someone would screenshot. Roughly one in five.
- **`kicker` carries the date**, so the sentence does not have to.
- **End on the reach**, not on a summary. The last card should make the reader
  feel the present tense of it.

### The one test

After every card, the reader should want the next one. After every paragraph in
the article, the same. If either can be deleted without anyone missing it,
delete it.

The second test is harder and matters more: **would a historian who studies this
period find anything to object to?** Not "is it simplified" — simplification is
the job. Wrong is the problem.

## Voice

Write like a documentary narrator who respects the audience. Energetic, curious,
concrete, human. Never academic unless the reader asks for academic. Never
condescending.

The register is *understandable by a curious ten-year-old, accurate enough for an
adult specialist*. Those are not in tension as often as people assume. Most of
what makes history hard to read is not the ideas — it is unexplained jargon,
buried subjects, and paragraphs that do six things.

**Instead of:**

> Britain exported opium to China.

**Write:**

> Imagine a shop on your street that sells the one thing your whole family drinks
> every morning — and refuses to buy anything you make. Every month you hand over
> money and get nothing back but the drink. That is fine, until you notice the
> money running out.

Rules that follow from that:

- Short paragraphs. Two to four sentences. A wall of text is a decision to lose
  readers.
- Concrete nouns. "Silver", not "bullion flows". "Twenty thousand chests", not
  "substantial quantities".
- One idea per paragraph.
- Analogies for anything abstract — money supply, sovereignty, place value.
- Never open with throat-clearing. The first sentence is the hook.
- Emphasis is rare enough to mean something. `**bold**` and `*italics*` are the
  only inline formatting the renderer supports, which keeps it that way.

## The eight beats

The reel carries the same eight beats as the article — each card is tagged with
which one it belongs to, and the beat label shows at the bottom of the screen so
a reader always knows roughly where they are in the arc.

Below is the long-form version. `Story['beats']` is an object of named fields, so
an article missing one will not compile.

**1. Hook** (`hook`) — one or two sentences, rendered at hero size. The surprising
thing. If it would not make a stranger stop scrolling, it is not the hook.

> Britain went to war with China because Britain could not stop drinking tea.

**2. The world before** (`beats.worldBefore`) — what life looked like, what was
normal. The reader cannot feel a change they cannot picture.

**3. The problem** (`beats.problem`) — what stopped working, and for whom.

**4. The story** (`beats.story`) — chronological events. Tell it. Do not list it.
This is usually the longest beat and it should read like narrative, with people
making decisions for reasons.

**5. Why it happened** (`beats.whyItHappened`) — incentives. Money, politics,
religion, technology, ordinary human behaviour. This is the beat that separates
the atlas from a summary, and the one most likely to be missing from whatever you
read while researching.

**6. Consequences** (`beats.consequences`) — three lists: `shortTerm`, `longTerm`,
`unexpected`. The unexpected list is nearly always the most interesting, and it
is where the next story usually hides.

**7. Why it still matters** (`beats.whyItMatters`) — the reach into today. Not a
strained parallel; a real line of causation, or an honest "this shaped how a
country still talks about itself".

**8. Continue the journey** — *not written by hand*. It is derived from the
knowledge graph. Your job is to add your story's nodes and their edges in
`graph.ts`, with a sentence explaining each link.

## Accuracy

**Primary sources where they exist.** Treaties, letters, debates, the text
itself. Secondary sources should be named historians, with a book that can be
found by ISBN.

**Verify every citation before adding it.** A citation pointing at the wrong work
is worse than no citation, because it manufactures confidence.

**Never borrow wording.** Facts are free; phrasing is not. Everything in the
atlas is written from scratch.

**Omit rather than infer.** If no source states it, leave it out. A missing field
means nobody said it, not that it did not happen.

**Numbers get sourced or hedged.** "Roughly forty thousand chests by 1838" is
supportable. Precise figures you half-remember are how errors enter. If the exact
number is disputed, say the range and say who disputes it.

### The confidence ladder

| level | means | how it renders |
| --- | --- | --- |
| `established` | Not seriously disputed by historians | Narrated plainly |
| `contested` | Genuine live disagreement | Carries a label; both positions shown |
| `speculation` | Counterfactual | Only inside `whatIf`, inside a warning frame |

**Contested does not mean "some people online disagree".** It means specialists
disagree in print, and you can name them on both sides.

### Myths

Every story should correct what most people get wrong. The `whyItPersists` field
is not optional in spirit — the reason a myth survives is usually as interesting
as the correction, and giving it makes the correction land instead of scolding.

### Disagreements

`atlasPosition` is required and it is the most important field on the page. It
states exactly what the atlas will and will not assert in its own voice. Get this
right and a specialist can trust the rest.

> The atlas states that silver left China and that opium was a major reason. It
> does not state that opium was the only reason, because the evidence does not
> support that.

### What if?

Always speculation, always labelled, and always paired with `constraint` — the
thing that pushes back. A counterfactual without its constraint is just a
daydream. With it, it teaches which parts of the story were contingent and which
were going to happen anyway.

## Lenses

The article is the article. Lenses re-frame it; they do not replace it.

Ship at least three. Useful kinds:

- `In one minute` — a real 150-word version, not a truncation
- `Explain like I'm 16` — mechanism and vocabulary go up, story stays
- `University level` — historiography, named positions, open questions
- An angle: `Follow the money`, `The technology angle`, `The military angle`
- A contrast: `From the Chinese side`, `Compared with Rome`

Pre-written lenses are never sent to a model. They are already reviewed.

## The graph

A story that adds no edges is an island, and `npm run verify` will fail it —
fewer than three onward connections is a hard error.

For each node your story touches:

- **Edge notes are sentences, not labels.** "made possible" is a relation;
  "paper reached the Islamic world from China and made copying a book an
  affordable act" is the note. The note is what a reader sees.
- **Direction matters.** `caused` runs one way.
- **Mark contested links.** If the causal claim is an interpretation — as with
  algebra reaching the East India Company through double-entry bookkeeping — set
  `confidence: 'contested'`.
- **Add nodes you have not written yet.** A node without a story renders honestly
  as "on the map, no story yet". That is far better than a dead link, and it
  shows readers where the atlas is going.

## Before you push

```bash
npm run verify
```

That builds and runs the structural checks: reel length and word budget,
unresolved citation ids, nodes that do not exist, quizzes with an off-by-one
answer, unlabelled edges, quoted asides with no source, timelines whose dates
disagree with their years, stories with no way out.

Then set `reviewed` to today's date. It is displayed at the bottom of the story,
and it is a claim that a person read the whole thing.
