import { useState } from 'react'
import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowRightIcon, RouteIcon } from 'lucide-react'
import { NODES, connectionsFor, edgeBetween, nodeById, pathBetween } from '@/content/graph'
import { NODE_KIND_LABEL, RELATION_PHRASE, type NodeKind } from '@/content/types'
import { GraphMap } from '@/components/GraphMap'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  const { focus } = useSearch({ from: '/explore' })
  const navigate = useNavigate()
  const focusId = focus && nodeById(focus) ? focus : 'opium-wars'
  const node = nodeById(focusId)!

  const [pathFrom, setPathFrom] = useState('algebra')
  const [pathTo, setPathTo] = useState('opium-wars')
  const [path, setPath] = useState<ReturnType<typeof pathBetween>>(null)
  const [searched, setSearched] = useState(false)

  function setFocus(id: string) {
    void navigate({ to: '/explore', search: { focus: id } })
  }

  const connections = connectionsFor(focusId)

  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">The map</h1>
      <p className="text-ink-soft mt-3 max-w-2xl leading-relaxed">
        Everything is connected to something. This shows what touches what, and — more usefully —
        why. Click a node to move the centre.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <GraphMap focusId={focusId} onFocus={setFocus} />
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="border-rule bg-paper-raised rounded-[calc(var(--radius)+2px)] border p-5">
            <Badge variant="ember">{NODE_KIND_LABEL[node.kind]}</Badge>
            <h2 className="font-display mt-3 text-xl leading-snug font-semibold">{node.label}</h2>
            {node.years && <p className="text-ink-soft mt-1 font-mono text-xs">{formatSpan(node.years)}</p>}
            <p className="text-ink-soft mt-3 text-[0.9375rem] leading-relaxed">{node.blurb}</p>

            {node.story ? (
              <Button className="mt-4 w-full" asChild>
                <Link to="/story/$slug" params={{ slug: node.story }}>
                  Read the story
                  <ArrowRightIcon />
                </Link>
              </Button>
            ) : (
              <p className="text-ink-soft border-rule mt-4 border-t pt-3 text-xs leading-relaxed">
                No story here yet. The atlas publishes a topic only once it is sourced and checked, so
                the map runs ahead of the writing.
              </p>
            )}
          </div>

          <div className="border-rule bg-paper-raised mt-4 rounded-[calc(var(--radius)+2px)] border p-5">
            <h3 className="text-ink flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide uppercase">
              <RouteIcon className="size-3.5" />
              How are two things connected?
            </h3>
            <p className="text-ink-soft mt-2 text-xs leading-relaxed">
              Pick any two. The shortest chain between them is often the surprise.
            </p>

            <div className="mt-3 space-y-2">
              <select
                value={pathFrom}
                onChange={(event) => setPathFrom(event.target.value)}
                aria-label="From"
                className="border-rule bg-paper text-ink h-9 w-full rounded-[var(--radius)] border px-2.5 text-[0.8125rem]"
              >
                {NODES.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={pathTo}
                onChange={(event) => setPathTo(event.target.value)}
                aria-label="To"
                className="border-rule bg-paper text-ink h-9 w-full rounded-[var(--radius)] border px-2.5 text-[0.8125rem]"
              >
                {NODES.map((option) => (
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
                  setPath(pathBetween(pathFrom, pathTo))
                  setSearched(true)
                }}
              >
                Find the chain
              </Button>
            </div>

            {searched && (
              <div className="mt-4">
                {path && path.length > 1 ? (
                  <ol className="space-y-1.5">
                    {path.map((step, index) => {
                      const previous = index > 0 ? path[index - 1]! : null
                      const edge = previous ? edgeBetween(previous.id, step.id) : undefined
                      return (
                        <li key={step.id}>
                          {edge && (
                            <p className="text-ink-soft border-rule ml-1.5 border-l pl-3 text-[0.6875rem] italic">
                              {RELATION_PHRASE[edge.relation]}
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
                  <p className="text-ink-soft text-xs leading-relaxed">
                    Nothing links those two yet. That is a gap in the map, not a claim about history.
                  </p>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">
          Everything touching {node.label}
          <span className="text-ink-soft ml-2 text-sm font-normal">{connections.length} links</span>
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
                    ? `${node.label} ${RELATION_PHRASE[edge.relation]} →`
                    : `← ${other.label} ${RELATION_PHRASE[edge.relation]} ${node.label}`}
                </p>
                <p className="text-ink group-hover:text-ember mt-1 font-medium transition-colors">
                  {other.label}
                </p>
                <p className="text-ink-soft mt-1 text-[0.8125rem] leading-relaxed">{edge.note}</p>
                {edge.confidence === 'contested' && (
                  <Badge variant="contested" className="mt-2">
                    contested link
                  </Badge>
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">Everything on the map</h2>
        <div className="mt-5 space-y-5">
          {KIND_ORDER.map((kind) => {
            const group = NODES.filter((n) => n.kind === kind)
            if (group.length === 0) return null
            return (
              <div key={kind}>
                <h3 className="text-ink-soft text-xs tracking-wide uppercase">{NODE_KIND_LABEL[kind]}</h3>
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
        <p className="text-ink-soft mt-5 text-xs">
          A dot marks a topic with a story written behind it.
        </p>
      </section>
    </div>
  )
}
