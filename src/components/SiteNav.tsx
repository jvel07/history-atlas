import { Suspense, lazy, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { CompassIcon, SearchIcon } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useSearchHotkey } from '@/components/useSearchHotkey'
import { useT } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * The dialog pulls in Radix, the search index and the whole story corpus. None
 * of that should load before someone actually asks a question, so it arrives on
 * first open — which is also the first keystroke of ⌘K, i.e. imperceptible.
 */
const SearchDialog = lazy(() =>
  import('@/components/SearchDialog').then((module) => ({ default: module.SearchDialog })),
)

/** Routes are language-independent; only the words on them change. */
const LINKS = [
  { to: '/', key: 'navHome' },
  { to: '/stories', key: 'navStories' },
  { to: '/explore', key: 'navMap' },
  { to: '/about', key: 'navAbout' },
] as const

/**
 * The one nav bar, on every page. It imports nothing from the pages that render
 * it — the pages import it, so reaching back would be a module cycle.
 */
export function SiteNav() {
  const t = useT()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchMounted, setSearchMounted] = useState(false)

  function openSearch() {
    setSearchMounted(true)
    setSearchOpen(true)
  }

  useSearchHotkey(openSearch)

  return (
    <>
      <a
        href="#main"
        className="bg-ember text-primary-foreground sr-only rounded-md px-4 py-2 focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
      >
        {t.skipToContent}
      </a>

      <header className="border-rule bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-5xl items-center gap-1 px-4 sm:px-6" aria-label="Main">
          <Link to="/" className="mr-auto flex items-center gap-2 font-display text-[0.95rem] font-semibold">
            <CompassIcon className="text-ember size-[1.1rem]" />
            <span>{t.brand}</span>
          </Link>

          <ul className="mr-1 hidden items-center gap-0.5 sm:flex">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    'text-ink-soft hover:text-ink rounded-md px-3 py-1.5 text-sm transition-colors',
                  )}
                  activeProps={{ className: 'text-ink font-medium' }}
                  activeOptions={{ exact: link.to === '/' }}
                >
                  {t[link.key]}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={openSearch}
            onMouseEnter={() => setSearchMounted(true)}
            className="text-ink-soft hover:text-ink border-rule hover:border-ink-soft/40 flex items-center gap-2 rounded-full border py-1.5 pr-2 pl-3 text-sm transition-colors"
            aria-label={t.searchOpen}
          >
            <SearchIcon className="size-3.5" />
            <span className="hidden sm:inline">{t.searchPlaceholderShort}</span>
            <kbd className="bg-muted text-ink-soft hidden rounded px-1.5 py-0.5 font-mono text-[0.6875rem] sm:inline">
              ⌘K
            </kbd>
          </button>

          <LanguageToggle />
          <ThemeToggle />
        </nav>

        {/* Mobile links live under the bar rather than behind a menu button:
            four destinations do not justify a drawer. */}
        <ul
          data-nav-mobile
          className="border-rule scrollbar-slim flex items-center gap-1 overflow-x-auto border-t px-4 py-1.5 sm:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-ink-soft rounded-md px-2.5 py-1 text-[0.8125rem] whitespace-nowrap"
                activeProps={{ className: 'text-ink font-medium' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {t[link.key]}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {searchMounted && (
        <Suspense fallback={null}>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      )}
    </>
  )
}
