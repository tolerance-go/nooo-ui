'use client'

import { widgetsData } from '.data/widgets-data'
import { MobileContainer } from 'components/WidgetList/MobileContainer'
import { useThemeContext } from 'components/WidgetList/ThemeContext'
import { defaultMobileSize } from 'constants/defaultMobileSize'
import { getDoc } from 'utils/getDoc'
import { getFullPageHtmlCode } from 'utils/getFullPageHtmlCode'

const PreviewPage = (props: {
   searchParams: {
      key: string
   }
}) => {
   const target = widgetsData.find(
      (item) => item.key === props.searchParams.key,
   )
   const { theme } = useThemeContext()

   if (!target) return <div>not match</div>

   if (target.meta.mobile) {
      return (
         <div className={'flex justify-center items-center min-h-screen'}>
            <MobileContainer
               size={defaultMobileSize}
               type={
                  typeof target.meta.mobile === 'object'
                     ? target.meta.mobile.type
                     : 'page'
               }
            >
               <iframe
                  className='w-full h-full'
                  srcDoc={getDoc({
                     bodyCss: `background-color: white; overflow-x: hidden; height: ${defaultMobileSize.height}px; width: ${defaultMobileSize.width}px;`,
                     theme,
                     data: target,
                  })}
               />
            </MobileContainer>
         </div>
      )
   }

   return (
      <div
         dangerouslySetInnerHTML={{
            __html: getFullPageHtmlCode(target, true),
         }}
      ></div>
   )
}

export default PreviewPage
