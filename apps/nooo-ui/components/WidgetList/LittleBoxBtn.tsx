import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export const LittleBoxBtn = (
   props: PropsWithChildren<{
      onClick?: () => void
      selected?: boolean
   }>,
) => {
   return (
      <div
         className={clsx(
            'w-9 h-9 flex justify-center items-center border rounded-md hover:bg-gray-50 hover:text-sky-600 cursor-pointer transition',
            props.selected ? 'text-sky-600' : '',
         )}
         onClick={props.onClick}
      >
         {props.children}
      </div>
   )
}
