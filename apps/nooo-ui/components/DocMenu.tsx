'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const DocMenu = () => {
   const pathname = usePathname()
   const routes = [
      {
         title: '介绍',
         children: [
            {
               title: '什么是 Nooo-UI？',
               path: '/docs/introduction/what-is-nooo-ui',
            },
         ],
      },
   ]

   return (
      <>
         {routes.map((item, index) => {
            return (
               <ul
                  className={clsx(
                     'pb-4',
                     index !== routes.length - 1 && 'border-b',
                  )}
                  key={item.title}
               >
                  <li className='text-gray-900 my-3.5 text-sm font-medium'>
                     {item.title}
                  </li>
                  {item.children.map((it) => {
                     return (
                        <Link href={it.path} key={it.path}>
                           <li
                              className={clsx(
                                 'my-2.5 text-sm',
                                 it.path === pathname
                                    ? 'text-sky-600'
                                    : 'text-gray-500 hover:text-gray-900',
                              )}
                           >
                              {it.title}
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
