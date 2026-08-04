import { motion, useReducedMotion } from 'motion/react'
import type { MarkName } from '@/content/types'

/**
 * Abstract marks for reel cards.
 *
 * These are diagrams of the *sentence*, not pictures of the scene. A hub with
 * spokes for a company that owned every utility in a country; arrows leaving a
 * vessel for silver draining east; concentric arcs for a rumour being reprinted.
 *
 * The reason they are abstract is not aesthetic. Illustration would need either
 * licensed art or a generator, and both put unverifiable images next to sourced
 * claims — the one thing this atlas has promised not to do. A shape cannot get
 * a face wrong, cannot invent a uniform, and cannot imply a detail no source
 * supports. It can only be a diagram, which is what it says it is.
 *
 * They draw themselves in, so the card has a beat of movement before the eye
 * settles on the words. Under `prefers-reduced-motion` they simply appear.
 */

const PATHS: Record<MarkName, { d: string; label: string }[]> = {
  // A beam tipped by a weight on one side.
  imbalance: [
    { d: 'M60 18 V44', label: '' },
    { d: 'M18 52 L102 74', label: '' },
    { d: 'M18 52 m-14 0 a14 14 0 1 0 28 0', label: '' },
    { d: 'M102 74 m-10 0 a10 10 0 1 0 20 0', label: '' },
    { d: 'M60 44 l-6 8 h12 z', label: '' },
  ],
  // A vessel with everything leaving it.
  drain: [
    { d: 'M32 30 h56 v40 a28 28 0 0 1 -56 0 z', label: '' },
    { d: 'M96 44 h18 m-6 -6 l6 6 l-6 6', label: '' },
    { d: 'M96 62 h18 m-6 -6 l6 6 l-6 6', label: '' },
    { d: 'M96 80 h18 m-6 -6 l6 6 l-6 6', label: '' },
  ],
  // Two arrows trading places.
  reversal: [
    { d: 'M20 44 h72 m-10 -8 l10 8 l-10 8', label: '' },
    { d: 'M100 78 h-72 m10 -8 l-10 8 l10 8', label: '' },
  ],
  // Links, each depending on the last.
  chain: [
    { d: 'M14 60 a12 12 0 0 1 12 -12 h10 a12 12 0 0 1 0 24 h-10 a12 12 0 0 1 -12 -12 z', label: '' },
    { d: 'M46 60 a12 12 0 0 1 12 -12 h10 a12 12 0 0 1 0 24 h-10 a12 12 0 0 1 -12 -12 z', label: '' },
    { d: 'M78 60 a12 12 0 0 1 12 -12 h10 a12 12 0 0 1 0 24 h-10 a12 12 0 0 1 -12 -12 z', label: '' },
  ],
  // A quantity that goes vertical.
  spike: [
    { d: 'M14 96 h92', label: '' },
    { d: 'M14 88 L44 84 L62 76 L78 54 L92 16', label: '' },
    { d: 'M92 16 l-8 12 m8 -12 l4 14', label: '' },
  ],
  // A line that gives way.
  collapse: [
    { d: 'M14 24 L40 30 L58 42 L70 66 L78 96', label: '' },
    { d: 'M86 78 l6 6 m0 -6 l-6 6', label: '' },
    { d: 'M98 62 l6 6 m0 -6 l-6 6', label: '' },
    { d: 'M92 92 l6 6 m0 -6 l-6 6', label: '' },
  ],
  // One centre holding everything. The octopus, without drawing an octopus.
  web: [
    { d: 'M60 60 m-13 0 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0', label: '' },
    { d: 'M60 47 V22 M73 60 H98 M60 73 V98 M47 60 H22', label: '' },
    { d: 'M69 51 L88 32 M69 69 L88 88 M51 69 L32 88 M51 51 L32 32', label: '' },
    { d: 'M54 16 h12 v12 h-12 z M92 54 h12 v12 h-12 z M54 92 h12 v12 h-12 z M16 54 h12 v12 h-12 z', label: '' },
    { d: 'M84 28 h10 v10 h-10 z M84 82 h10 v10 h-10 z M26 82 h10 v10 h-10 z M26 28 h10 v10 h-10 z', label: '' },
  ],
  // A wall with exactly one way through.
  gate: [
    { d: 'M12 34 h40 M68 34 h40', label: '' },
    { d: 'M12 52 h40 M68 52 h40', label: '' },
    { d: 'M12 70 h40 M68 70 h40', label: '' },
    { d: 'M12 88 h40 M68 88 h40', label: '' },
    { d: 'M60 16 v92', label: '' },
  ],
  // A plate coming down on copies.
  press: [
    { d: 'M22 20 h76 v18 h-76 z', label: '' },
    { d: 'M60 38 v14 m-6 -6 l6 6 l6 -6', label: '' },
    { d: 'M26 62 h68 M22 74 h72 M26 86 h68 M22 98 h72', label: '' },
  ],
  // The same thing, again, and again.
  echo: [
    { d: 'M60 60 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0', label: '' },
    { d: 'M60 60 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0', label: '' },
    { d: 'M60 60 m-36 0 a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0', label: '' },
    { d: 'M60 60 m-50 0 a50 50 0 1 0 100 0 a50 50 0 1 0 -100 0', label: '' },
  ],
}

export function ReelMark({ name }: { name: MarkName }) {
  const reduceMotion = useReducedMotion()
  const strokes = PATHS[name]

  return (
    <svg
      viewBox="0 0 120 120"
      className="mb-6 h-20 w-20 sm:h-24 sm:w-24"
      fill="none"
      stroke="var(--reel-accent)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {strokes.map((stroke, index) => (
        <motion.path
          key={index}
          d={stroke.d}
          initial={reduceMotion ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
          transition={{
            duration: 0.55,
            delay: 0.08 + index * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </svg>
  )
}
