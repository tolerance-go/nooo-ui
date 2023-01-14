'use client'

import {
   createContext,
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   useContext,
   useState,
} from 'react'
import { ThemeType } from 'typings/theme'

export const defaultTheme: ThemeType = 'light'

export const SiteThemeContext = createContext<{
   theme: ThemeType
   setTheme: Dispatch<SetStateAction<ThemeType>>
}>({
   theme: defaultTheme,
   setTheme: () => {},
})

export const SiteThemeContextProvider = (
   props: PropsWithChildren<{
      defaultTheme: ThemeType
   }>,
) => {
   const [theme, setTheme] = useState<ThemeType>(props.defaultTheme)

   return (
      <SiteThemeContext.Provider
         value={{
            theme,
            setTheme,
         }}
      >
         {props.children}
      </SiteThemeContext.Provider>
   )
}

export const useSiteThemeContext = () => {
   return useContext(SiteThemeContext)
}
