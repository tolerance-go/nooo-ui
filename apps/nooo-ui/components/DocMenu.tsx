'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocaleContext } from './LocaleContext'

export const DocMenu = () => {
   const pathname = usePathname()
   const { lang } = useLocaleContext()
   const routes = [
      {
         zhTitle: '介绍',
         title: 'Introduction',
         children: [
            {
               zhTitle: '什么是 Nooo-UI？',
               title: 'What is Nooo-UI?',
               path: `/${lang}/docs/introduction/what-is-nooo-ui`,
            },
         ],
      },
   ]

   return (
      <>
         {routes.map((item, index) => {
            const title = lang === 'zh-CN' ? item.zhTitle : item.title

            return (
               <ul
                  className={clsx(
                     'pb-4',
                     index !== routes.length - 1 && 'border-b',
                  )}
                  key={title}
               >
                  <li className='text-gray-900 transition dark:text-gray-100 my-3.5 text-sm font-medium'>
                     {title}
                  </li>
                  {item.children.map((it) => {
                     return (
                        <Link href={it.path} key={it.path}>
                           <li
                              className={clsx(
                                 'my-2.5 text-sm transition',
                                 it.path === pathname
                                    ? 'text-sky-600'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100',
                              )}
                           >
                              {lang === 'zh-CN' ? it.zhTitle : it.title}
                           </li>
                        </Link>
                     )
                  })}
               </ul>
            )
         })}
      </>
   )
}
