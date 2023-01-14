import { FilterFormProvider } from 'components/FilterFormProvider'
import { KeywordSearchBar } from 'components/KeywordSearchBar'
import { Logo } from 'components/Logo'
import { ThemeSwitchBtn } from 'components/SiteThemeSwitchBtn'
import { WidgetList } from 'components/WidgetList'
import { WidgetsFilter } from 'components/WidgetsFilter'
import Link from 'next/link'

const Home = async () => {
   return (
      <FilterFormProvider>
         <div className='min-h-screen'>
            <header
               aria-label='page-header'
               className='bg-gray-50 dark:bg-gray-900 transition border-b border-b-gray-200 dark:border-b-gray-800'
            >
               <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-0'>
                  <div className='flex items-center sm:justify-between sm:space-x-4'>
                     <div className='inline-flex space-x-3 items-center'>
                        <Logo />
                        <span className='uppercase font-bold text-lg dark:text-white'>
                           Nooo-UI
                        </span>
                     </div>
                     <div className='flex items-center justify-between space-x-4 sm:justify-end'>
                        <div className='flex space-x-4 items-center'>
                           <Link
                              href='/docs/introduction/what-is-nooo-ui'
                              className='p-2.5 font-medium hover:underline underline-offset-2 dark:text-white'
                           >
                              文档
                           </Link>
                           <Link
                              href='https://github.com/nooo-ui/nooo-ui'
                              target='_blank'
                              className='p-2.5 font-medium hover:underline underline-offset-2 dark:text-white'
                           >
                              Github
                           </Link>
                        </div>
                        {/* <div className='text-gray-300'>|</div> */}
                        <ThemeSwitchBtn />
                        {/* <button
                           type='button'
                           className='group flex shrink-0 items-center rounded-lg transition'
                        >
                           <span className='sr-only'>Menu</span>
                           <img
                              alt='Man'
                              src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                              className='h-9 w-9 rounded-full object-cover'
                           />
                           <p className='ml-2.5 hidden text-left text-xs sm:block'>
                              <strong className='block font-medium'>
                                 Yarnb
                              </strong>
                              <span className='text-gray-500'>
                                 yarnb@foxmail.com
                              </span>
                           </p>
                        </button> */}
                     </div>
                  </div>
                  <div className='mt-20 text-center'>
                     <h1 className='text-2xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100 transition'>
                        Nooo-UI 线上 tailwindcss 设计集散地
                     </h1>
                     <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 transition'>
                        300+ 组件设计模板，50+ 分类类目 🚀 支持多种格式导出 🌱
                     </p>
                  </div>
                  <div className='mt-11'>
                     <KeywordSearchBar />
                  </div>
               </div>
            </header>
            <div className='mx-auto max-w-screen-xl relative'>
               <WidgetsFilter />
            </div>
            <WidgetList />
         </div>
         <div
            aria-label='footer'
            className='bg-gray-50 dark:bg-gray-900 transition p-5 mt-10'
         ></div>
      </FilterFormProvider>
   )
}

export default Home
