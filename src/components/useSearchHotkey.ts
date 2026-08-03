import { useEffect } from 'react'

/**
 * ⌘K / Ctrl-K anywhere, and `/` when the reader is not already typing.
 *
 * Kept in its own module so the nav can bind the shortcut without importing the
 * dialog — the dialog is lazy, and a hotkey that has to load 100 kB before it
 * responds is not a hotkey.
 */
export function useSearchHotkey(onOpen: () => void) {
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      const typing =
        target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable

      if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || (event.key === '/' && !typing)) {
        event.preventDefault()
        onOpen()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onOpen])
}
