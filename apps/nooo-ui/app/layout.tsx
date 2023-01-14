import { CookiesProviderWrapper } from 'components/CookiesProviderWrapper'
import { cookies } from 'next/headers'
import '../styles/globals.css'

export default function RootLayout(props: { children: React.ReactNode }) {
   const { children } = props
   const nextCookies = cookies()

   return (
      <html
         className={
            nextCookies.get('theme')?.value === 'light' ? 'light' : 'dark'
         }
      >
         <head></head>
         <body>
            <CookiesProviderWrapper>{children}</CookiesProviderWrapper>
         </body>
      </html>
   )
}
