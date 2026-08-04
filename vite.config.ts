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
        manualChunks: {
          vendor: ['react', 'react-dom', '@tanstack/react-router', '@tanstack/react-query'],
          motion: ['motion'],
        },
      },
    },
  },
})
