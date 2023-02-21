'use client'

import { defaultMobileSize } from 'constants/defaultMobileSize'
import { WidgetData } from 'typings/widgets'
import { getDoc } from 'utils/getDoc'
import { getFullPageHtmlCode } from 'utils/getFullPageHtmlCode'
import { MobileContainer } from './WidgetList/MobileContainer'
import { useThemeContext } from './WidgetList/ThemeContext'

export const WidgetPreview = ({ data }: { data: WidgetData }) => {
   const { theme } = useThemeContext()

   if (data.meta.mobile) {
      return (
         <div className={'flex min-h-screen items-center justify-center'}>
            <MobileContainer
               size={defaultMobileSize}
               type={
                  typeof data.meta.mobile === 'object'
                     ? data.meta.mobile.type
                     : 'page'
               }
            >
               <iframe
                  className='h-full w-full'
                  srcDoc={getDoc({
                     bodyCss: `background-color: white; overflow-x: hidden; height: ${defaultMobileSize.height}px; width: ${defaultMobileSize.width}px;`,
                     theme,
                     data: data,
                  })}
               />
            </MobileContainer>
         </div>
      )
   }

   return (
      <div
         dangerouslySetInnerHTML={{
            __html: getFullPageHtmlCode(data, true),
         }}
      ></div>
   )
}
