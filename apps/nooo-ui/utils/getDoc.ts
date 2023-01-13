import clsx from 'clsx'
import { WidgetBaseFrameworks } from 'typings/widgets'
import { getFrameScripts } from './getFrameScripts'

export const getDoc = ({
   maxWidthMode = 'full',
   ...rest
}: {
   css: string
   html: string
   bodyCss?: string
   center?: boolean
   frameworks?: WidgetBaseFrameworks
   maxWidthMode?: 'xs' | 'md' | 'full'
}) => {
   const srcDoc = /*html*/ `
 <head>
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
 </body
 `
   return srcDoc
}
