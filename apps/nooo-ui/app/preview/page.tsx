import { widgetsData } from '.data/widgets-data'
import { MobileContainer } from 'components/WidgetList/MobileContainer'
import { defaultMobileSize } from 'constants/defaultMobileSize'
import { getFullPageHtmlCode } from 'utils/getFullPageHtmlCode'

const PreviewPage = (props: {
   searchParams: {
      key: string
   }
}) => {
   const target = widgetsData.find(
      (item) => item.key === props.searchParams.key,
   )

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
