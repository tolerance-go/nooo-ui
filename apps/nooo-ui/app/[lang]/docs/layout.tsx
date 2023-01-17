import { DocMenu } from 'components/DocMenu'
import { Logo } from 'components/Logo'
import { ThemeSwitchBtn } from 'components/SiteThemeSwitchBtn'
import { Locale } from 'i18n-config'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import './prose.css'

const DocLayout = (
   props: PropsWithChildren<{
      params: { lang: Locale }
   }>,
) => {
   return (
      <div>
         <div className='px-4 md:px-10 py-4 border-b sm:fixed sm:top-0 w-full doc-header flex items-center justify-between dark:bg-black dark:border-b-gray-800 transition'>
            <Link
               className='inline-flex space-x-3 items-center'
               href={`/${props.params.lang}`}
            >
               <Logo />
               <span className='uppercase font-bold text-lg dark:text-white transition'>
                  Nooo-UI
               </span>
            </Link>
            <div className='flex space-x-4 items-center'>
               <Link
                  href='https://github.com/tolerance-go/nooo-ui'
                  target='_blank'
                  className='p-2.5 font-medium hover:underline underline-offset-2 dark:text-white transition'
               >
                  Github
               </Link>
               <ThemeSwitchBtn />
            </div>
         </div>
         <div className='py-4 sm:py-0 px-4 sm:px-0 sm:fixed sm:w-52 lg:left-60 md:left-8 sm:top-32'>
            <DocMenu />
         </div>
         <div className='sm:max-w-screen-2xl mx-auto sm:px-8 py-2 sm:py-5 md:pl-48 lg:pl-72 sm:mt-16'>
            <div className='px-4 lg:px-14 pt-4 pb-8 sm:pt-10 sm:pb-14 md:px-9 md:shadow-xl rounded-2xl dark:rounded-none dark:shadow-none'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}

export default DocLayout
