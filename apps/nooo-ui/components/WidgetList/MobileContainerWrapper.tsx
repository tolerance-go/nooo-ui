'use client'

import { WidgetData } from 'typings/widgets'
import { getDoc } from 'utils/getDoc'
import { MobileContainer } from './MobileContainer'
import { useMobileDeviceSizeContext } from './MobileDeviceSizeContext'
import { useThemeContext } from './ThemeContext'

export const MobileContainerWrapper = ({ data }: { data: WidgetData }) => {
   const { size } = useMobileDeviceSizeContext()
   const { theme } = useThemeContext()

   if (!data.meta.mobile) {
      return null
   }

   return (
      <div className={'flex justify-center'}>
         <MobileContainer
            size={size}
            type={
               typeof data.meta.mobile === 'boolean'
                  ? 'page'
                  : data.meta.mobile.type
            }
         >
            <iframe
               className='w-full h-full'
               srcDoc={getDoc({
                  html: data.html,
                  css: data.css,
                  bodyCss: `background-color: white; overflow-x: hidden; height: ${size.height}px; width: ${size.width}px;`,
                  frameworks: data.meta.frameworks,
                  theme,
               })}
            />
         </MobileContainer>
      </div>
   )
}
