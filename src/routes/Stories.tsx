import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { BookmarkIcon, ZapIcon } from 'lucide-react'
import { reelSeconds } from '@/components/StoryReel'
import { useCorpus } from '@/content/useCorpus'
import { CATEGORY_LABELS, ERA_LABELS } from '@/content/labels'
import { CATEGORY_EMOJI, CATEGORY_ORDER, type Category } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { useLang } from '@/lib/i18n'
import { formatSpan } from '@/lib/utils'

export function Stories() {
  const { lang, t } = useLang()
  const { stories, unwrittenNodes } = useCorpus()
  const [saved, setSaved] = useState<string[]>([])
  const [category, setCategory] = useState<Category | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('history-atlas-bookmarks')
      setSaved(raw ? (JSON.parse(raw) as string[]) : [])
    } catch {
      setSaved([])
    }
  }, [])

  /**
   * Only categories that actually have something behind them get a chip. An
   * empty shelf is a promise the atlas has not kept, and a reader who taps one
   * and lands on nothing stops tapping.
   */
  const shelves = useMemo(() => {
    const counts = new Map<Category, number>()
    for (const story of stories) counts.set(story.category, (counts.get(story.category) ?? 0) + 1)
    return CATEGORY_ORDER.filter((id) => counts.has(id)).map((id) => ({
      id,
      count: counts.get(id) ?? 0,
    }))
  }, [stories])

  const shown = category ? stories.filter((story) => story.category === category) : stories

  const unwritten = unwrittenNodes()

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.storiesTitle}
      </h1>
      <p className="text-ink-soft mt-3 leading-relaxed">{t.storiesStandfirst}</p>

      <nav aria-label={t.browseBy} className="mt-7">
        <h2 className="text-ink-soft text-xs tracking-wide uppercase">{t.browseBy}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            aria-pressed={category === null}
            className={`rounded-full border px-3.5 py-2 text-[0.875rem] transition-colors ${
              category === null
                ? 'border-ember bg-ember/10 text-ink font-medium'
                : 'border-rule text-ink-soft hover:text-ink hover:border-ember/40'
            }`}
          >
            {t.categoryAll}
          </button>
          {shelves.map((shelf) => (
            <button
              key={shelf.id}
              type="button"
              onClick={() => setCategory(shelf.id === category ? null : shelf.id)}
              aria-pressed={shelf.id === category}
              className={`rounded-full border px-3.5 py-2 text-[0.875rem] transition-colors ${
                shelf.id === category
                  ? 'border-ember bg-ember/10 text-ink font-medium'
                  : 'border-rule text-ink-soft hover:text-ink hover:border-ember/40'
              }`}
            >
              <span aria-hidden="true" className="mr-1.5">
                {CATEGORY_EMOJI[shelf.id]}
              </span>
              {CATEGORY_LABELS[lang][shelf.id]}
              <span className="text-ink-soft ml-1.5 text-[0.75rem]">{shelf.count}</span>
            </button>
          ))}
        </div>
      </nav>

      <p className="text-ink-soft mt-6 text-[0.8125rem]" aria-live="polite">
        {t.categoryCount(shown.length)}
      </p>

      <ul className="mt-4 space-y-4">
        {shown.map((story) => (
          <li key={story.slug}>
            <Link
              to="/story/$slug"
              params={{ slug: story.slug }}
              className="group border-rule bg-paper-raised hover:border-ember/45 block rounded-[calc(var(--radius)+2px)] border p-5 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="ember">
                  <ZapIcon /> {t.seconds(reelSeconds(story))}
                </Badge>
                <Badge variant="outline">
                  <span aria-hidden="true">{CATEGORY_EMOJI[story.category]}</span>{' '}
                  {CATEGORY_LABELS[lang][story.category]}
                </Badge>
                <Badge variant="outline">{ERA_LABELS[lang][story.era]}</Badge>
                <Badge variant="outline">{formatSpan(story.years, lang)}</Badge>
                {saved.includes(story.slug) && (
                  <Badge variant="outline">
                    <BookmarkIcon /> {t.saved}
                  </Badge>
                )}
              </div>

              <h2 className="font-display text-ink group-hover:text-ember mt-3 text-2xl leading-snug font-semibold transition-colors">
                {story.title}
              </h2>
              <p className="text-ink mt-2 text-[1.0625rem] leading-relaxed">{story.hook}</p>
              <p className="text-ink-soft mt-3 text-[0.875rem]">{story.subtitle}</p>

              <div className="text-ink-soft mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                <span>{t.cardsCount(story.reel.length)}</span>
                <span>{t.sourcesCount(story.sources.length)}</span>
                <span>{t.mythsCount(story.myths.length)}</span>
                <span>{t.minutesIfAll(story.readingMinutes)}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <section className="border-rule mt-12 border-t pt-8">
        <h2 className="font-display text-xl font-semibold">{t.notWrittenYet}</h2>
        <p className="text-ink-soft mt-2 text-[0.9375rem] leading-relaxed">{t.notWrittenYetBody}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {unwritten.map((node) => (
            <Link
              key={node.id}
              to="/explore"
              search={{ focus: node.id }}
              className="border-rule text-ink-soft hover:text-ink hover:border-ember/40 rounded-full border border-dashed px-3 py-1.5 text-[0.8125rem] transition-colors"
            >
              {node.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
