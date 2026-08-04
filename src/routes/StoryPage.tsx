import { useEffect, useState } from 'react'
import { Link, useParams, useSearch } from '@tanstack/react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { ArrowLeftIcon, BookmarkIcon, ClockIcon, MapIcon, ZapIcon } from 'lucide-react'
import { nextSteps, relatedStories, storyBySlug } from '@/content'
import { ERA_LABEL } from '@/content/types'
import { StoryReel, reelSeconds } from '@/components/StoryReel'
import { Timeline } from '@/components/Timeline'
import { ConnectionRail } from '@/components/ConnectionRail'
import { LensPicker } from '@/components/LensPicker'
import {
  BeatSection,
  BeforeAfterCards,
  CauseEffectFlow,
  ConsequencesSection,
  DisagreementPanel,
  MythPanel,
  Quiz,
  SectionHeading,
  SourceList,
  WhatIfPanel,
} from '@/components/StoryParts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatSpan } from '@/lib/utils'

const BOOKMARKS_KEY = 'history-atlas-bookmarks'

function useBookmark(slug: string) {
  const [marked, setMarked] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BOOKMARKS_KEY)
      setMarked(raw ? (JSON.parse(raw) as string[]).includes(slug) : false)
    } catch {
      setMarked(false)
    }
  }, [slug])

  function toggle() {
    try {
      const raw = localStorage.getItem(BOOKMARKS_KEY)
      const list = raw ? (JSON.parse(raw) as string[]) : []
      const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next))
      setMarked(next.includes(slug))
    } catch {
      setMarked((value) => !value)
    }
  }

  return { marked, toggle }
}

export function StoryPage() {
  const { slug } = useParams({ from: '/story/$slug' })
  const { full } = useSearch({ from: '/story/$slug' })
  const story = storyBySlug(slug)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const { marked, toggle } = useBookmark(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!story) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold">That story is not written yet.</h1>
        <p className="text-ink-soft mt-3 leading-relaxed">
          The atlas only publishes what has been sourced and checked, so there are more topics on the
          map than there are stories behind them. This is one of them.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/explore">See what is connected</Link>
        </Button>
      </div>
    )
  }

  const steps = nextSteps(story)
  const related = relatedStories(slug)

  // The reel is what a story *is* unless the reader asks for the long version.
  if (!full) return <StoryReel story={story} steps={steps} />

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="bg-ember fixed top-14 right-0 left-0 z-40 h-0.5 origin-left"
        aria-hidden
      />

      <article className="mx-auto max-w-2xl px-4 pt-10 pb-20 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/stories"
            className="text-ink-soft hover:text-ember inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeftIcon className="size-3.5" />
            All stories
          </Link>

          <Button variant="outline" size="sm" asChild>
            <Link to="/story/$slug" params={{ slug: story.slug }} search={{}}>
              <ZapIcon />
              {reelSeconds(story)}-second version
            </Link>
          </Button>
        </div>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ember">{ERA_LABEL[story.era]}</Badge>
            <Badge variant="outline">{formatSpan(story.years)}</Badge>
            <Badge variant="outline">
              <ClockIcon /> {story.readingMinutes} min
            </Badge>
          </div>

          <h1 className="font-display mt-4 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
            {story.title}
          </h1>
          <p className="text-ink-soft mt-3 text-lg leading-relaxed">{story.subtitle}</p>

          {/* Beat 1: the hook, at the size a hook deserves. */}
          <p className="font-display border-ember mt-8 border-l-3 pl-5 text-2xl leading-snug font-medium text-balance sm:text-[1.75rem]">
            {story.hook}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Button variant={marked ? 'default' : 'outline'} size="sm" onClick={toggle}>
              <BookmarkIcon />
              {marked ? 'Saved' : 'Save for later'}
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/explore" search={{ focus: story.nodes[0]! }}>
                <MapIcon />
                See it on the map
              </Link>
            </Button>
          </div>
        </header>

        <BeatSection id="worldBefore" beat={story.beats.worldBefore} sources={story.sources} />
        <BeatSection id="problem" beat={story.beats.problem} sources={story.sources} />

        <SectionHeading id="timeline">How it unfolded</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          Events sit where they actually fall in time, not evenly spaced — so the quiet centuries look
          quiet and the eighteen months that decided everything look crowded.
        </p>
        <Timeline events={story.timeline} />

        <BeatSection id="story" beat={story.beats.story} sources={story.sources} />
        <BeatSection id="whyItHappened" beat={story.beats.whyItHappened} sources={story.sources} />

        <SectionHeading id="causeEffect">One thing led to another</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          Each step shows the mechanism, not just the sequence. The <em>because</em> is the part
          textbooks tend to leave out.
        </p>
        <CauseEffectFlow items={story.causeEffect} />

        <ConsequencesSection beat={story.beats.consequences} sources={story.sources} />

        {story.beforeAfter && (
          <>
            <SectionHeading id="beforeAfter">Before and after</SectionHeading>
            <BeforeAfterCards data={story.beforeAfter} />
          </>
        )}

        <BeatSection id="whyItMatters" beat={story.beats.whyItMatters} sources={story.sources} />

        <SectionHeading id="lenses">Same story, different lens</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          The article above is written to be clear to anyone. These are the same events told for a
          different reader, or from a different angle.
        </p>
        <LensPicker story={story} />

        <SectionHeading id="myths">What most people get wrong</SectionHeading>
        <MythPanel myths={story.myths} sources={story.sources} />

        <SectionHeading id="disagreements">Where historians disagree</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          Not everything is settled. When it is not, the atlas shows the argument instead of picking a
          side and hiding the choice.
        </p>
        <DisagreementPanel items={story.disagreements} sources={story.sources} />

        {story.whatIf && story.whatIf.length > 0 && (
          <>
            <SectionHeading id="whatIf">What if?</SectionHeading>
            <WhatIfPanel items={story.whatIf} />
          </>
        )}

        <SectionHeading id="quiz">Did it stick?</SectionHeading>
        <Quiz questions={story.quiz} />

        <SectionHeading id="continue">Continue the journey</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          Every card says how it connects to what you just read. These come from the map, not from a
          list someone typed — so they cannot drift out of date.
        </p>
        <ConnectionRail steps={steps} />

        {related.length > 0 && (
          <div className="mt-8">
            <p className="text-ink-soft mb-3 text-xs tracking-wide uppercase">Other stories</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  to="/story/$slug"
                  params={{ slug: other.slug }}
                  className="group border-rule bg-paper-raised hover:border-ember/45 rounded-[calc(var(--radius)+2px)] border p-4 transition-colors"
                >
                  <p className="font-display text-ink group-hover:text-ember font-semibold transition-colors">
                    {other.title}
                  </p>
                  <p className="text-ink-soft mt-1.5 text-[0.875rem] leading-relaxed">{other.hook}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <SectionHeading id="sources">Where this comes from</SectionHeading>
        <SourceList sources={story.sources} />

        <p className="text-ink-soft border-rule mt-8 border-t pt-4 text-xs">
          Last reviewed by a person on {story.reviewed}. Found something wrong? Corrections are the
          most useful thing you can send.
        </p>
      </article>
    </>
  )
}
