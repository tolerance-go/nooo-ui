import { DocMenu } from 'components/DocMenu'
import { Logo } from 'components/Logo'
import { ThemeSwitchBtn } from 'components/SiteThemeSwitchBtn'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import './prose.css'

const DocLayout = (
   props: PropsWithChildren<{
      //   meta: {
      //      author?: string
      //   }
   }>,
) => {
   const nextCookies = cookies()

   return (
      <div>
         <div className='px-10 py-4 border-b fixed top-0 w-full doc-header flex items-center justify-between dark:bg-black dark:border-b-gray-800 transition'>
            <Link className='inline-flex space-x-3 items-center' href={'/'}>
               <Logo />
               <span className='uppercase font-bold text-lg dark:text-white transition'>
                  Nooo-UI
               </span>
            </Link>
            <div className='flex space-x-4 items-center'>
               <Link
                  href='https://github.com/nooo-ui/nooo-ui'
                  target='_blank'
                  className='p-2.5 font-medium hover:underline underline-offset-2 dark:text-white transition'
               >
                  Github
               </Link>
               <ThemeSwitchBtn />
            </div>
         </div>
         <div className='fixed w-52 left-60 top-32'>
            <DocMenu />
         </div>
         <div className='max-w-screen-2xl mx-auto px-8 py-5 pl-72 mt-16'>
            <div className='px-14 pt-10 pb-14 shadow-xl rounded-2xl dark:rounded-none dark:shadow-none'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}

export default DocLayout
