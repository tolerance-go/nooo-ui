'use client'

import { useFormContext } from 'react-hook-form'
import { InputControlCommon } from 'typings/filter-inputs'
import { OptionItem } from 'typings/widgets'

export const Checkbox = (
   props: InputControlCommon & {
      options: OptionItem[]
   },
) => {
   const { register } = useFormContext()
   return (
      <div className='flex items-stretch border-b dark:border-gray-800 transition'>
         <div
            aria-label='left-area'
            className='sm:w-52 flex-none bg-gray-50 dark:bg-gray-900 dark:text-white transition flex items-center justify-center py-2 px-4'
         >
            {props.title}
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='flex items-center h-full space-x-4'>
               {props.options.map((item) => {
                  return (
                     <div className='flex items-center' key={item.value}>
                        <input
                           id={item.value}
                           type='checkbox'
                           className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 transition'
                           {...register([props.name, item.value].join('.'))}
                        />
                        <label
                           htmlFor={item.value}
                           className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 transition'
                        >
                           {item.label}
                        </label>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
