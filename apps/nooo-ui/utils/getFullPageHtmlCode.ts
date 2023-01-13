import { WidgetData } from 'typings/widgets'
import { getFrameScripts } from './getFrameScripts'

export const getFullPageHtmlCode = (data: WidgetData, inline?: boolean) => {
   if (inline) {
      return /*html*/ `
<style type="text/css">
  ${data.css}
</style>
${data.meta.frameworks ? getFrameScripts(data.meta.frameworks).join('\n') : ''}
${data.html}
     `
   }

   return /*html*/ `<!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>tailwind-example-full-page</title>

       <style type="text/css">
            ${data.css}
        </style>
         ${
            data.meta.frameworks
               ? getFrameScripts(data.meta.frameworks).join('\n')
               : ''
         }
   </head>
   <body>
       ${data.html}
   </body>
   </html>
`
}
