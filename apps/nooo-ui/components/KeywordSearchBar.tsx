'use client'

import { debounce } from 'lodash-es'
import { ChangeEvent, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

export const KeywordSearchBar = () => {
   const { register } = useFormContext()

   const inputRef = useRef<HTMLInputElement | null>()

   const { ref, onChange, ...registerProps } = register('keywords')

   return (
      <div className='relative w-2/3 mx-auto'>
         <input
            className='h-16 w-full rounded-lg border-none bg-white pl-5 pr-20 text-lg shadow-md focus:ring-transparent focus:outline-sky-600 focus:shadow-none'
            id='search'
            type='search'
            placeholder='关键字搜索设计模板...'
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
            className='absolute top-1/2 right-5 -translate-y-1/2 rounded-md bg-gray-50 p-3 text-gray-600 transition'
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
