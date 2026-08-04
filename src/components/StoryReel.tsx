import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRightIcon, BookOpenIcon, ChevronDownIcon, MapIcon, RotateCcwIcon } from 'lucide-react'
import type { NextStep } from '@/content'
import type { Story } from '@/content/types'
import { REEL_BEAT_LABEL } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * The story, at reel length.
 *
 * This is the default way a story is told. The long article still exists, but
 * the honest observation is that almost nobody arrives wanting eleven minutes —
 * they arrive wanting to know what happened, and they are holding a phone.
 *
 * Mechanically it is CSS scroll-snap rather than a gesture library: a flick of
 * the thumb, a mouse wheel, a spacebar and the arrow keys all already do the
 * right thing, and it degrades to a plain scrollable list if anything fails.
 * The one thing added on top is that a click anywhere advances, because on a
 * phone the thumb is already there.
 */

/** Roughly how long a card is on screen when someone is actually reading. */
const SECONDS_PER_CARD = 2.4

export function reelSeconds(story: Story) {
  return Math.round((story.reel.length * SECONDS_PER_CARD) / 5) * 5
}

export function StoryReel({ story, steps }: { story: Story; steps: NextStep[] }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  // +2 for the two closing cards: where this goes next, and how to go deeper.
  const total = story.reel.length + 2

  const goTo = useCallback(
    (next: number) => {
      const node = scroller.current
      if (!node) return
      const clamped = Math.max(0, Math.min(next, total - 1))
      node.scrollTo({ top: clamped * node.clientHeight, behavior: reduceMotion ? 'auto' : 'smooth' })
    },
    [total, reduceMotion],
  )

  useEffect(() => {
    const node = scroller.current
    if (!node) return
    let frame = 0
    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setIndex(Math.round(node!.scrollTop / node!.clientHeight))
      })
    }
    node.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      node.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        goTo(index + 1)
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        goTo(index - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, goTo])

  // The reel owns the viewport while it is mounted. Subtracting a nav height in
  // CSS was wrong twice over: the mobile nav is two rows, not one, so every card
  // ran past the fold and took the swipe hint with it. Pinning to the viewport
  // instead means the box is exactly right on any chrome.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // `reel-open` also hides the nav's mobile link row (see index.css). That row
    // sits at z-50 and was painting over the progress rail; hiding it is the
    // right answer anyway, because a reel should own the screen. The header
    // above it stays, so there is always a way out.
    document.body.classList.add('reel-open')
    return () => {
      document.body.style.overflow = previous
      document.body.classList.remove('reel-open')
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-14 bottom-0 z-30 bg-paper">
      {/* Segmented progress, one tick per card. Borrowed from the format the
          whole thing is imitating, and it is genuinely the clearest signal of
          "how much is left" at this length. */}
      <div className="absolute top-0 right-0 left-0 z-20 flex gap-[3px] px-3 pt-3" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={cn(
              'h-[3px] flex-1 rounded-full transition-colors duration-300',
              i < index ? 'bg-ember' : i === index ? 'bg-ember' : 'bg-rule',
            )}
          />
        ))}
      </div>

      <div
        ref={scroller}
        onClick={(event) => {
          // Let links and buttons do their own thing; anywhere else advances.
          if ((event.target as HTMLElement).closest('a, button')) return
          goTo(index + 1)
        }}
        className="scrollbar-slim h-full snap-y snap-mandatory overflow-y-scroll overscroll-contain"
        role="region"
        aria-label={`${story.title} — ${total} cards. Use the arrow keys to move through them.`}
      >
        {story.reel.map((card, i) => (
          <section
            key={i}
            className="flex h-full snap-start snap-always items-center px-6 sm:px-10"
            aria-label={`Card ${i + 1} of ${total}`}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scroller, amount: 0.6, once: false }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto w-full max-w-2xl"
            >
              {card.kicker && (
                <p className="text-ember mb-3 font-mono text-sm tracking-widest uppercase">{card.kicker}</p>
              )}
              <p
                className={cn(
                  'font-display leading-[1.12] font-semibold tracking-tight text-balance',
                  // Reel type is loud. 34px is the floor on the narrowest phone.
                  'text-[clamp(2.125rem,7vw,3.5rem)]',
                  card.punch ? 'text-ember' : 'text-ink',
                )}
              >
                {card.text}
              </p>
            </motion.div>
          </section>
        ))}

        {/* Closing card 1: the onward journey, which is the whole point. */}
        <section
          className="flex h-full snap-start snap-always items-center px-6 sm:px-10"
          aria-label="Where this goes next"
        >
          <div className="mx-auto w-full max-w-2xl">
            <p className="text-ink-soft mb-4 font-mono text-sm tracking-widest uppercase">
              Where this goes next
            </p>
            <div className="flex flex-col gap-2.5">
              {steps.slice(0, 4).map(({ node, why, hasStory }) =>
                hasStory ? (
                  <Link
                    key={node.id}
                    to="/story/$slug"
                    params={{ slug: node.story! }}
                    className="group border-rule hover:border-ember/60 rounded-[calc(var(--radius)+2px)] border p-4 transition-colors"
                  >
                    <p className="font-display text-ink group-hover:text-ember flex items-center gap-2 text-xl font-semibold transition-colors">
                      {node.label}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                    <p className="text-ink-soft mt-1 text-sm leading-relaxed">{why}</p>
                  </Link>
                ) : (
                  <Link
                    key={node.id}
                    to="/explore"
                    search={{ focus: node.id }}
                    className="group border-rule hover:border-ember/60 rounded-[calc(var(--radius)+2px)] border border-dashed p-4 transition-colors"
                  >
                    <p className="font-display text-ink group-hover:text-ember flex flex-wrap items-center gap-2 text-xl font-semibold transition-colors">
                      {node.label}
                      <Badge variant="outline">on the map · not written yet</Badge>
                    </p>
                    <p className="text-ink-soft mt-1 text-sm leading-relaxed">{why}</p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Closing card 2: everything the reel deliberately left out. */}
        <section
          className="flex h-full snap-start snap-always items-center px-6 sm:px-10"
          aria-label="Go deeper"
        >
          <div className="mx-auto w-full max-w-2xl">
            <p className="font-display text-ink text-[clamp(1.5rem,4.5vw,2.25rem)] leading-tight font-semibold text-balance">
              That is the short version. It is accurate, and it leaves things out.
            </p>
            <p className="text-ink-soft mt-4 leading-relaxed">
              The long one has the {story.sources.length} sources, the {story.myths.length} things
              most people get wrong, and the parts historians still argue about.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild>
                <Link to="/story/$slug" params={{ slug: story.slug }} search={{ full: true }}>
                  <BookOpenIcon />
                  Read the full story · {story.readingMinutes} min
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/explore" search={{ focus: story.nodes[0]! }}>
                  <MapIcon />
                  See it on the map
                </Link>
              </Button>
              <Button variant="ghost" onClick={() => goTo(0)}>
                <RotateCcwIcon />
                Again
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Beat label, bottom left: quiet orientation without a table of contents. */}
      <div className="pointer-events-none absolute right-0 bottom-4 left-0 z-20 flex items-end justify-between px-6 sm:px-10">
        <span className="text-ink-soft font-mono text-[0.6875rem] tracking-widest uppercase">
          {index < story.reel.length
            ? REEL_BEAT_LABEL[story.reel[index]!.beat]
            : index === story.reel.length
              ? 'Keep going'
              : 'The end'}
        </span>

        {index === 0 && (
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-ink-soft flex items-center gap-1.5 text-[0.6875rem] tracking-widest uppercase"
          >
            Swipe
            <ChevronDownIcon className="size-3.5" />
          </motion.span>
        )}
      </div>
    </div>
  )
}
