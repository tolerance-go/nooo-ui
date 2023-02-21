import { CookiesProviderWrapper } from 'components/CookiesProviderWrapper'
import { LocaleContextProvider } from 'components/LocaleContext'
import { SiteThemeContextProvider } from 'components/SiteThemeContext'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import { cookies } from 'next/headers'

import '../../styles/globals.css'

export default async function RootLayout({
   children,
   params,
}: {
   children: React.ReactNode
   params: { lang: Locale }
}) {
   const nextCookies = cookies()

   const theme = nextCookies.get('theme')?.value === 'dark' ? 'dark' : 'light'

   const dictionary = await getDictionary(params.lang)

   return (
      <html className={theme} lang={params.lang}>
         <head></head>
         <body className='bg-white transition dark:bg-black'>
            <LocaleContextProvider lang={params.lang} dictionary={dictionary}>
               <SiteThemeContextProvider defaultTheme={theme}>
                  <CookiesProviderWrapper>{children}</CookiesProviderWrapper>
               </SiteThemeContextProvider>
            </LocaleContextProvider>
         </body>
      </html>
   )
}
