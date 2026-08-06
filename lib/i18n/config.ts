export const locales = ['en', 'es', 'zh', 'vi'] as const
export type Locale = typeof locales[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  vi: 'Tiếng Việt',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  zh: '🇨🇳',
  vi: '🇻🇳',
}

export const defaultLocale: Locale = 'en'
