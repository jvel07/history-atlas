import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { CornerDownLeftIcon, SearchIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { searchProvider, type SearchResult } from '@/lib/search'
import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { lang, t } = useLang()
  const examples = t.searchExamples
  const kindLabel: Record<SearchResult['kind'], string> = {
    story: t.searchKindStory,
    section: t.searchKindSection,
    node: t.searchKindNode,
    fact: t.searchKindFact,
  }
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [active, setActive] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let cancelled = false
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    void searchProvider.search(query, lang, 8).then((found) => {
      if (!cancelled) {
        setResults(found)
        setActive(0)
      }
    })
    return () => {
      cancelled = true
    }
  }, [query, lang])

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      // Radix moves focus to the content; wait a frame to claim it for the input.
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  // eslint-disable-next-line react-hooks/exhaustive-deps -- a new example per opening is the point
  const placeholder = useMemo(() => examples[Math.floor(Math.random() * examples.length)]!, [open, examples])

  function go(result: SearchResult) {
    onOpenChange(false)
    const [path, hash] = result.href.split('#')
    void navigate({ to: path!, hash })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={false} className="overflow-hidden p-0">
        <DialogTitle className="sr-only">{t.searchOpen}</DialogTitle>
        <DialogDescription className="sr-only">{t.searchDescription}</DialogDescription>

        <div className="border-rule flex items-center gap-3 border-b px-4">
          <SearchIcon className="text-ink-soft size-4 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault()
                setActive((i) => Math.min(i + 1, results.length - 1))
              } else if (event.key === 'ArrowUp') {
                event.preventDefault()
                setActive((i) => Math.max(i - 1, 0))
              } else if (event.key === 'Enter' && results[active]) {
                event.preventDefault()
                go(results[active]!)
              }
            }}
            placeholder={placeholder}
            aria-label={t.searchOpen}
            className="text-ink placeholder:text-ink-soft h-14 w-full bg-transparent text-[0.95rem] outline-none"
          />
        </div>

        <div className="scrollbar-slim max-h-[55vh] overflow-y-auto p-2">
          {query.trim().length < 2 ? (
            <div className="px-3 py-4">
              <p className="text-ink-soft text-xs tracking-wide uppercase">{t.searchTryAsking}</p>
              <ul className="mt-2 space-y-1.5">
                {examples.map((example) => (
                  <li key={example}>
                    <button
                      onClick={() => setQuery(example)}
                      className="text-ink-soft hover:text-ember w-full text-left text-sm transition-colors"
                    >
                      {example}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="px-3 py-6 text-sm">
              <p className="text-ink font-medium">{t.searchEmptyTitle}</p>
              <p className="text-ink-soft mt-1 leading-relaxed">{t.searchEmptyBody}</p>
            </div>
          ) : (
            <ul>
              {results.map((result, index) => (
                <li key={`${result.href}-${index}`}>
                  <button
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(result)}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-[var(--radius)] px-3 py-2.5 text-left transition-colors',
                      index === active ? 'bg-muted' : 'hover:bg-muted/60',
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-ink truncate text-sm font-medium">{result.title}</span>
                        <Badge variant="outline" className="shrink-0 text-[0.6875rem]">
                          {kindLabel[result.kind]}
                        </Badge>
                      </div>
                      <p className="text-ink-soft mt-0.5 line-clamp-2 text-[0.8125rem] leading-relaxed">
                        {result.snippet}
                      </p>
                      <p className="text-ink-soft mt-1 text-[0.6875rem]">{result.context}</p>
                    </div>
                    {index === active && <CornerDownLeftIcon className="text-ink-soft mt-1 size-3.5 shrink-0" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchProvider.id === 'local' && query.trim().length >= 2 && (
          <p className="text-ink-soft border-rule border-t px-4 py-2 text-[0.6875rem]">
            {t.searchLocalNote}
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
