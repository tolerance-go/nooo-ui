'use client'

import { debounce } from 'lodash-es'
import { ChangeEvent, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useLocaleContext } from './LocaleContext'

export const KeywordSearchBar = () => {
   const { register } = useFormContext()
   const { dictionary } = useLocaleContext()

   const inputRef = useRef<HTMLInputElement | null>()

   const { ref, onChange, ...registerProps } = register('keywords')

   return (
      <div className='relative mx-auto w-full px-2 sm:w-2/3 sm:px-0'>
         <input
            className='h-16 w-full rounded-lg border-none bg-white pl-5 pr-20 text-lg shadow-md transition-colors focus:shadow-none focus:outline-sky-600 focus:ring-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            id='search'
            type='search'
            placeholder={`${dictionary.searchPlaceholder}...`}
            {...registerProps}
            onChange={debounce((event: ChangeEvent<HTMLInputElement>) => {
               onChange(event)
            }, 300)}
            ref={(el) => {
               ref(el)
               inputRef.current = el
            }}
         />
         <div
            className='absolute top-1/2 right-5 -translate-y-1/2 rounded-md bg-gray-50 p-3 text-gray-600 transition dark:bg-gray-800 dark:text-gray-400'
            onClick={() => {
               inputRef.current?.focus()
            }}
         >
            <span className='sr-only'>Search</span>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-4 w-4'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
               strokeWidth={2}
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
               />
            </svg>
         </div>
      </div>
   )
}
