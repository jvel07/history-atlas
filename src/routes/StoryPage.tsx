import { useEffect, useState } from 'react'
import { Link, useParams, useSearch } from '@tanstack/react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { ArrowLeftIcon, BookmarkIcon, ClockIcon, MapIcon, ZapIcon } from 'lucide-react'
import { useCorpus } from '@/content/useCorpus'
import { ERA_LABELS } from '@/content/labels'
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
import { useLang } from '@/lib/i18n'
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
  const { lang, t } = useLang()
  const corpus = useCorpus()
  const { slug } = useParams({ from: '/story/$slug' })
  const { full } = useSearch({ from: '/story/$slug' })
  const story = corpus.storyBySlug(slug)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const { marked, toggle } = useBookmark(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!story) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold">{t.storyMissingTitle}</h1>
        <p className="text-ink-soft mt-3 leading-relaxed">{t.storyMissingBody}</p>
        <Button className="mt-6" asChild>
          <Link to="/explore">{t.storyMissingCta}</Link>
        </Button>
      </div>
    )
  }

  const steps = corpus.nextSteps(story)
  const related = corpus.relatedStories(slug)

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
            {t.allStories}
          </Link>

          <Button variant="outline" size="sm" asChild>
            <Link to="/story/$slug" params={{ slug: story.slug }} search={{}}>
              <ZapIcon />
              {t.secondVersion(reelSeconds(story))}
            </Link>
          </Button>
        </div>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ember">{ERA_LABELS[lang][story.era]}</Badge>
            <Badge variant="outline">{formatSpan(story.years, lang)}</Badge>
            <Badge variant="outline">
              <ClockIcon /> {t.minutes(story.readingMinutes)}
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
              {marked ? t.saved : t.saveForLater}
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/explore" search={{ focus: story.nodes[0]! }}>
                <MapIcon />
                {t.seeOnMap}
              </Link>
            </Button>
          </div>
        </header>

        <BeatSection id="worldBefore" beat={story.beats.worldBefore} sources={story.sources} />
        <BeatSection id="problem" beat={story.beats.problem} sources={story.sources} />

        <SectionHeading id="timeline">{t.headingTimeline}</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">{t.timelineBody}</p>
        <Timeline events={story.timeline} />

        <BeatSection id="story" beat={story.beats.story} sources={story.sources} />
        <BeatSection id="whyItHappened" beat={story.beats.whyItHappened} sources={story.sources} />

        <SectionHeading id="causeEffect">{t.headingCauseEffect}</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">
          {t.causeEffectBody} <em>{t.becauseWord}</em> {t.causeEffectBody2}
        </p>
        <CauseEffectFlow items={story.causeEffect} />

        <ConsequencesSection beat={story.beats.consequences} sources={story.sources} />

        {story.beforeAfter && (
          <>
            <SectionHeading id="beforeAfter">{t.headingBeforeAfter}</SectionHeading>
            <BeforeAfterCards data={story.beforeAfter} />
          </>
        )}

        <BeatSection id="whyItMatters" beat={story.beats.whyItMatters} sources={story.sources} />

        <SectionHeading id="lenses">{t.headingLenses}</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">{t.lensesBody}</p>
        <LensPicker story={story} />

        <SectionHeading id="myths">{t.headingMyths}</SectionHeading>
        <MythPanel myths={story.myths} sources={story.sources} />

        <SectionHeading id="disagreements">{t.headingDisagreements}</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">{t.disagreementsBody}</p>
        <DisagreementPanel items={story.disagreements} sources={story.sources} />

        {story.whatIf && story.whatIf.length > 0 && (
          <>
            <SectionHeading id="whatIf">{t.headingWhatIf}</SectionHeading>
            <WhatIfPanel items={story.whatIf} />
          </>
        )}

        <SectionHeading id="quiz">{t.headingQuiz}</SectionHeading>
        <Quiz questions={story.quiz} />

        <SectionHeading id="continue">{t.headingContinue}</SectionHeading>
        <p className="text-ink-soft text-[0.9375rem] leading-relaxed">{t.continueBody}</p>
        <ConnectionRail steps={steps} />

        {related.length > 0 && (
          <div className="mt-8">
            <p className="text-ink-soft mb-3 text-xs tracking-wide uppercase">{t.otherStories}</p>
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

        <SectionHeading id="sources">{t.headingSources}</SectionHeading>
        <SourceList sources={story.sources} />

        <p className="text-ink-soft border-rule mt-8 border-t pt-4 text-xs">
          {t.reviewedOn(story.reviewed)}
        </p>
      </article>
    </>
  )
}
