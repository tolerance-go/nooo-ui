'use client'

export const BacktopBtn = () => {
   return (
      <div
         className='fixed right-5 bottom-10 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-black shadow-xl hover:bg-gray-50 dark:hover:bg-gray-900 dark:shadow-none border dark:hover:text-white dark:border-gray-700 border-transparent cursor-pointer transition'
         onClick={() => {
            document.querySelector('html')?.scrollTo({
               top: 0,
               behavior: 'smooth',
            })
         }}
      >
         <svg
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='w-6 h-6'
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
