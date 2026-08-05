import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// `base` must match the repo name or GitHub Pages serves a blank page.
// Override with `BASE=/ npm run build` for a root-served host.
const base = process.env.BASE ?? '/history-atlas/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  build: {
    target: 'es2022',
    // SINGLE_FILE collapses every chunk into one so the whole app can be
    // inlined into a standalone .html with no network requests at all.
    rollupOptions: process.env.SINGLE_FILE === '1' ? {
      output: { inlineDynamicImports: true },
    } : {
      output: {
        // Motion and the story corpus are both large and both change on a
        // different cadence to the framework, so they get their own chunks:
        // adding a story should not invalidate React in everyone's cache.
        //
        // The corpus is split *per language* for the same reason, one level
        // down. Both are still loaded — `corpusFor` is synchronous, and making
        // it async would trade a real cost (a blank first paint on a site whose
        // entire product is text) for a saving the browser mostly amortises —
        // but they are fetched in parallel and, more usefully, editing a
        // Spanish story no longer invalidates the English chunk in anyone's
        // cache, and vice versa.
        manualChunks: (id) => {
          if (id.includes('/src/content/es/')) return 'content-es'
          if (id.includes('/src/content/stories/') || id.includes('/src/content/graph')) {
            return 'content-en'
          }
          if (/node_modules\/(react|react-dom|scheduler|@tanstack)\//.test(id)) return 'vendor'
          if (/node_modules\/(motion|framer-motion)/.test(id)) return 'motion'
          return undefined
        },
      },
    },
  },
})
