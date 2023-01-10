import clsx from 'clsx'

export const getDoc = (options: {
   css: string
   html: string
   bodyCss?: string
   center?: boolean
}) => {
   const srcDoc = /*html*/ `
 <head>
   <style type="text/css">
      ${options.css}
   </style>
   <style type="text/css">
      body {
         ${options.bodyCss}
      }
   </style>
 </head>
 <body class="${clsx(
    'relative w-full',
    options.center ? 'flex justify-center' : undefined,
 )}">
   ${options.html}
 </body
 `
   return srcDoc
}
