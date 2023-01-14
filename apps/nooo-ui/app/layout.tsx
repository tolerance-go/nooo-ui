import { CookiesProviderWrapper } from 'components/CookiesProviderWrapper'
import { SiteThemeContextProvider } from 'components/SiteThemeContext'
import { cookies } from 'next/headers'
import '../styles/globals.css'

export default function RootLayout(props: { children: React.ReactNode }) {
   const { children } = props
   const nextCookies = cookies()

   const theme = nextCookies.get('theme')?.value === 'light' ? 'light' : 'dark'

   return (
      <html className={theme}>
         <head></head>
         <body className='bg-white dark:bg-black transition'>
            <SiteThemeContextProvider defaultTheme={theme}>
               <CookiesProviderWrapper>{children}</CookiesProviderWrapper>
            </SiteThemeContextProvider>
         </body>
      </html>
   )
}
