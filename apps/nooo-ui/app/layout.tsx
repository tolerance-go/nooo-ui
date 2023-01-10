import '../styles/globals.css'

export default function RootLayout(props: { children: React.ReactNode }) {
   const { children } = props

   return (
      <html>
         <head></head>
         <body>{children}</body>
      </html>
   )
}
