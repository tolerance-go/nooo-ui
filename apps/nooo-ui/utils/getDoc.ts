import clsx from 'clsx'
import { ThemeType } from 'components/WidgetList/ThemeContext'
import { WidgetBaseFrameworks } from 'typings/widgets'
import { getFrameScripts } from './getFrameScripts'

export const getDoc = ({
   maxWidthMode = 'full',
   theme = 'light',
   ...rest
}: {
   css: string
   html: string
   bodyCss?: string
   center?: boolean
   frameworks?: WidgetBaseFrameworks
   maxWidthMode?: 'xs' | 'md' | 'full'
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
         body.center { 
            display: flex;
            justify-content: center;
         }
         .inner {
            width: 100%;
            max-width: ${
               maxWidthMode === 'xs'
                  ? '390px'
                  : maxWidthMode === 'md'
                  ? '768px'
                  : '100%'
            }; 
         }
      </style>
      ${rest.frameworks ? getFrameScripts(rest.frameworks).join('\n') : ''}
   </head>
   <body class="${clsx(rest.center && 'center')}">
      <div class="inner">
         ${rest.html}
      </div>
   </body>
</html>
 
 `
   return srcDoc
}
