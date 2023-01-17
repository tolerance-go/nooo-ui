import 'server-only'
import enData from './dictionaries/en.json'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
   en: () => import('./dictionaries/en.json').then((module) => module.default),
   'zh-CN': () =>
      import('./dictionaries/zh-CN.json').then((module) => module.default),
}

export type DictionaryType = typeof enData

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
