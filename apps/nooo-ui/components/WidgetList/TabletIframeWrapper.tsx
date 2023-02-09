import clsx from 'clsx'
import { WidgetData } from 'typings/widgets'
import { getDoc } from 'utils/getDoc'
import { useTabletSizeContext } from './TabletSizeContext'
import { useThemeContext } from './ThemeContext'

const frameSizeHeight = {
   xs: 100,
   sm: 300,
   md: 600,
   lg: 800,
   xl: 1000,
}

export const TabletIframeWrapper = ({ data }: { data: WidgetData }) => {
   const { size } = useTabletSizeContext()
   const { theme } = useThemeContext()
   return (
      <div className={clsx(size !== 'full' && 'flex justify-center')}>
         <iframe
            height={
               typeof data.meta.frameHeight == 'string'
                  ? data.meta.frameHeight.endsWith('px')
                     ? data.meta.frameHeight
                     : frameSizeHeight[
                          data.meta.frameHeight as keyof typeof frameSizeHeight
                       ]
                  : data.meta.frameHeight
            }
            srcDoc={getDoc({
               theme,
               data,
            })}
            width={size === 'xs' ? '390px' : size === 'md' ? '768px' : '100%'}
         />
      </div>
   )
}
