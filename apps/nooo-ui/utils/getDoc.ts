import clsx from 'clsx'
import { ThemeType } from 'typings/theme'
import { WidgetData } from 'typings/widgets'
import { getScriptsStr } from './getScriptsStr'

export const getDoc = ({
   theme = 'light',
   bodyCss,
   data,
}: {
   bodyCss?: string
   theme?: ThemeType
   data: WidgetData
}) => {
   const scriptsStr = getScriptsStr(data)

   const srcDoc = /*html*/ `
<!DOCTYPE html>
<html class="${clsx({ dark: theme === 'dark' })}">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
         ${data.css}
      </style>
      <style type="text/css">
         body {
            position: relative;
            width: 100%;
         
            ${bodyCss ?? ''}
         }
      </style>
      ${scriptsStr}
   </head>
   <body>
      ${data.html}
   </body>
</html>
 
 `
   return srcDoc
}
