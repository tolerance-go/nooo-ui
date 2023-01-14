'use client'

import {
   createContext,
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   useContext,
   useState,
} from 'react'

export type ThemeType = 'light' | 'dark'

export const defaultTheme: ThemeType = 'light'

export const ThemeContext = createContext<{
   theme: ThemeType
   setTheme: Dispatch<SetStateAction<ThemeType>>
}>({
   theme: defaultTheme,
   setTheme: () => {},
})

export const ThemeContextProvider = (props: PropsWithChildren) => {
   const [theme, setTheme] = useState<ThemeType>(defaultTheme)

   return (
      <ThemeContext.Provider
         value={{
            theme,
            setTheme,
         }}
      >
         {props.children}
      </ThemeContext.Provider>
   )
}

export const useThemeContext = () => {
   return useContext(ThemeContext)
}
