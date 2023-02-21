'use client'

import { useFormContext } from 'react-hook-form'
import { InputControlCommon } from 'typings/filter-inputs'
import { OptionItem } from 'typings/widgets'

export const Checkbox = (
   props: InputControlCommon & {
      options: OptionItem[]
   },
) => {
   const { register, setValue } = useFormContext()
   return (
      <div className='flex items-stretch border-b transition dark:border-gray-800'>
         <div
            aria-label='left-area'
            className='flex flex-none items-center justify-center bg-gray-50 py-2 px-4 transition dark:bg-gray-900 dark:text-white sm:w-52'
         >
            {props.title}
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='flex h-full flex-wrap items-center space-x-4'>
               {props.options.map((item) => {
                  return (
                     <div className='flex items-center' key={item.value}>
                        <input
                           id={item.value}
                           type='checkbox'
                           className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-sky-600 transition focus:ring-2 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600'
                           {...register([props.name, item.value].join('.'))}
                        />
                        <label
                           htmlFor={item.value}
                           className='ml-2 text-sm font-medium text-gray-900 transition dark:text-gray-300'
                        >
                           {item.label}
                        </label>
                     </div>
                  )
               })}
               <button
                  className='text-sm text-sky-700 transition hover:text-sky-600'
                  onClick={() => {
                     setValue(
                        props.name,
                        props.options.reduce((acc, next) => {
                           return {
                              ...acc,
                              [next.value]: false,
                           }
                        }, {}),
                     )
                  }}
               >
                  全部取消
               </button>
               <button
                  className='text-sm text-sky-700 transition hover:text-sky-600'
                  onClick={() => {
                     setValue(
                        props.name,
                        props.options.reduce((acc, next) => {
                           return {
                              ...acc,
                              [next.value]: true,
                           }
                        }, {}),
                     )
                  }}
               >
                  全部选中
               </button>
            </div>
         </div>
      </div>
   )
}
