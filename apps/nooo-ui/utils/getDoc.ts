import clsx from 'clsx'
import { WidgetBaseFrameworks } from 'typings/widgets'
import { getFrameScripts } from './getFrameScripts'

export const getDoc = (options: {
   css: string
   html: string
   bodyCss?: string
   center?: boolean
   frameworks?: WidgetBaseFrameworks
}) => {
   const srcDoc = /*html*/ `
 <head>
   <style type="text/css">
      ${options.css}
   </style>
   <style type="text/css">
      body {
         ${options.bodyCss ?? ''}
      }
   </style>
   ${options.frameworks ? getFrameScripts(options.frameworks).join('\n') : ''}
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
