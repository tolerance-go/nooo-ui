'use client'

import { useThemeContext } from './ThemeContext'

export const ThemeSwitchBtn = () => {
   const { theme, setTheme } = useThemeContext()

   return (
      <div
         className='w-9 h-9 flex cursor-pointer transition hover:bg-gray-50 hover:text-sky-600 justify-center items-center border rounded-md'
         onClick={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
         }
      >
         {theme === 'dark' ? (
            <svg
               aria-hidden='true'
               data-toggle-icon='moon'
               className='w-4 h-4'
               fill='currentColor'
               viewBox='0 0 20 20'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
         ) : (
            <svg
               fill='none'
               stroke='currentColor'
               strokeWidth={2}
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
               className='w-4 h-4 inline-block'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
               />
            </svg>
         )}
      </div>
   )
}
