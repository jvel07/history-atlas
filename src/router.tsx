import {
  Outlet,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
  Link,
} from '@tanstack/react-router'
import { SiteNav } from '@/components/SiteNav'
import { Home } from '@/routes/Home'

/**
 * Home loads eagerly; everything else is fetched on hover or on navigation
 * (`defaultPreload: 'intent'` below). A first visit should not pay for the quiz,
 * the graph renderer and the lens picker before it has shown a sentence.
 */
const StoryPage = lazyRouteComponent(() => import('@/routes/StoryPage'), 'StoryPage')
const Explore = lazyRouteComponent(() => import('@/routes/Explore'), 'Explore')
const Stories = lazyRouteComponent(() => import('@/routes/Stories'), 'Stories')
const About = lazyRouteComponent(() => import('@/routes/About'), 'About')

function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-rule text-ink-soft border-t px-4 py-8 text-center text-xs sm:px-6">
        <p>
          History Atlas — every claim traceable, every disagreement shown.{' '}
          <Link to="/about" className="hover:text-ember underline underline-offset-4">
            How it works
          </Link>
        </p>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-3xl font-semibold">Nothing here.</h1>
      <p className="text-ink-soft mt-3 leading-relaxed">
        Which is itself a small piece of history: the page you wanted either never existed or has
        not been written yet.
      </p>
      <Link
        to="/"
        className="bg-ember text-primary-foreground mt-6 inline-block rounded-[var(--radius)] px-5 py-2.5 text-sm font-medium"
      >
        Back to the start
      </Link>
    </div>
  )
}

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFound })

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home })

const storiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stories',
  component: Stories,
})

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/story/$slug',
  component: StoryPage,
  // The reel is the default. `?full` opts into the long article, and being a
  // real URL means someone can share the long version deliberately.
  //
  // Accept every spelling of "yes": the default search parser turns `?full=1`
  // into the number 1 and bare `?full` into an empty string, so a strict
  // comparison silently serves the reel to someone who asked for the article.
  validateSearch: (search: Record<string, unknown>): { full?: boolean } => {
    const raw = search.full
    const on = raw === true || raw === 1 || raw === '' || raw === 'true' || raw === '1'
    return on ? { full: true } : {}
  },
})

const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore',
  component: Explore,
  validateSearch: (search: Record<string, unknown>): { focus?: string } => ({
    focus: typeof search.focus === 'string' ? search.focus : undefined,
  }),
})

const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About })

const routeTree = rootRoute.addChildren([
  indexRoute,
  storiesRoute,
  storyRoute,
  exploreRoute,
  aboutRoute,
])

/**
 * Path routing normally, hash routing when the app is embedded somewhere whose
 * URL it does not control — a single-file build dropped on an arbitrary path.
 * Clean paths are worth keeping for the real site (shareable, indexable), so
 * this is opt-in at build time rather than the default.
 */
const embedded = import.meta.env.VITE_EMBED === '1'

export const router = createRouter({
  routeTree,
  ...(embedded ? { history: createHashHistory() } : {}),
  // Vite's BASE_URL carries the repo subpath on GitHub Pages and "/" elsewhere.
  basepath: embedded ? '/' : import.meta.env.BASE_URL,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
