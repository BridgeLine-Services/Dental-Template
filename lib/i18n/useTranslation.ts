'use client'
import { useState, useEffect } from 'react'
import { defaultLocale, type Locale } from './config'
import { translations } from './translations'

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale
    if (stored && ['en', 'es', 'zh', 'vi'].includes(stored)) {
      setLocale(stored)
    }
  }, [])

  const t = (key: string): string => {
    return translations[locale]?.[key] ?? translations.en[key] ?? key
  }

  return { t, locale, setLocale }
}
