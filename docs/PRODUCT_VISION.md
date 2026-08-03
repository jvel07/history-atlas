# History Atlas — Product Vision

The founding brief, kept as written. `docs/ARCHITECTURE.md` records what has
actually been built against it, and `docs/ROADMAP.md` records what has not.

---

History Atlas is an AI-powered web application that makes history, science,
technology, philosophy, civilizations, and curious facts addictive to learn.

The goal is not to compete with Wikipedia.

The goal is to become the best storyteller on the internet.

Users should constantly feel:

> "Wait… what happened next?"

Every page should naturally lead to another page, creating an endless journey of
discovery.

## Core vision

History Atlas explains complex subjects through engaging stories instead of
encyclopedic articles. Every explanation should feel like listening to an
incredible documentary narrator.

The application should transform facts into narratives. Instead of merely
presenting information, it should explain:

- why it happened
- who benefited
- who suffered
- what changed afterwards
- how it connects with other events
- what myths exist
- what historians disagree on
- why it still matters today

Every topic should answer: **"Why should I care?"**

## Target audience

Curious people of every age.

The explanations should be understandable by someone around 10 years old, while
remaining completely accurate. This does not mean childish. It means:

- simple language
- vivid analogies
- exciting storytelling
- emotional pacing
- short paragraphs
- no unnecessary jargon

The reader should never feel like they're reading a textbook.

## Writing style

Every explanation should feel like a Netflix documentary mixed with an amazing
teacher.

Instead of:

> "Britain exported opium to China."

Write:

> "Imagine your favorite store keeps buying everything from your family, but
> never buys anything back. Eventually they run out of money. Britain had exactly
> this problem with China. Instead of creating products China wanted, British
> merchants found another solution — selling opium grown in India. That decision
> changed world history."

Always:

- hook the reader immediately
- build curiosity
- reveal information progressively
- finish by naturally leading into another topic

Every article should make the reader want to continue.

## Storytelling formula

1. **Hook** — start with something surprising.
   - "This war started because of a drug."
   - "The most important word in computer science comes from one man who lived
     1,200 years ago."
   - "This emperor accidentally changed Europe forever."
2. **The world before** — explain what life looked like before. Help the user
   understand the context.
3. **The problem** — what changed? Why did this become important?
4. **The story** — tell the chronological events. Avoid dumping facts. Tell a
   story.
5. **Why it happened** — incentives. Economics. Politics. Religion. Technology.
   Human behavior.
6. **Consequences** — short-term effects. Long-term effects. Unexpected effects.
7. **Why it still matters** — connect history to today's world.
8. **Continue the journey** — always recommend related topics.

```
Britain → Industrial Revolution → Tea Trade → East India Company
       → India → Opium Wars → Hong Kong → Modern China
```

The learning experience should never end.

## AI capabilities

The AI should dynamically adapt explanations:

- Explain like I'm 10. / like I'm 16. / like a university student.
- Explain in one minute. / Go into deep detail.
- Focus on economics. / military strategy. / technology.
- Compare with another civilization.
- Challenge common myths.
- Show opposing historical views.

## Knowledge graph

Everything should be connected: people, empires, wars, religions, ideas,
scientific discoveries, technologies. Every page should expose relationships.

```
Al-Khwarizmi → Algorithms → Algebra → Islamic Golden Age → House of Wisdom
             → Abbasid Caliphate → Baghdad → Mongol Invasion
             → European Renaissance
```

The application should encourage endless exploration.

## Visual experience

Every page should contain rich visual elements: interactive timeline, maps,
empire borders, portraits, artifacts, paintings, animations, comparison cards,
historical locations, charts where appropriate. Images should support the story
rather than distract from it.

## Interactive features

Interactive timelines. Interactive maps. Before vs after comparisons. Cause →
effect diagrams. Decision trees. "What if?" alternate history explorations
(clearly labeled as speculation). Quizzes. Flashcards. Bookmarks. Collections.
Reading history. Personal learning paths.

## Discovery experience

The application should constantly encourage curiosity:

- Did you know?
- You might also like…
- This changed everything because…
- Most people don't know that…
- Five minutes later…
- One decision caused all of this…

Connections between seemingly unrelated topics should be surfaced naturally.

## Search

Semantic search instead of keyword search. Users should be able to ask:

- "Why did Britain sell opium?"
- "What caused Rome to fall?"
- "Who invented algorithms?"
- "What happened after the Islamic Golden Age?"

Search should understand intent.

## Source quality

Information should be historically accurate. Every claim should be traceable.
Whenever possible: cite primary sources, cite respected historians, distinguish
facts from interpretations, clearly label disputed topics, avoid sensationalism.

**Accuracy is more important than virality.**

## Tone

Energetic. Curious. Dynamic. Human. Never robotic. Never academic unless
requested. Never condescending.

Every explanation should feel like talking to the smartest history teacher you've
ever met.

## Design principles

Modern. Minimal. Beautiful typography. Excellent readability. Fast. Mobile-first.
Dark mode. Accessible. Animations should support learning, never become
distractions.

## Tech stack

**Frontend:** Vite · React · TypeScript · Tailwind CSS · shadcn/ui · TanStack
Router · TanStack Query · Motion

**Backend:** Supabase · PostgreSQL · pgvector · AI orchestration layer · RAG over
curated historical sources · knowledge graph (Neo4j or graph layer)

## Success metric

A successful session is not one where the user finds one answer.

It is one where they arrive looking for one fact… and an hour later they're still
exploring because every answer sparked another question.

The application should turn curiosity into an endless journey of discovery, where
learning feels effortless, memorable, and genuinely exciting.
