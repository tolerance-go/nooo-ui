import { widgetsData } from '.data/widgets-data'
import { MobileContainer } from 'components/WidgetList/MobileContainer'
import { defaultMobileSize } from 'components/WidgetList/MobileDeviceSizeContext'
import { getFullPageHtmlCode } from 'utils/getFullPageHtmlCode'

const PreviewPage = (props: {
   params: {
      key: string
   }
}) => {
   const target = widgetsData.find((item) => item.key === props.params.key)

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
               <div
                  style={{
                     height: defaultMobileSize.height,
                     width: defaultMobileSize.width,
                  }}
                  className='w-full h-full bg-white overflow-x-auto'
                  dangerouslySetInnerHTML={{
                     __html: getFullPageHtmlCode(target, true),
                  }}
               ></div>
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
