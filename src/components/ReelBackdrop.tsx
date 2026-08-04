import { motion, useReducedMotion } from 'motion/react'
import type { ReelCard } from '@/content/types'

/**
 * What sits behind a reel card.
 *
 * Two paths. If the card has an `image`, it is a real photograph with a licence
 * and a credit, and it gets a slow drift and a scrim. If it does not, the card
 * gets a procedural field derived from the story's mood and the card's position
 * — deterministic, so a given card always looks the same, and different enough
 * from its neighbours that the reel has visual rhythm rather than one flat wall.
 *
 * The scrim is not decoration. Text on these cards is 34px and up and has to
 * clear 4.5:1, so the backdrop is capped well below full strength and always
 * has a gradient of the mood's own background colour over it. That is why the
 * contrast checks still pass with a photograph behind the words.
 */

/** Ceiling on how strong a backdrop is allowed to be. Contrast depends on it. */
const IMAGE_OPACITY = 0.34
const FIELD_OPACITY = 0.5

/** Deterministic pseudo-random in [0,1) from a seed. No layout thrash on rerender. */
function noise(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export function ReelBackdrop({ card, index }: { card?: ReelCard; index: number }) {
  const reduceMotion = useReducedMotion()

  if (card?.image) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={card.image.src}
          alt=""
          loading="lazy"
          decoding="async"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={reduceMotion ? undefined : { scale: 1.14 }}
          transition={{ duration: 14, ease: 'linear' }}
          className="h-full w-full object-cover"
          style={{ opacity: IMAGE_OPACITY }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--reel-bg) 4%, color-mix(in oklab, var(--reel-bg) 72%, transparent) 46%, color-mix(in oklab, var(--reel-bg) 55%, transparent) 100%)',
          }}
        />
      </div>
    )
  }

  // Two soft lobes of the mood's accent and its ink, placed by seed.
  const a = noise(index + 1)
  const b = noise(index + 7.3)
  const c = noise(index + 19.1)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          opacity: FIELD_OPACITY,
          background: [
            `radial-gradient(60% 45% at ${18 + a * 64}% ${12 + b * 30}%, color-mix(in oklab, var(--reel-accent) 34%, transparent), transparent 70%)`,
            `radial-gradient(52% 40% at ${12 + c * 70}% ${68 + a * 26}%, color-mix(in oklab, var(--reel-ink) 16%, transparent), transparent 72%)`,
          ].join(','),
        }}
      />
      {/* Grain, so the gradients read as a surface rather than as a CSS default. */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--reel-bg) 2%, color-mix(in oklab, var(--reel-bg) 55%, transparent) 55%, transparent 100%)',
        }}
      />
    </div>
  )
}

/** The credit line, shown small and only when there is a real image to credit. */
export function ReelCredit({ card }: { card?: ReelCard }) {
  if (!card?.image) return null
  return (
    <p className="max-w-[60%] text-[0.625rem] leading-tight text-[var(--reel-dim)]">
      {card.image.credit} · {card.image.licence}
    </p>
  )
}
