import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react'
import {
  ArrowRightIcon,
  BookOpenIcon,
  MapIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  Volume2Icon,
  VolumeXIcon,
} from 'lucide-react'
import type { NextStep } from '@/content'
import type { Story } from '@/content/types'
import { REEL_BEAT_LABEL } from '@/content/types'
import { ReelMark } from '@/components/ReelMarks'
import { ReelBackdrop, ReelCredit } from '@/components/ReelBackdrop'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn, formatSpan } from '@/lib/utils'

/**
 * The story, at reel length — and it plays itself.
 *
 * Measured against the format this is imitating: a 110-second reel cut 57 times,
 * one image every 1.93 seconds, over continuous narration. The thing that makes
 * it work is that the reader does nothing. A card stack you have to flick is a
 * slideshow; a card stack that advances on its own is a video.
 *
 * So it runs on a timer by default, tap pauses, and any deliberate navigation
 * (swipe, wheel, arrow keys) hands control back. Optional narration uses the
 * browser's own speech synthesis and, when it is on, cards advance when the
 * sentence *finishes* rather than on a clock — which is how the reference is
 * actually paced.
 *
 * Mechanically it is CSS scroll-snap, so thumb, wheel, spacebar and arrow keys
 * already work and it degrades to a plain scrollable list.
 */

/** Floor, and per-word allowance, for how long a card stays up. */
const MIN_DWELL_MS = 1900
const MS_PER_WORD = 55

function dwellFor(text: string) {
  return MIN_DWELL_MS + text.split(/\s+/).length * MS_PER_WORD
}

export function reelSeconds(story: Story) {
  const total = story.reel.reduce((ms, card) => ms + dwellFor(card.text), 0)
  return Math.round(total / 1000 / 5) * 5
}

export function StoryReel({ story, steps }: { story: Story; steps: NextStep[] }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [narrating, setNarrating] = useState(false)
  const reduceMotion = useReducedMotion()

  // +1 opening title card, +2 closing cards (where this goes next, go deeper).
  const total = story.reel.length + 3
  const onLastCard = index >= total - 1

  const canNarrate = useMemo(
    () => typeof window !== 'undefined' && 'speechSynthesis' in window,
    [],
  )

  const goTo = useCallback(
    (next: number) => {
      const node = scroller.current
      if (!node) return
      const clamped = Math.max(0, Math.min(next, total - 1))
      node.scrollTo({ top: clamped * node.clientHeight, behavior: reduceMotion ? 'auto' : 'smooth' })
    },
    [total, reduceMotion],
  )

  /** Deliberate navigation always hands control back to the reader. */
  const takeOver = useCallback((next: number) => {
    setPlaying(false)
    goTo(next)
  }, [goTo])

  useEffect(() => {
    const node = scroller.current
    if (!node) return
    let frame = 0
    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setIndex(Math.round(node!.scrollTop / node!.clientHeight)))
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
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault()
        takeOver(index + 1)
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        takeOver(index - 1)
      } else if (event.key === ' ') {
        event.preventDefault()
        setPlaying((value) => !value)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, takeOver])

  // Index 0 is the title card; the reel proper starts at 1.
  const card = index >= 1 && index <= story.reel.length ? story.reel[index - 1] : undefined
  const dwell = card ? dwellFor(card.text) : MIN_DWELL_MS

  /**
   * The bar fills continuously: it jumps to where the current card starts, then
   * eases across that card's own dwell. Pausing stops the animation and leaves
   * it exactly where it was, which is the whole reason this is a motion value
   * and not a CSS transition.
   */
  const progress = useMotionValue(0)
  useEffect(() => {
    const span = Math.max(total - 1, 1)
    progress.set(index / span)
    if (!playing || onLastCard || narrating) return
    const controls = animate(progress, Math.min(index + 1, total - 1) / span, {
      duration: dwell / 1000,
      ease: 'linear',
    })
    return () => controls.stop()
  }, [index, playing, narrating, onLastCard, dwell, total, progress])

  /**
   * Advance. With narration on, the sentence ending is the cue — that is what
   * paces the reference, and it means a long card is not cut off mid-thought.
   */
  useEffect(() => {
    if (!playing || onLastCard) return

    if (narrating && canNarrate && card) {
      const utterance = new SpeechSynthesisUtterance(card.text)
      utterance.rate = 1.02
      utterance.onend = () => goTo(index + 1)
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
      // A fallback timer, because `onend` does not fire reliably everywhere.
      const bail = window.setTimeout(() => goTo(index + 1), dwell + 9000)
      return () => {
        window.clearTimeout(bail)
        window.speechSynthesis.cancel()
      }
    }

    const timer = window.setTimeout(() => goTo(index + 1), dwell)
    return () => window.clearTimeout(timer)
  }, [playing, narrating, canNarrate, card, dwell, index, onLastCard, goTo])

  // Never leave a voice talking to an empty room.
  useEffect(() => {
    return () => {
      if (canNarrate) window.speechSynthesis.cancel()
    }
  }, [canNarrate])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // `reel-open` also hides the nav's mobile link row (see index.css). That row
    // sits at z-50 and was painting over the progress rail; hiding it is the
    // right answer anyway, because a reel should own the screen.
    document.body.classList.add('reel-open')
    return () => {
      document.body.style.overflow = previous
      document.body.classList.remove('reel-open')
    }
  }, [])

  return (
    <div data-mood={story.mood} className="fixed inset-x-0 top-14 bottom-0 z-30 transition-colors duration-500">
      {/* One continuous bar. It was a segment per card, and at forty cards that
          renders as a dashed line across the top rather than as progress. */}
      <div className="absolute top-0 right-0 left-0 z-20 h-[3px] bg-[var(--reel-rule)]" aria-hidden>
        <motion.div
          style={{ scaleX: progress }}
          className="h-full origin-left bg-[var(--reel-accent)]"
        />
      </div>

      <div
        ref={scroller}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a, button')) return
          setPlaying((value) => !value)
        }}
        onWheel={() => setPlaying(false)}
        onTouchStart={() => undefined}
        className="scrollbar-slim h-full snap-y snap-mandatory overflow-y-scroll overscroll-contain"
        role="region"
        aria-label={`${story.title} — ${total} cards, playing automatically. Space pauses; arrow keys move.`}
      >
        {/* The opening card. The reference format does this and it earns its
            place: it says what you are about to get and how long it takes,
            before asking for any attention. A hook with no frame around it is
            just a sentence someone shouted at you. */}
        <section
          className="relative flex h-full snap-start snap-always items-center px-6 sm:px-10"
          aria-label="Title"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-2xl"
          >
            <p className="mb-4 font-mono text-sm tracking-widest text-[var(--reel-accent)] uppercase">
              {formatSpan(story.years)}
            </p>
            <h1 className="font-display text-[clamp(2.5rem,9vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance text-[var(--reel-ink)]">
              {story.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--reel-dim)]">{story.subtitle}</p>
            <p className="mt-8 font-mono text-xs tracking-widest text-[var(--reel-dim)] uppercase">
              {reelSeconds(story)} seconds · {story.reel.length} cards · {story.sources.length} sources
            </p>
          </motion.div>
        </section>

        {story.reel.map((item, i) => (
          <section
            key={i}
            className={cn(
              // `relative` scopes each card's absolute backdrop to its own
              // section; without it the backdrop escapes to the fixed reel
              // container and every card's backdrop stacks over the whole screen.
              'relative flex h-full snap-start snap-always items-center px-6 sm:px-10',
              item.step !== undefined && 'justify-center',
            )}
            aria-label={`Card ${i + 1} of ${story.reel.length}`}
          >
            <ReelBackdrop card={item} index={i} />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: false }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'relative z-10 mx-auto w-full max-w-2xl',
                item.step !== undefined && 'text-center',
              )}
            >
              {/* A chapter break. The reference uses these as plain cards that
                  say "Step 2", and they do a lot of work: they turn a sequence
                  of events into a procedure someone followed on purpose. */}
              {item.step !== undefined ? (
                <>
                  <span className="inline-block rounded-md border border-[var(--reel-rule)] px-4 py-1.5 font-mono text-sm tracking-widest text-[var(--reel-dim)] uppercase">
                    Step {item.step}
                  </span>
                  <p className="font-display mt-6 text-[clamp(1.75rem,6vw,3rem)] leading-[1.15] font-semibold text-balance text-[var(--reel-ink)]">
                    {item.text}
                  </p>
                </>
              ) : (
                <>
                  {item.mark && <ReelMark name={item.mark} />}
                  {item.kicker && (
                    <p className="mb-3 font-mono text-sm tracking-widest text-[var(--reel-accent)] uppercase">
                      {item.kicker}
                    </p>
                  )}
                  <p
                    className={cn(
                      'font-display leading-[1.12] font-semibold tracking-tight text-balance',
                      'text-[clamp(2.125rem,7vw,3.5rem)]',
                      item.punch ? 'text-[var(--reel-accent)]' : 'text-[var(--reel-ink)]',
                    )}
                  >
                    {item.text}
                  </p>
                </>
              )}
            </motion.div>
          </section>
        ))}

        {/* Closing card 1: the onward journey, which is the whole point. */}
        <section
          className="relative flex h-full snap-start snap-always items-center px-6 sm:px-10"
          aria-label="Where this goes next"
        >
          <div className="mx-auto w-full max-w-2xl">
            <p className="mb-4 font-mono text-sm tracking-widest text-[var(--reel-dim)] uppercase">
              Where this goes next
            </p>
            <div className="flex flex-col gap-2.5">
              {steps.slice(0, 4).map(({ node, why, hasStory }) =>
                hasStory ? (
                  <Link
                    key={node.id}
                    to="/story/$slug"
                    params={{ slug: node.story! }}
                    className="group rounded-[calc(var(--radius)+2px)] border border-[var(--reel-rule)] p-4 transition-colors hover:border-[var(--reel-accent)]"
                  >
                    <p className="font-display flex items-center gap-2 text-xl font-semibold text-[var(--reel-ink)] transition-colors group-hover:text-[var(--reel-accent)]">
                      {node.label}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--reel-dim)]">{why}</p>
                  </Link>
                ) : (
                  <Link
                    key={node.id}
                    to="/explore"
                    search={{ focus: node.id }}
                    className="group rounded-[calc(var(--radius)+2px)] border border-dashed border-[var(--reel-rule)] p-4 transition-colors hover:border-[var(--reel-accent)]"
                  >
                    <p className="font-display flex flex-wrap items-center gap-2 text-xl font-semibold text-[var(--reel-ink)] transition-colors group-hover:text-[var(--reel-accent)]">
                      {node.label}
                      <Badge variant="outline">on the map · not written yet</Badge>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--reel-dim)]">{why}</p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Closing card 2: everything the reel deliberately left out. */}
        <section
          className="relative flex h-full snap-start snap-always items-center px-6 sm:px-10"
          aria-label="Go deeper"
        >
          <div className="mx-auto w-full max-w-2xl">
            <p className="font-display text-[clamp(1.5rem,4.5vw,2.25rem)] leading-tight font-semibold text-balance text-[var(--reel-ink)]">
              That is the short version. It is accurate, and it leaves things out.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--reel-dim)]">
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
              <Button
                variant="ghost"
                onClick={() => {
                  goTo(0)
                  setPlaying(true)
                }}
              >
                <RotateCcwIcon />
                Again
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Controls and orientation, bottom edge. */}
      <div className="absolute right-0 bottom-4 left-0 z-20 flex items-end justify-between gap-3 px-6 sm:px-10">
        <span
          data-reel-beat
          className="pointer-events-none font-mono text-[0.6875rem] tracking-widest text-[var(--reel-dim)] uppercase"
        >
          {index === 0
            ? `${reelSeconds(story)} seconds`
            : card
              ? REEL_BEAT_LABEL[card.beat]
              : index === story.reel.length + 1
                ? 'Keep going'
                : 'The end'}
        </span>

        <ReelCredit card={card} />

        <div className="flex items-center gap-1.5">
          {canNarrate && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                window.speechSynthesis.cancel()
                setNarrating((value) => !value)
              }}
              aria-pressed={narrating}
              aria-label={narrating ? 'Turn narration off' : 'Read it aloud'}
              title={narrating ? 'Narration on — cards wait for the sentence to finish' : 'Read it aloud'}
            >
              {narrating ? <Volume2Icon /> : <VolumeXIcon />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setPlaying((value) => !value)}
            aria-pressed={playing}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing && !onLastCard ? <PauseIcon /> : <PlayIcon />}
          </Button>
        </div>
      </div>
    </div>
  )
}
