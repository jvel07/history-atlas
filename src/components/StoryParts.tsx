import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  LightbulbIcon,
  QuoteIcon,
  ScaleIcon,
  SparklesIcon,
  TriangleAlertIcon,
  XIcon,
} from 'lucide-react'
import type {
  Beat,
  BeforeAfter,
  CauseEffect,
  ConsequenceBeat,
  Disagreement,
  Myth,
  QuizQuestion,
  Source,
  WhatIf,
} from '@/content/types'
import { SOURCE_KIND_LABELS } from '@/content/labels'
import { Paragraphs, RichText } from '@/components/RichText'
import { useLang, useT } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* --------------------------------------------------------- sections -- */

export function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-ink mt-14 mb-4 scroll-mt-20 text-2xl font-semibold tracking-tight sm:text-[1.75rem]"
    >
      {children}
    </h2>
  )
}

const ASIDE_STYLE = {
  analogy: { icon: LightbulbIcon, tone: 'border-ember/35 bg-ember-soft/50' },
  number: { icon: SparklesIcon, tone: 'border-lapis/30 bg-lapis/5' },
  voice: { icon: QuoteIcon, tone: 'border-rule bg-muted/60' },
  caution: { icon: TriangleAlertIcon, tone: 'border-rule bg-muted/60' },
} as const

export function BeatSection({ id, beat, sources }: { id: string; beat: Beat; sources: Source[] }) {
  const t = useT()
  const Aside = beat.aside ? ASIDE_STYLE[beat.aside.kind].icon : null

  return (
    <section aria-labelledby={`${id}-heading`}>
      <SectionHeading id={id}>
        <span id={`${id}-heading`}>{beat.heading}</span>
      </SectionHeading>

      <Paragraphs items={beat.paragraphs} className="prose-story" />

      {beat.aside && Aside && (
        <aside
          className={cn(
            'my-7 rounded-[calc(var(--radius)+2px)] border-l-3 p-4 sm:p-5',
            ASIDE_STYLE[beat.aside.kind].tone,
          )}
        >
          <p className="text-ink flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide uppercase">
            <Aside className="size-3.5" />
            {beat.aside.label}
          </p>
          <p className="text-ink mt-2 text-[0.9375rem] leading-relaxed">
            <RichText text={beat.aside.body} />
          </p>
          {beat.aside.sourceId && (
            <p className="text-ink-soft mt-2 text-xs">
              {sources.find((s) => s.id === beat.aside!.sourceId)?.title ?? beat.aside.sourceId}
            </p>
          )}
        </aside>
      )}

      {beat.sourceIds && beat.sourceIds.length > 0 && (
        <p className="text-ink-soft mt-3 text-xs">
          {t.sourcesPrefix}{' '}
          {beat.sourceIds
            .map((sid) => sources.find((s) => s.id === sid))
            .filter(Boolean)
            .map((source) => `${source!.author.split(',')[0]!.split(' ').at(-1)} (${source!.year})`)
            .join(', ')}
        </p>
      )}
    </section>
  )
}

export function ConsequencesSection({ beat, sources }: { beat: ConsequenceBeat; sources: Source[] }) {
  const t = useT()
  const groups = [
    { title: t.shortTerm, items: beat.shortTerm, tone: 'text-ember' },
    { title: t.longTerm, items: beat.longTerm, tone: 'text-lapis' },
    { title: t.unexpected, items: beat.unexpected, tone: 'text-verdigris' },
  ]

  return (
    <section aria-labelledby="consequences-heading">
      <SectionHeading id="consequences">
        <span id="consequences-heading">{beat.heading}</span>
      </SectionHeading>

      <Paragraphs items={beat.paragraphs} className="prose-story" />

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="border-rule bg-paper-raised rounded-[var(--radius)] border p-4">
            <h3 className={cn('text-[0.75rem] font-semibold tracking-wide uppercase', group.tone)}>
              {group.title}
            </h3>
            <ul className="mt-3 space-y-3">
              {group.items.map((item, index) => (
                <li key={index} className="text-ink-soft text-[0.875rem] leading-relaxed">
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {beat.sourceIds && (
        <p className="text-ink-soft mt-3 text-xs">
          {t.sourcesPrefix}{' '}
          {beat.sourceIds
            .map((sid) => sources.find((s) => s.id === sid))
            .filter(Boolean)
            .map((source) => `${source!.author.split(',')[0]!.split(' ').at(-1)} (${source!.year})`)
            .join(', ')}
        </p>
      )}
    </section>
  )
}

/* ------------------------------------------------------ cause/effect -- */

export function CauseEffectFlow({ items }: { items: CauseEffect[] }) {
  const t = useT()
  return (
    <ol className="mt-5 space-y-2.5">
      {items.map((item, index) => (
        <li
          key={index}
          className="border-rule bg-paper-raised rounded-[var(--radius)] border p-4 transition-colors hover:border-ember/40"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-ink flex-1 text-[0.9375rem] font-medium">{item.cause}</span>
            <ArrowRightIcon className="text-ember size-4 shrink-0 rotate-90 sm:rotate-0" />
            <span className="text-ink flex-1 text-[0.9375rem] font-medium">{item.effect}</span>
          </div>
          <p className="text-ink-soft mt-2.5 text-[0.8125rem] leading-relaxed">
            <span className="text-ink-soft font-medium">{t.becauseWord} </span>
            {item.because}
          </p>
        </li>
      ))}
    </ol>
  )
}

/* -------------------------------------------------------------- myths -- */

export function MythPanel({ myths, sources }: { myths: Myth[]; sources: Source[] }) {
  const t = useT()
  return (
    <div className="border-rule bg-paper-raised mt-5 rounded-[calc(var(--radius)+2px)] border px-4 sm:px-5">
      <Accordion type="multiple">
        {myths.map((myth, index) => (
          <AccordionItem key={index} value={`myth-${index}`}>
            <AccordionTrigger>
              <span className="flex items-start gap-2.5">
                <XIcon className="text-destructive mt-0.5 size-4 shrink-0" />
                <span className="text-ink">{myth.myth}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-start gap-2.5">
                <CheckIcon className="text-verdigris mt-0.5 size-4 shrink-0" />
                <div>
                  <p className="text-ink">
                    <RichText text={myth.reality} />
                  </p>
                  {myth.whyItPersists && (
                    <p className="text-ink-soft mt-2 text-[0.875rem]">
                      <span className="font-medium">{t.whyMythSticks} </span>
                      {myth.whyItPersists}
                    </p>
                  )}
                  {myth.sourceIds && (
                    <p className="text-ink-soft mt-2 text-xs">
                      {myth.sourceIds
                        .map((sid) => sources.find((s) => s.id === sid)?.title)
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

/* ----------------------------------------------------- disagreements -- */

export function DisagreementPanel({ items, sources }: { items: Disagreement[]; sources: Source[] }) {
  const t = useT()
  return (
    <div className="mt-5 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-rule bg-paper-raised rounded-[calc(var(--radius)+2px)] border p-4 sm:p-5">
          <h3 className="font-display text-ink flex items-start gap-2.5 text-[1.0625rem] font-semibold">
            <ScaleIcon className="text-ink-soft mt-1 size-4 shrink-0" />
            {item.question}
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {item.positions.map((position, positionIndex) => (
              <div key={positionIndex} className="border-rule rounded-[var(--radius)] border border-dashed p-3.5">
                <p className="text-ink text-[0.875rem] leading-relaxed">{position.view}</p>
                <p className="text-ink-soft mt-2 text-xs">
                  {position.heldBy}
                  {position.sourceId && (
                    <span className="text-ink-soft">
                      {' · '}
                      {sources.find((s) => s.id === position.sourceId)?.title}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="border-ember/40 text-ink-soft mt-4 border-l-2 pl-3 text-[0.875rem] leading-relaxed">
            <span className="text-ink font-medium">{t.atlasStands} </span>
            {item.atlasPosition}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------ before/after -- */

export function BeforeAfterCards({ data }: { data: BeforeAfter }) {
  return (
    <div className="mt-5">
      <p className="text-ink-soft mb-3 text-[0.8125rem] tracking-wide uppercase">{data.label}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[data.before, data.after].map((side, index) => (
          <div
            key={side.title}
            className={cn(
              'rounded-[calc(var(--radius)+2px)] border p-4',
              index === 0 ? 'border-rule bg-muted/40' : 'border-ember/35 bg-ember-soft/40',
            )}
          >
            <h3 className="font-display text-ink text-[1rem] font-semibold">{side.title}</h3>
            <ul className="mt-3 space-y-2">
              {side.points.map((point) => (
                <li key={point} className="text-ink-soft flex gap-2 text-[0.875rem] leading-relaxed">
                  <span className={cn('mt-2 size-1 shrink-0 rounded-full', index === 0 ? 'bg-ink-soft/50' : 'bg-ember')} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ what if -- */

export function WhatIfPanel({ items }: { items: WhatIf[] }) {
  const t = useT()
  return (
    <div className="mt-5 space-y-3">
      <p className="text-ink-soft border-rule flex items-center gap-2 rounded-[var(--radius)] border border-dashed px-3.5 py-2.5 text-[0.8125rem]">
        <TriangleAlertIcon className="size-3.5 shrink-0" />
        {t.whatIfWarningBody}
      </p>

      {items.map((item, index) => (
        <div key={index} className="border-rule bg-paper-raised rounded-[calc(var(--radius)+2px)] border p-4 sm:p-5">
          <h3 className="font-display text-ink text-[1.0625rem] font-semibold">{item.question}</h3>
          <p className="text-ink-soft mt-2.5 text-[0.9375rem] leading-relaxed">
            <RichText text={item.reasoning} />
          </p>
          <p className="text-ink-soft border-rule mt-3 border-t pt-3 text-[0.875rem] leading-relaxed">
            <span className="text-ink font-medium">{t.whatHoldsBack} </span>
            {item.constraint}
          </p>
        </div>
      ))}
    </div>
  )
}

/* --------------------------------------------------------------- quiz -- */

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const question = questions[index]!

  if (done) {
    return (
      <div className="border-rule bg-paper-raised mt-5 rounded-[calc(var(--radius)+2px)] border p-6 text-center">
        <p className="font-display text-ink text-xl font-semibold">
          {t.quizScore(correct, questions.length)}
        </p>
        <p className="text-ink-soft mt-2 text-sm">
          {correct === questions.length ? t.quizAllRight : t.quizScoreNote}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => {
            setIndex(0)
            setPicked(null)
            setCorrect(0)
            setDone(false)
          }}
        >
          {t.quizAgain}
        </Button>
      </div>
    )
  }

  return (
    <div className="border-rule bg-paper-raised mt-5 rounded-[calc(var(--radius)+2px)] border p-4 sm:p-5">
      <p className="text-ink-soft text-xs tracking-wide uppercase">
        {t.quizQuestionOf(index + 1, questions.length)}
      </p>
      <h3 className="font-display text-ink mt-2 text-[1.0625rem] font-semibold">{question.question}</h3>

      <div className="mt-4 space-y-2">
        {question.options.map((option, optionIndex) => {
          const isAnswer = optionIndex === question.answerIndex
          const isPicked = picked === optionIndex
          return (
            <button
              key={option}
              disabled={picked !== null}
              onClick={() => {
                setPicked(optionIndex)
                if (isAnswer) setCorrect((value) => value + 1)
              }}
              className={cn(
                'w-full rounded-[var(--radius)] border px-3.5 py-2.5 text-left text-[0.875rem] transition-colors',
                picked === null && 'border-rule hover:border-ember/50 hover:bg-muted',
                picked !== null && isAnswer && 'border-verdigris/60 bg-verdigris/10 text-ink',
                picked !== null && isPicked && !isAnswer && 'border-destructive/50 bg-destructive/10 text-ink',
                picked !== null && !isPicked && !isAnswer && 'border-rule text-ink-soft',
              )}
            >
              {option}
            </button>
          )
        })}
      </div>

      {picked !== null && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <p className="text-ink-soft text-[0.875rem] leading-relaxed">{question.explains}</p>
          <Button
            size="sm"
            className="mt-3"
            onClick={() => {
              if (index + 1 >= questions.length) {
                setDone(true)
              } else {
                setIndex(index + 1)
                setPicked(null)
              }
            }}
          >
            {index + 1 >= questions.length ? t.quizSeeScore : t.quizNext}
          </Button>
        </motion.div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------ sources -- */

export function SourceList({ sources }: { sources: Source[] }) {
  const { lang, t } = useLang()
  const kindLabel = SOURCE_KIND_LABELS[lang]
  const primaryFirst = [...sources].sort(
    (a, b) => Number(b.kind === 'primary') - Number(a.kind === 'primary') || a.year - b.year,
  )

  return (
    <div className="mt-5">
      <ul className="space-y-3.5">
        {primaryFirst.map((source) => (
          <li key={source.id} className="border-rule border-l-2 pl-4">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <Badge variant={source.kind === 'primary' ? 'ember' : 'outline'}>{kindLabel[source.kind]}</Badge>
              <span className="text-ink text-[0.9375rem] font-medium">{source.title}</span>
            </div>
            <p className="text-ink-soft mt-1 text-[0.8125rem]">
              {source.author}, {source.year}
              {source.detail && ` · ${source.detail}`}
            </p>
            {source.note && <p className="text-ink-soft mt-1 text-[0.8125rem] leading-relaxed">{source.note}</p>}
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ember mt-1 inline-block text-[0.8125rem] hover:underline"
              >
                {t.openSource}
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="text-ink-soft border-rule mt-5 flex items-start gap-2 border-t pt-4 text-xs leading-relaxed">
        <BookOpenIcon className="mt-0.5 size-3.5 shrink-0" />
        {t.sourcesFooter}
      </p>
    </div>
  )
}
