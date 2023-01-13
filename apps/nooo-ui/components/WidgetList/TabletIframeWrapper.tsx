import { WidgetData } from 'typings/widgets'
import { getDoc } from 'utils/getDoc'
import { useTabletSizeContext } from './TabletSizeContext'

export const TabletIframeWrapper = ({ data }: { data: WidgetData }) => {
   const { size } = useTabletSizeContext()

   return (
      <iframe
         height={data.meta.frameHeight}
         className='w-full'
         srcDoc={getDoc({
            html: data.html,
            css: data.css,
            center: data.meta.center,
            frameworks: data.meta.frameworks,
            maxWidthMode: size,
         })}
      />
   )
}
