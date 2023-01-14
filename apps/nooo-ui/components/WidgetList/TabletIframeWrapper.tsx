import clsx from 'clsx'
import { WidgetData } from 'typings/widgets'
import { getDoc } from 'utils/getDoc'
import { useTabletSizeContext } from './TabletSizeContext'
import { useThemeContext } from './ThemeContext'

export const TabletIframeWrapper = ({ data }: { data: WidgetData }) => {
   const { size } = useTabletSizeContext()
   const { theme } = useThemeContext()
   return (
      <div className={clsx(size !== 'full' && 'flex justify-center')}>
         <iframe
            height={data.meta.frameHeight}
            srcDoc={getDoc({
               html: data.html,
               css: data.css,
               center: data.meta.center,
               frameworks: data.meta.frameworks,
               theme,
            })}
            width={size === 'xs' ? '390px' : size === 'md' ? '768px' : '100%'}
         />
      </div>
   )
}
