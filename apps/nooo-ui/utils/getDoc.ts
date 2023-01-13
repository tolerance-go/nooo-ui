import clsx from 'clsx'
import { WidgetBaseFrameworks } from 'typings/widgets'

const getFrameScripts = (frameworks: WidgetBaseFrameworks) => {
   const scripts: string[] = []
   if (frameworks.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/kutty@${frameworks.kutty}/dist/kutty.min.js"></script>`,
      )
   }

   if (frameworks.alpine && !frameworks.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/alpinejs@${frameworks.alpine}/dist/cdn.min.js"></script>`,
      )
   }

   return scripts
}

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
