import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRightIcon, SparklesIcon } from 'lucide-react'
import { ATLAS_STATS, CURIOS, STORIES, hubs } from '@/content'
import { NODE_KIND_LABEL } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatSpan, pickN } from '@/lib/utils'

/** The chain from the vision doc, rendered as the promise the site is making. */
const JOURNEY = [
  'Britain',
  'Industrial Revolution',
  'Tea trade',
  'East India Company',
  'India',
  'Opium Wars',
  'Hong Kong',
  'Modern China',
]

export function Home() {
  // Fresh on each visit, stable across renders within it.
  const curios = useMemo(() => pickN(CURIOS, 3, Date.now() >> 16), [])
  const featured = STORIES[0]!
  const topics = hubs(10)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="pt-14 pb-10 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-ember text-[0.8125rem] font-medium tracking-wide uppercase"
        >
          Every answer starts another question
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display mt-3 max-w-3xl text-hero font-semibold text-balance"
        >
          History is not a list of dates. It is the best story ever told.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-ink-soft mt-5 max-w-2xl text-lg leading-relaxed"
        >
          Why things happened. Who gained, who paid, what it broke, and how it reaches the world you
          woke up in this morning. Written to be understood by a curious ten-year-old and to survive
          being checked by a historian.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <Button size="lg" asChild>
            <Link to="/story/$slug" params={{ slug: featured.slug }}>
              Start with {featured.title}
              <ArrowRightIcon />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/explore">Open the map</Link>
          </Button>
        </motion.div>
      </section>

      {/* The endless-journey promise, made concrete. */}
      <section aria-label="An example journey" className="border-rule border-y py-5">
        <p className="text-ink-soft mb-3 text-xs tracking-wide uppercase">One evening on the atlas</p>
        <ol className="scrollbar-slim flex items-center gap-2 overflow-x-auto pb-1">
          {JOURNEY.map((step, index) => (
            <li key={step} className="flex shrink-0 items-center gap-2">
              <span className="text-ink-soft border-rule rounded-full border px-3 py-1 text-[0.8125rem] whitespace-nowrap">
                {step}
              </span>
              {index < JOURNEY.length - 1 && <ArrowRightIcon className="text-ember size-3.5 shrink-0" />}
            </li>
          ))}
        </ol>
      </section>

      <section className="py-12" aria-labelledby="stories-heading">
        <h2 id="stories-heading" className="font-display text-2xl font-semibold">
          Stories
        </h2>
        <p className="text-ink-soft mt-1.5 text-sm">
          {ATLAS_STATS.stories} written and reviewed · {ATLAS_STATS.nodes} topics on the map ·{' '}
          {ATLAS_STATS.sources} sources cited
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {STORIES.map((story) => (
            <Link
              key={story.slug}
              to="/story/$slug"
              params={{ slug: story.slug }}
              className="group border-rule bg-paper-raised hover:border-ember/45 flex flex-col rounded-[calc(var(--radius)+2px)] border p-5 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Badge variant="outline">{formatSpan(story.years)}</Badge>
                <Badge variant="outline">{story.readingMinutes} min</Badge>
              </div>
              <h3 className="font-display text-ink group-hover:text-ember mt-3 text-xl leading-snug font-semibold transition-colors">
                {story.title}
              </h3>
              <p className="text-ink mt-2 text-[0.9375rem] leading-relaxed">{story.hook}</p>
              <p className="text-ink-soft mt-auto pt-4 text-[0.8125rem]">{story.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-12" aria-labelledby="curios-heading">
        <h2 id="curios-heading" className="font-display flex items-center gap-2 text-2xl font-semibold">
          <SparklesIcon className="text-ember size-5" />
          Did you know?
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {curios.map((curio) => (
            <Link
              key={curio.fact}
              to="/story/$slug"
              params={{ slug: curio.storySlug }}
              className="group border-ember/30 bg-ember-soft/40 hover:border-ember/60 rounded-[calc(var(--radius)+2px)] border p-4 transition-colors"
            >
              <p className="text-ink text-[0.9375rem] leading-relaxed">{curio.fact}</p>
              <p className="text-ink-soft group-hover:text-ember mt-3 text-xs transition-colors">
                {curio.storyTitle} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16" aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="font-display text-2xl font-semibold">
          Most connected on the map
        </h2>
        <p className="text-ink-soft mt-1.5 text-sm">
          The topics with the most threads running through them. Pull one and see what moves.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {topics.map((node) => (
            <Link
              key={node.id}
              to="/explore"
              search={{ focus: node.id }}
              className="border-rule text-ink-soft hover:text-ink hover:border-ember/40 rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-colors"
              title={`${NODE_KIND_LABEL[node.kind]} — ${node.blurb}`}
            >
              {node.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
