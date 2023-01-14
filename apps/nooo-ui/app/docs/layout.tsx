import { DocMenu } from 'components/DocMenu'
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
               <ThemeSwitchBtn
                  initialTheme={nextCookies.get('theme')?.value ?? 'light'}
               />
            </div>
         </div>
         <div className='fixed w-52 left-60 top-32'>
            <DocMenu />
         </div>
         <div className='max-w-screen-2xl mx-auto px-8 py-5 pl-72 mt-16'>
            <div className='px-14 pt-10 pb-14 shadow-xl rounded-2xl'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}

export default DocLayout
