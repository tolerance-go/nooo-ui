import { DocMenu } from 'components/DocMenu'
import { LangSwitcher } from 'components/LangSwitcher'
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
      <div className='relative'>
         <div className='doc-header z-10 flex w-full items-center justify-between border-b px-4 py-4 transition dark:border-b-gray-800 dark:bg-black sm:fixed sm:top-0 md:px-10'>
            <Link
               className='inline-flex items-center space-x-3'
               href={`/${props.params.lang}`}
            >
               <Logo />
               <span className='text-lg font-bold uppercase transition dark:text-white'>
                  Nooo-UI
               </span>
            </Link>
            <div className='flex items-center space-x-4'>
               <Link
                  href='https://github.com/tolerance-go/nooo-ui'
                  target='_blank'
                  className='p-2.5 font-medium underline-offset-2 transition hover:underline dark:text-white'
               >
                  Github
               </Link>
               <LangSwitcher />
               <ThemeSwitchBtn />
            </div>
         </div>
         <div className='py-2 pl-4 sm:fixed sm:left-0 sm:top-24 sm:px-10 sm:py-5'>
            <DocMenu />
         </div>
         <div className='pb-20 sm:absolute sm:top-20 sm:left-52 sm:right-10 sm:mx-0 sm:mt-0'>
            <div className='rounded-2xl px-4 pt-4 pb-8 dark:rounded-none dark:shadow-none sm:pt-10 sm:pb-14 md:px-9 md:shadow-xl lg:px-14'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}

export default DocLayout
