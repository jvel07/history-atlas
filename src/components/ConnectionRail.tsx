import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, MapIcon } from 'lucide-react'
import type { NextStep } from '@/content'
import { NODE_KIND_LABELS } from '@/content/labels'
import { Badge } from '@/components/ui/badge'
import { useLang } from '@/lib/i18n'
import { formatSpan } from '@/lib/utils'

/**
 * Continue the journey.
 *
 * The list is derived from the knowledge graph, and each card shows the *reason*
 * the two things are connected rather than a bare "related topic". A reason is
 * what makes someone click; "related topic" is what makes them close the tab.
 *
 * Nodes without a story yet link to the map instead of a dead end, and say so.
 */
export function ConnectionRail({ steps }: { steps: NextStep[] }) {
  const { lang, t } = useLang()
  if (steps.length === 0) return null

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {steps.map(({ node, why, hasStory, contested }) => {
        const inner = (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-display text-ink group-hover:text-ember text-[1.0625rem] leading-snug font-semibold transition-colors">
                  {node.label}
                </p>
                <p className="text-ink-soft mt-0.5 text-xs">
                  {NODE_KIND_LABELS[lang][node.kind]}
                  {node.years && ` · ${formatSpan(node.years, lang)}`}
                </p>
              </div>
              {hasStory ? (
                <ArrowRightIcon className="text-ink-soft group-hover:text-ember mt-1 size-4 shrink-0 transition-all group-hover:translate-x-0.5" />
              ) : (
                <MapIcon className="text-ink-soft mt-1 size-4 shrink-0" />
              )}
            </div>

            <p className="text-ink-soft mt-2.5 text-[0.875rem] leading-relaxed">{why}</p>

            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {!hasStory && <Badge variant="outline">{t.onMapNoStory}</Badge>}
              {contested && <Badge variant="contested">{t.linkContested}</Badge>}
            </div>
          </>
        )

        const className =
          'group border-rule bg-paper-raised hover:border-ember/45 block rounded-[calc(var(--radius)+2px)] border p-4 transition-colors'

        return hasStory ? (
          <Link key={node.id} to="/story/$slug" params={{ slug: node.story! }} className={className}>
            {inner}
          </Link>
        ) : (
          <Link key={node.id} to="/explore" search={{ focus: node.id }} className={className}>
            {inner}
          </Link>
        )
      })}
    </div>
  )
}
