'use client'

import { backPageTop } from 'utils/backPageTop'

export const BacktopBtn = () => {
   return (
      <div
         className='fixed right-5 bottom-10 cursor-pointer rounded-full border border-transparent bg-white p-2 text-gray-500 shadow-xl transition hover:bg-gray-50 hover:text-black dark:border-gray-700 dark:bg-black dark:text-gray-400 dark:shadow-none dark:hover:bg-gray-900 dark:hover:text-white'
         onClick={() => {
            backPageTop()
         }}
      >
         <svg
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='h-6 w-6'
         >
            <path
               clipRule='evenodd'
               fillRule='evenodd'
               d='M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z'
            />
         </svg>
      </div>
   )
}
