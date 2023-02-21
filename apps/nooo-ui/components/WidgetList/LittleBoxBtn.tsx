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
            'flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition hover:bg-gray-50 hover:text-sky-600 dark:border-gray-700 dark:hover:bg-gray-900',
            props.selected ? 'text-sky-600' : '',
         )}
         onClick={props.onClick}
      >
         {props.children}
      </div>
   )
}
