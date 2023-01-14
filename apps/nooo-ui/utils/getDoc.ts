import clsx from 'clsx'
import { ThemeType } from 'typings/theme'
import { WidgetBaseFrameworks } from 'typings/widgets'
import { getFrameScripts } from './getFrameScripts'

export const getDoc = ({
   theme = 'light',
   ...rest
}: {
   css: string
   html: string
   bodyCss?: string
   frameworks?: WidgetBaseFrameworks
   theme?: ThemeType
}) => {
   const srcDoc = /*html*/ `
<!DOCTYPE html>
<html class="${clsx({ dark: theme === 'dark' })}">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
         ${rest.css}
      </style>
      <style type="text/css">
         body {
            position: relative;
            width: 100%;
         
            ${rest.bodyCss ?? ''}
         }
      </style>
      ${rest.frameworks ? getFrameScripts(rest.frameworks).join('\n') : ''}
   </head>
   <body>
      ${rest.html}
   </body>
</html>
 
 `
   return srcDoc
}
