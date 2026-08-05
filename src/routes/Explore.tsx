import { useState } from 'react'
import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowRightIcon, RouteIcon } from 'lucide-react'
import { useCorpus } from '@/content/useCorpus'
import { NODE_KIND_LABELS, RELATION_PHRASES } from '@/content/labels'
import type { NodeKind } from '@/content/types'
import { GraphMap } from '@/components/GraphMap'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { formatSpan } from '@/lib/utils'

const KIND_ORDER: NodeKind[] = [
  'event',
  'person',
  'empire',
  'organisation',
  'idea',
  'technology',
  'trade',
  'place',
  'religion',
  'discovery',
]

export function Explore() {
  const { lang, t } = useLang()
  const { graph } = useCorpus()
  const kindLabel = NODE_KIND_LABELS[lang]
  const relation = RELATION_PHRASES[lang]
  const { focus } = useSearch({ from: '/explore' })
  const navigate = useNavigate()
  const focusId = focus && graph.nodeById(focus) ? focus : 'opium-wars'
  const node = graph.nodeById(focusId)!

  const [pathFrom, setPathFrom] = useState('algebra')
  const [pathTo, setPathTo] = useState('opium-wars')
  const [path, setPath] = useState<ReturnType<typeof graph.pathBetween>>(null)
  const [searched, setSearched] = useState(false)

  function setFocus(id: string) {
    void navigate({ to: '/explore', search: { focus: id } })
  }

  const connections = graph.connectionsFor(focusId)

  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.mapTitle}
      </h1>
      <p className="text-ink-soft mt-3 max-w-2xl leading-relaxed">{t.mapStandfirst}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <GraphMap focusId={focusId} onFocus={setFocus} />
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="border-rule bg-paper-raised rounded-[calc(var(--radius)+2px)] border p-5">
            <Badge variant="ember">{kindLabel[node.kind]}</Badge>
            <h2 className="font-display mt-3 text-xl leading-snug font-semibold">{node.label}</h2>
            {node.years && (
              <p className="text-ink-soft mt-1 font-mono text-xs">{formatSpan(node.years, lang)}</p>
            )}
            <p className="text-ink-soft mt-3 text-[0.9375rem] leading-relaxed">{node.blurb}</p>

            {node.story ? (
              <Button className="mt-4 w-full" asChild>
                <Link to="/story/$slug" params={{ slug: node.story }}>
                  {t.mapReadStory}
                  <ArrowRightIcon />
                </Link>
              </Button>
            ) : (
              <p className="text-ink-soft border-rule mt-4 border-t pt-3 text-xs leading-relaxed">
                {t.mapNoStory}
              </p>
            )}
          </div>

          <div className="border-rule bg-paper-raised mt-4 rounded-[calc(var(--radius)+2px)] border p-5">
            <h3 className="text-ink flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide uppercase">
              <RouteIcon className="size-3.5" />
              {t.mapConnectTitle}
            </h3>
            <p className="text-ink-soft mt-2 text-xs leading-relaxed">{t.mapConnectBody}</p>

            <div className="mt-3 space-y-2">
              <select
                value={pathFrom}
                onChange={(event) => setPathFrom(event.target.value)}
                aria-label={t.mapFrom}
                className="border-rule bg-paper text-ink h-9 w-full rounded-[var(--radius)] border px-2.5 text-[0.8125rem]"
              >
                {graph.nodes.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={pathTo}
                onChange={(event) => setPathTo(event.target.value)}
                aria-label={t.mapTo}
                className="border-rule bg-paper text-ink h-9 w-full rounded-[var(--radius)] border px-2.5 text-[0.8125rem]"
              >
                {graph.nodes.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  setPath(graph.pathBetween(pathFrom, pathTo))
                  setSearched(true)
                }}
              >
                {t.mapFindChain}
              </Button>
            </div>

            {searched && (
              <div className="mt-4">
                {path && path.length > 1 ? (
                  <ol className="space-y-1.5">
                    {path.map((step, index) => {
                      const previous = index > 0 ? path[index - 1]! : null
                      const edge = previous ? graph.edgeBetween(previous.id, step.id) : undefined
                      return (
                        <li key={step.id}>
                          {edge && (
                            <p className="text-ink-soft border-rule ml-1.5 border-l pl-3 text-[0.6875rem] italic">
                              {relation[edge.relation]}
                            </p>
                          )}
                          <button
                            onClick={() => setFocus(step.id)}
                            className="text-ink hover:text-ember text-left text-[0.8125rem] font-medium transition-colors"
                          >
                            {step.label}
                          </button>
                        </li>
                      )
                    })}
                  </ol>
                ) : (
                  <p className="text-ink-soft text-xs leading-relaxed">{t.mapNoChain}</p>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">
          {t.mapTouching(node.label)}
          <span className="text-ink-soft ml-2 text-sm font-normal">
            {t.mapLinks(connections.length)}
          </span>
        </h2>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {connections.map(({ edge, node: other, direction }) => (
            <li key={`${edge.from}-${edge.to}`}>
              <button
                onClick={() => setFocus(other.id)}
                className="group border-rule bg-paper-raised hover:border-ember/45 w-full rounded-[var(--radius)] border p-3.5 text-left transition-colors"
              >
                <p className="text-ink-soft text-[0.6875rem] tracking-wide uppercase">
                  {direction === 'out'
                    ? `${node.label} ${relation[edge.relation]} →`
                    : `← ${other.label} ${relation[edge.relation]} ${node.label}`}
                </p>
                <p className="text-ink group-hover:text-ember mt-1 font-medium transition-colors">
                  {other.label}
                </p>
                <p className="text-ink-soft mt-1 text-[0.8125rem] leading-relaxed">{edge.note}</p>
                {edge.confidence === 'contested' && (
                  <Badge variant="contested" className="mt-2">
                    {t.mapContested}
                  </Badge>
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">{t.mapEverything}</h2>
        <div className="mt-5 space-y-5">
          {KIND_ORDER.map((kind) => {
            const group = graph.nodes.filter((n) => n.kind === kind)
            if (group.length === 0) return null
            return (
              <div key={kind}>
                <h3 className="text-ink-soft text-xs tracking-wide uppercase">{kindLabel[kind]}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFocus(option.id)}
                      title={option.blurb}
                      className={
                        option.id === focusId
                          ? 'bg-ember text-primary-foreground rounded-full border border-transparent px-3 py-1.5 text-[0.8125rem]'
                          : 'border-rule text-ink-soft hover:text-ink hover:border-ember/40 rounded-full border px-3 py-1.5 text-[0.8125rem] transition-colors'
                      }
                    >
                      {option.label}
                      {option.story && <span className="text-ember ml-1.5">•</span>}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-ink-soft mt-5 text-xs">{t.mapDotNote}</p>
      </section>
    </div>
  )
}
