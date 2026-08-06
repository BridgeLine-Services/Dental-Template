'use client'
import { useState, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import { locales, localeNames, type Locale } from '@/lib/i18n/config'

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState<Locale>('en')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale
    if (stored && locales.includes(stored)) {
      setCurrent(stored)
    }
  }, [])

  const switchTo = (locale: Locale) => {
    setCurrent(locale)
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
    setOpen(false)
    // Reload to apply translations
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-brand-600 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeNames[current]}</span>
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50"
          role="menu"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between"
              role="menuitem"
            >
              <span>{localeNames[locale]}</span>
              {current === locale && <Check className="w-4 h-4 text-brand-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
