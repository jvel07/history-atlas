import { LANGS, LANG_NAME, LANG_SHORT, useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * Two buttons, both always visible.
 *
 * A single button that cycles languages is smaller, and it is the wrong shape:
 * a reader who cannot read the current language cannot read the label telling
 * them what the button does. Showing both, with the active one marked, means
 * the control is legible from either side of it.
 */
export function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div
      role="group"
      aria-label={t.language}
      className="border-rule flex items-center rounded-full border p-0.5"
    >
      {LANGS.map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          lang={option}
          aria-pressed={option === lang}
          title={LANG_NAME[option]}
          className={cn(
            'rounded-full px-2 py-0.5 font-mono text-[0.6875rem] tracking-wide transition-colors',
            option === lang
              ? 'bg-ember text-primary-foreground'
              : 'text-ink-soft hover:text-ink',
          )}
        >
          {LANG_SHORT[option]}
        </button>
      ))}
    </div>
  )
}
