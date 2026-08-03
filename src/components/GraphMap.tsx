import { useMemo } from 'react'
import { motion } from 'motion/react'
import type { GraphNode, NodeKind } from '@/content/types'
import { RELATION_PHRASE } from '@/content/types'
import { connectionsFor, nodeById } from '@/content/graph'
import { cn } from '@/lib/utils'

/**
 * The map, drawn as an *ego network* rather than a whole-graph hairball.
 *
 * A force-directed picture of every node looks impressive and answers no
 * question. What a reader actually wants is "I am here — what touches this, and
 * why?", so the view centres one node, rings its direct connections around it,
 * and moves the centre when you click. Every edge is labelled with its relation,
 * because an unlabelled line means "related somehow", which is not information.
 *
 * Layout is deterministic — no simulation, no random seeds, no reflow on
 * re-render. Positions come from the neighbour count alone.
 */

const WIDTH = 760
/** Two heights: a node with few links should not sit in a field of nothing. */
const TALL = 520
const SHORT = 400
const CX = WIDTH / 2

const KIND_COLOR: Record<NodeKind, string> = {
  person: 'var(--color-ember)',
  empire: 'var(--color-lapis)',
  organisation: 'var(--color-lapis)',
  event: 'var(--color-ember)',
  idea: 'var(--color-verdigris)',
  technology: 'var(--color-verdigris)',
  trade: 'var(--color-ember)',
  place: 'var(--color-ink-soft)',
  religion: 'var(--color-lapis)',
  discovery: 'var(--color-verdigris)',
}

interface Placed {
  node: GraphNode
  x: number
  y: number
  label: string
  relation: string
  outgoing: boolean
}

function ring(cy: number, count: number, index: number, radius: number) {
  // Start at the top and go clockwise; offset even counts so nothing sits on the
  // vertical axis directly under the centre label.
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2 + (count % 2 === 0 ? 0.12 : 0)
  return { x: CX + Math.cos(angle) * radius * 1.35, y: cy + Math.sin(angle) * radius }
}

export function GraphMap({ focusId, onFocus }: { focusId: string; onFocus: (id: string) => void }) {
  const focus = nodeById(focusId)

  const { height, cy, placed } = useMemo(() => {
    const connections = connectionsFor(focusId)
    const inner = connections.slice(0, 8)
    const outer = connections.slice(8, 16)
    const height = outer.length > 0 ? TALL : SHORT
    const cy = height / 2
    const innerRadius = outer.length > 0 ? 150 : 128

    const items: Placed[] = [
      ...inner.map((connection, index) => ({
        node: connection.node,
        ...ring(cy, Math.max(inner.length, 3), index, innerRadius),
        label: connection.node.label,
        relation: RELATION_PHRASE[connection.edge.relation],
        outgoing: connection.direction === 'out',
      })),
      ...outer.map((connection, index) => ({
        node: connection.node,
        ...ring(cy, Math.max(outer.length, 3), index + 0.5, 232),
        label: connection.node.label,
        relation: RELATION_PHRASE[connection.edge.relation],
        outgoing: connection.direction === 'out',
      })),
    ]

    return { height, cy, placed: items }
  }, [focusId])

  const CY = cy

  return (
    <div className="border-rule bg-paper-raised overflow-hidden rounded-[calc(var(--radius)+2px)] border">
      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Connections around ${focus?.label ?? 'the selected topic'}: ${placed.length} links`}
      >
        {placed.map((item) => (
          <g key={`edge-${item.node.id}`}>
            <line
              x1={CX}
              y1={CY}
              x2={item.x}
              y2={item.y}
              stroke="var(--color-rule)"
              strokeWidth={1.25}
            />
            <text
              x={(CX + item.x) / 2}
              y={(CY + item.y) / 2 - 4}
              textAnchor="middle"
              className="fill-[var(--color-ink-soft)] font-sans text-[9px]"

            >
              {item.outgoing ? item.relation : `↤ ${item.relation}`}
            </text>
          </g>
        ))}

        {placed.map((item, index) => (
          <motion.g
            key={item.node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: index * 0.015 }}
            className="cursor-pointer"
            onClick={() => onFocus(item.node.id)}
            role="button"
            tabIndex={0}
            aria-label={`Focus ${item.node.label}`}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') onFocus(item.node.id)
            }}
          >
            {/* A <g> has no fill, so without this the hit area is only the 8px
                dot and the glyphs of the label — a click between them lands on
                the SVG background. This also gets the touch target to ~44px. */}
            <circle cx={item.x} cy={item.y} r={22} fill="transparent" />
            <circle
              cx={item.x}
              cy={item.y}
              r={item.node.story ? 8 : 5.5}
              fill={item.node.story ? KIND_COLOR[item.node.kind] : 'var(--color-paper)'}
              stroke={KIND_COLOR[item.node.kind]}
              strokeWidth={2}
              pointerEvents="none"
            />
            <text
              x={item.x}
              y={item.y + (item.y > CY ? 24 : -14)}
              textAnchor="middle"
              className="fill-[var(--color-ink)] font-sans text-[11px] font-medium"
            >
              {item.label.length > 26 ? `${item.label.slice(0, 25)}…` : item.label}
            </text>
          </motion.g>
        ))}

        <circle cx={CX} cy={CY} r={13} fill="var(--color-ember)" />
        <circle cx={CX} cy={CY} r={20} fill="none" stroke="var(--color-ember)" strokeWidth={1} opacity={0.35} />
        {/* The centre is where the reader is. Leaving it as an unlabelled dot
            makes the whole diagram a puzzle. */}
        <text
          x={CX}
          y={CY + 38}
          textAnchor="middle"
          className="fill-[var(--color-ink)] font-sans text-[13px] font-semibold"
        >
          {focus?.label}
        </text>
      </svg>

      <p className="text-ink-soft border-rule border-t px-4 py-2.5 text-xs">
        Click any node to move the centre. Filled circles have a story behind them; outlines are on
        the map but not yet written.
      </p>
    </div>
  )
}

export function NodeChip({
  node,
  active,
  onClick,
}: {
  node: GraphNode
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1.5 text-[0.8125rem] transition-colors',
        active
          ? 'bg-ember text-primary-foreground border-transparent'
          : 'border-rule text-ink-soft hover:text-ink hover:border-ink-soft/40',
      )}
    >
      {node.label}
      {!node.story && <span className="ml-1.5 opacity-60">·</span>}
    </button>
  )
}
