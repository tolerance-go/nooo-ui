import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export const MobileContainer = (
   props: PropsWithChildren<{
      size: {
         width: number
         height: number
      }
      type?: 'top' | 'center' | 'bottom' | 'page' | string
   }>,
) => {
   const { type = 'page' } = props
   return (
      <div
         className={clsx(
            'border-black box-content overflow-x-hidden relative h-full',
            {
               'border-t-8 border-l-8 border-r-8 rounded-t-3xl': type === 'top',
               'border-l-8 border-r-8': type === 'center',
               'border-b-8 border-l-8 border-r-8 rounded-b-3xl':
                  type === 'bottom',
               'border-8 rounded-3xl': type === 'page',
            },
         )}
         style={{
            width: props.size.width,
            height: props.size.height,
         }}
      >
         {props.children}
      </div>
   )
}
