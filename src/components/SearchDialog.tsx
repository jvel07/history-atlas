import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { CornerDownLeftIcon, SearchIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { searchProvider, type SearchResult } from '@/lib/search'
import { cn } from '@/lib/utils'

const EXAMPLES = [
  'Why did Britain sell opium?',
  'Who invented algorithms?',
  'What happened after the Islamic Golden Age?',
  'Where does the word algebra come from?',
]

const KIND_LABEL: Record<SearchResult['kind'], string> = {
  story: 'Story',
  section: 'In a story',
  node: 'On the map',
  fact: 'Fact',
}

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
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
    void searchProvider.search(query, 8).then((found) => {
      if (!cancelled) {
        setResults(found)
        setActive(0)
      }
    })
    return () => {
      cancelled = true
    }
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      // Radix moves focus to the content; wait a frame to claim it for the input.
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  const placeholder = useMemo(() => EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)]!, [open])

  function go(result: SearchResult) {
    onOpenChange(false)
    const [path, hash] = result.href.split('#')
    void navigate({ to: path!, hash })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={false} className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Search the atlas</DialogTitle>
        <DialogDescription className="sr-only">
          Ask a question in your own words. Results cover stories, sections, map entries and facts.
        </DialogDescription>

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
            aria-label="Search the atlas"
            className="text-ink placeholder:text-ink-soft h-14 w-full bg-transparent text-[0.95rem] outline-none"
          />
        </div>

        <div className="scrollbar-slim max-h-[55vh] overflow-y-auto p-2">
          {query.trim().length < 2 ? (
            <div className="px-3 py-4">
              <p className="text-ink-soft text-xs tracking-wide uppercase">Try asking</p>
              <ul className="mt-2 space-y-1.5">
                {EXAMPLES.map((example) => (
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
              <p className="text-ink font-medium">Nothing here yet.</p>
              <p className="text-ink-soft mt-1 leading-relaxed">
                The atlas is small on purpose — every story is sourced and reviewed before it goes
                up. Try the map to see what is already connected.
              </p>
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
                          {KIND_LABEL[result.kind]}
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
            Keyword search with synonym expansion. Semantic search runs once the vector backend is
            configured — see docs/ARCHITECTURE.md.
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
