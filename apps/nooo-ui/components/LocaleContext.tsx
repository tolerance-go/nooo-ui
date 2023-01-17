'use client'

import enDict from 'dictionaries/en.json'
import { DictionaryType } from 'get-dictionary'
import { Locale } from 'i18n-config'
import { createContext, PropsWithChildren, useContext } from 'react'

export const defaultLocale: Locale = 'en'

export const LocaleContext = createContext<{
   lang: Locale
   dictionary: DictionaryType
}>({
   lang: defaultLocale,
   dictionary: enDict,
})

export const LocaleContextProvider = ({
   dictionary,
   children,
   lang,
}: PropsWithChildren<{
   dictionary: DictionaryType
   lang: Locale
}>) => {
   return (
      <LocaleContext.Provider
         value={{
            dictionary,
            lang,
         }}
      >
         {children}
      </LocaleContext.Provider>
   )
}

export const useLocaleContext = () => {
   return useContext(LocaleContext)
}
