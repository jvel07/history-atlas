import { Fragment, type ReactNode } from 'react'

/**
 * A deliberately tiny inline formatter: **bold** and *italic*, nothing else.
 *
 * Story text is authored in TypeScript, not markdown, so a full parser would be
 * a dependency bought for two features. Restricting the vocabulary also keeps
 * the prose plain — the writing guide asks for emphasis to be rare enough to
 * mean something.
 */
export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={index}>{part.slice(1, -1)}</em>
        }
        return <Fragment key={index}>{part}</Fragment>
      })}
    </>
  )
}

export function Paragraphs({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={className}>
      {items.map((paragraph, index) => (
        <p key={index}>
          <RichText text={paragraph} />
        </p>
      ))}
    </div>
  )
}
