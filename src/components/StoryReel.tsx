import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'motion/react'
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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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

  // +2 for the two closing cards: where this goes next, and how to go deeper.
  const total = story.reel.length + 2
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

  const card = index < story.reel.length ? story.reel[index] : undefined
  const dwell = card ? dwellFor(card.text) : MIN_DWELL_MS

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
      {/* Segmented progress. The active tick fills over the card's own dwell
          time, so the pacing is visible rather than a surprise. */}
      <div className="absolute top-0 right-0 left-0 z-20 flex gap-[3px] px-3 pt-3" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-[var(--reel-rule)]">
            <span
              key={`${i}-${index}-${playing}-${narrating}`}
              className={cn('block h-full origin-left bg-[var(--reel-accent)]', i < index && 'w-full')}
              style={
                i === index && playing && !narrating && !onLastCard
                  ? { animation: `reel-tick ${dwell}ms linear forwards` }
                  : i === index
                    ? { width: '100%' }
                    : undefined
              }
            />
          </span>
        ))}
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
        {story.reel.map((item, i) => (
          <section
            key={i}
            className={cn(
              'flex h-full snap-start snap-always items-center px-6 sm:px-10',
              item.step !== undefined && 'justify-center',
            )}
            aria-label={`Card ${i + 1} of ${total}`}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scroller, amount: 0.6, once: false }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={cn('mx-auto w-full max-w-2xl', item.step !== undefined && 'text-center')}
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
          className="flex h-full snap-start snap-always items-center px-6 sm:px-10"
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
          className="flex h-full snap-start snap-always items-center px-6 sm:px-10"
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
          {index < story.reel.length
            ? REEL_BEAT_LABEL[story.reel[index]!.beat]
            : index === story.reel.length
              ? 'Keep going'
              : 'The end'}
        </span>

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
