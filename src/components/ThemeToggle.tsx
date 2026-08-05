import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n'

const KEY = 'history-atlas-theme'

export function ThemeToggle() {
  const t = useT()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light')
    } catch {
      // Private browsing. The toggle still works for this session.
    }
  }, [dark])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? t.themeToLight : t.themeToDark}
      title={dark ? t.themeLight : t.themeDark}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
