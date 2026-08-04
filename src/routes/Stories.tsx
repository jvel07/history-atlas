import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { BookmarkIcon, ZapIcon } from 'lucide-react'
import { reelSeconds } from '@/components/StoryReel'
import { STORIES, unwrittenNodes } from '@/content'
import { ERA_LABEL } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { formatSpan } from '@/lib/utils'

export function Stories() {
  const [saved, setSaved] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('history-atlas-bookmarks')
      setSaved(raw ? (JSON.parse(raw) as string[]) : [])
    } catch {
      setSaved([])
    }
  }, [])

  const unwritten = unwrittenNodes()

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Stories</h1>
      <p className="text-ink-soft mt-3 leading-relaxed">
        About a minute each. The long version is one tap away if you want it.
      </p>

      <ul className="mt-8 space-y-4">
        {STORIES.map((story) => (
          <li key={story.slug}>
            <Link
              to="/story/$slug"
              params={{ slug: story.slug }}
              className="group border-rule bg-paper-raised hover:border-ember/45 block rounded-[calc(var(--radius)+2px)] border p-5 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="ember">
                  <ZapIcon /> {reelSeconds(story)} seconds
                </Badge>
                <Badge variant="outline">{ERA_LABEL[story.era]}</Badge>
                <Badge variant="outline">{formatSpan(story.years)}</Badge>
                {saved.includes(story.slug) && (
                  <Badge variant="outline">
                    <BookmarkIcon /> Saved
                  </Badge>
                )}
              </div>

              <h2 className="font-display text-ink group-hover:text-ember mt-3 text-2xl leading-snug font-semibold transition-colors">
                {story.title}
              </h2>
              <p className="text-ink mt-2 text-[1.0625rem] leading-relaxed">{story.hook}</p>
              <p className="text-ink-soft mt-3 text-[0.875rem]">{story.subtitle}</p>

              <div className="text-ink-soft mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                <span>{story.reel.length} cards</span>
                <span>{story.sources.length} sources</span>
                <span>{story.myths.length} myths corrected</span>
                <span>{story.readingMinutes} min if you want all of it</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <section className="border-rule mt-12 border-t pt-8">
        <h2 className="font-display text-xl font-semibold">Not written yet</h2>
        <p className="text-ink-soft mt-2 text-[0.9375rem] leading-relaxed">
          These are on the map and connected to what is already here, but no one has written and
          checked them. Listing them honestly is better than linking to a page that apologises.
        </p>
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
