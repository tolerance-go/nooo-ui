'use client'

import clsx from 'clsx'
import { useState } from 'react'

export const WidgetsFilterToggler = (props: {
   children: (open: boolean) => React.ReactNode
}) => {
   const [open, setOpen] = useState(false)
   return (
      <>
         <div
            className={clsx(
               'absolute top-0 rounded-full left-1/2 p-1.5 bg-white -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-900 text-gray-400 transition',
               open ? 'shadow-md' : 'shadow',
            )}
            onClick={() => {
               setOpen((prev) => !prev)
            }}
         >
            <svg
               className={clsx(
                  'w-4 h-4 transition',
                  open ? 'rotate-180' : null,
               )}
               viewBox='0 0 1024 1024'
               version='1.1'
               xmlns='http://www.w3.org/2000/svg'
               fill='currentColor'
            >
               <path d='M171.64288 322.58048a34.05824 34.05824 0 0 1 48.9472-8.51968l255.50848 192.14336a59.65824 59.65824 0 0 0 71.80288 0l255.488-192.14336a34.03776 34.03776 0 0 1 48.9472 8.51968c11.79648 17.8176 10.09664 41.43104-4.096 57.344L571.53536 690.0736a79.60576 79.60576 0 0 1-119.07072 0L175.77984 379.94496a47.18592 47.18592 0 0 1-4.13696-57.344z'></path>
            </svg>
         </div>
         {props.children(open)}
      </>
   )
}
