'use client'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { i18n } from 'i18n-config'
import Link from 'next/link'
import { useLocaleContext } from './LocaleContext'

const localeTexts = {
   en: 'English',
   'zh-CN': '简体中文',
}

export const LangSwitcher = () => {
   const { lang } = useLocaleContext()

   const text = localeTexts[lang]

   return (
      <Popover className='relative'>
         <Popover.Button className={'flex items-center focus:outline-none'}>
            <a
               href='#'
               aria-haspopup='true'
               aria-expanded='false'
               role='button'
               className='inline-flex space-x-1 items-center'
            >
               <svg viewBox='0 0 24 24' aria-hidden='true' className='w-5 h-5'>
                  <path
                     fill='currentColor'
                     d='M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z'
                  />
               </svg>
               <span>{text}</span>
            </a>
         </Popover.Button>
         <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
         >
            <Popover.Panel className='absolute z-10 top-1.5'>
               <ul className='dark:border dark:border-gray-200 text-sm min-w-max dark:shadow-none p-2 py-2.5 rounded-md bg-white shadow-md'>
                  {i18n.locales.map((locale) => {
                     return (
                        <li
                           key={locale}
                           className={clsx(
                              'px-2 py-1 hover:bg-gray-100 rounded-md mb-1 last:mb-0',
                              {
                                 'bg-gray-100 text-sky-600': lang === locale,
                              },
                           )}
                        >
                           <Link href={`/${locale}`}>
                              {localeTexts[locale]}
                           </Link>
                        </li>
                     )
                  })}
               </ul>
            </Popover.Panel>
         </Transition>
      </Popover>
   )
}
