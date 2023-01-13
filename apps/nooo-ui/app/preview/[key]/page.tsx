import { widgetsData } from '.data/widgets-data'
import clsx from 'clsx'
import { MobileContainer } from 'components/WidgetList/MobileContainer'
import { getFullPageHtmlCode } from 'utils/getFullPageHtmlCode'

const PreviewPage = (props: {
   params: {
      key: string
   }
}) => {
   const target = widgetsData.find((item) => item.key === props.params.key)

   if (!target) return <div>not match</div>

   if (target.meta.mobile) {
      return typeof target.meta.mobile === 'object' ? (
         <div
            className={clsx(
               target.meta.center &&
                  'flex justify-center items-center min-h-screen',
            )}
         >
            <MobileContainer
               size={target.meta.mobile.size}
               type={target.meta.mobile.type}
            >
               <div
                  style={{
                     height: target.meta.mobile.size.height,
                     width: target.meta.mobile.size.width,
                  }}
                  className='w-full h-full bg-white overflow-x-auto'
                  dangerouslySetInnerHTML={{
                     __html: getFullPageHtmlCode(target, true),
                  }}
               ></div>
            </MobileContainer>
         </div>
      ) : null
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
