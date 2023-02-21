'use client'

import { useCookies } from 'react-cookie'
import { useSiteThemeContext } from './SiteThemeContext'

export const ThemeSwitchBtn = () => {
   const { theme, setTheme } = useSiteThemeContext()
   const [, setCookie] = useCookies(['theme'])

   return (
      <div
         className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
         onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            if (theme === 'light') {
               document.documentElement.classList.remove('light')
               document.documentElement.classList.add('dark')

               setCookie('theme', 'dark', { path: '/' })
            } else {
               document.documentElement.classList.remove('dark')
               document.documentElement.classList.add('light')

               setCookie('theme', 'light', { path: '/' })
            }
         }}
      >
         {theme === 'dark' ? (
            <svg
               fill='currentColor'
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
               className='h-5 w-5'
            >
               <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
               />
            </svg>
         ) : (
            <svg
               fill='currentColor'
               viewBox='0 0 20 20'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
               className='h-5 w-5'
            >
               <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
               />
            </svg>
         )}
      </div>
   )
}
