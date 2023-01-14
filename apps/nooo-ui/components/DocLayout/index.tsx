import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import './prose.css'

export const DocLayout = (
   props: PropsWithChildren<{
      meta: {
         author?: string
      }
   }>,
) => {
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
      <div>
         <div className='px-10 py-4 border-b fixed top-0 w-full doc-header flex items-center justify-between'>
            <Link className='inline-flex space-x-3 items-center' href={'/'}>
               <img src='/logo.svg' className='w-7 h-7' />
               <span className='uppercase font-bold text-lg'>Nooo-UI</span>
            </Link>
            <div className='flex space-x-4 items-center'>
               <Link
                  href='https://github.com/nooo-ui/nooo-ui'
                  target='_blank'
                  className='p-2.5 font-medium hover:underline underline-offset-2'
               >
                  Github
               </Link>
            </div>
         </div>
         <div className='fixed w-52 left-60 top-32'>
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
         </div>
         <div className='max-w-screen-2xl mx-auto px-8 py-5 pl-72 mt-16'>
            <div className='px-14 pt-10 pb-14 shadow-xl rounded-2xl'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}
