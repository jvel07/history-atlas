import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import type { TimelineEvent } from '@/content/types'
import { formatYear, cn } from '@/lib/utils'
import { useLang } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'

/**
 * An interactive timeline that is honest about time.
 *
 * Events are positioned by *actual date*, not spaced evenly, because even
 * spacing tells a lie: it makes 1839–1842 look like the same interval as
 * 762–1258. The gaps are the point — you can see the century where nothing
 * happened and the eighteen months where everything did.
 *
 * True positions collide, though, and a marker you cannot click is worse than a
 * slightly inaccurate one. So markers that land within `MIN_GAP` of each other
 * stack into lanes above the rail: the horizontal position stays truthful and
 * every event keeps its own hit area. A short stem ties each raised marker back
 * to its point on the line.
 */

/** Percent of the rail width below which two markers are treated as colliding. */
const MIN_GAP = 3.2
const RAIL_Y = 62
const LANE_HEIGHT = 13

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const { lang, t } = useLang()
  const [selected, setSelected] = useState<number | null>(null)

  const { placed, first, last } = useMemo(() => {
    const sorted = [...events].sort(
      (a, b) => a.year - b.year || (a.date ?? '').localeCompare(b.date ?? ''),
    )
    const from = sorted[0]?.year ?? 0
    const to = sorted.at(-1)?.year ?? 1
    const span = Math.max(to - from, 1)

    // Greedy lane packing: take the lowest lane whose last marker is far enough
    // to the left. Events arrive sorted, so one pass is enough.
    const laneEnd: number[] = []
    const withLanes = sorted.map((event) => {
      const x = ((event.year - from) / span) * 100
      let lane = 0
      while (laneEnd[lane] !== undefined && x - laneEnd[lane]! < MIN_GAP) lane += 1
      laneEnd[lane] = x
      return { event, x, lane }
    })

    return { placed: withLanes, first: from, last: to }
  }, [events])

  const lanes = Math.max(...placed.map((p) => p.lane)) + 1
  const active = selected === null ? null : placed[selected]?.event

  return (
    <div className="not-prose scroll-mt-24">
      <div
        className="relative mb-4"
        style={{ height: RAIL_Y + 28 }}
        role="group"
        aria-label={t.timelineLabel}
      >
        <div className="bg-rule absolute right-0 left-0 h-px" style={{ top: RAIL_Y }} />

        {placed.map(({ event, x, lane }, index) => {
          const isActive = selected === index
          const top = RAIL_Y - lane * LANE_HEIGHT
          return (
            <button
              key={`${event.year}-${event.title}`}
              onClick={() => setSelected(isActive ? null : index)}
              aria-label={`${formatYear(event.year, lang)}: ${event.title}`}
              aria-pressed={isActive}
              className="group absolute w-5 -translate-x-1/2"
              style={{ left: `${x}%`, top: top - 9, height: 18, zIndex: 10 + lane }}
            >
              {lane > 0 && (
                // Decoration only. Without pointer-events-none a raised marker's
                // stem covers the dot beneath it and swallows its click.
                <span
                  className="bg-rule pointer-events-none absolute left-1/2 w-px -translate-x-1/2"
                  style={{ top: 9, height: lane * LANE_HEIGHT }}
                />
              )}
              <span
                className={cn(
                  'absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-transform duration-200',
                  event.pivotal ? 'size-3' : 'size-2',
                  isActive
                    ? 'bg-ember border-ember scale-150'
                    : event.pivotal
                      ? 'bg-paper border-ember group-hover:scale-125'
                      : 'bg-paper border-ink-soft/50 group-hover:border-ember',
                )}
              />
            </button>
          )
        })}

        <span
          className="text-ink-soft absolute left-0 font-mono text-[0.6875rem]"
          style={{ top: RAIL_Y + 8 }}
        >
          {formatYear(first, lang)}
        </span>
        <span
          className="text-ink-soft absolute right-0 font-mono text-[0.6875rem]"
          style={{ top: RAIL_Y + 8 }}
        >
          {formatYear(last, lang)}
        </span>
        {lanes > 1 && (
          <span
            className="text-ink-soft absolute left-1/2 -translate-x-1/2 text-[0.6875rem]"
            style={{ top: RAIL_Y + 8 }}
          >
            {t.timelineHint}
          </span>
        )}
      </div>

      {active && (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-rule bg-paper-raised mb-5 rounded-[var(--radius)] border p-4"
        >
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="text-ember font-mono text-sm font-semibold">{formatYear(active.year, lang)}</span>
            <span className="text-ink font-display text-[0.95rem] font-semibold">{active.title}</span>
            {active.confidence === 'contested' && <Badge variant="contested">{t.contested}</Badge>}
          </div>
          <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">{active.detail}</p>
        </motion.div>
      )}

      {/* The same events as a list. The rail shows shape; the list is what you
          actually read, and it is the accessible path through the data. */}
      <ol className="border-rule border-l pl-5">
        {placed.map(({ event }, index) => (
          <li key={`${event.year}-${event.title}-row`} className="relative py-2.5">
            <span
              className={cn(
                'absolute top-4 -left-[1.4rem] block rounded-full border-2',
                event.pivotal ? 'bg-ember border-ember size-2.5' : 'bg-paper border-rule size-2',
              )}
            />
            <button
              onClick={() => setSelected(selected === index ? null : index)}
              className="text-left"
              aria-expanded={selected === index}
            >
              <span className="text-ink-soft mr-2.5 font-mono text-[0.8125rem]">
                {formatYear(event.year, lang)}
              </span>
              <span
                className={cn(
                  'hover:text-ember text-[0.9375rem] transition-colors',
                  event.pivotal ? 'text-ink font-medium' : 'text-ink-soft',
                )}
              >
                {event.title}
              </span>
            </button>
            {selected === index && (
              <p className="text-ink-soft mt-1 max-w-prose text-sm leading-relaxed">{event.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
