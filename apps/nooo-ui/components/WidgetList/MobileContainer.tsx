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
            'relative box-content h-full overflow-x-hidden border-black',
            {
               'rounded-t-3xl border-t-8 border-l-8 border-r-8': type === 'top',
               'border-l-8 border-r-8': type === 'center',
               'rounded-b-3xl border-b-8 border-l-8 border-r-8':
                  type === 'bottom',
               'rounded-3xl border-8': type === 'page',
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
