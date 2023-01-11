import { WidgetList } from 'components/WidgetList'
import { WidgetsFilter } from 'components/WidgetsFilter'
import Link from 'next/link'

const Home = async () => {
   return (
      <div className=''>
         <header aria-label='page-header' className='bg-gray-50 border-b'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-0'>
               <div className='flex items-center sm:justify-between sm:gap-4'>
                  <div className='inline-flex space-x-3 items-center'>
                     <img src='/logo.svg' className='w-7 h-7' />
                     <span className='uppercase font-bold text-lg'>
                        Nooo-UI
                     </span>
                  </div>
                  <div className='flex items-center justify-between gap-8 sm:justify-end'>
                     <div className='flex space-x-4 items-center'>
                        <Link
                           href='/docs/introduction/what-is-nooo-ui'
                           className='p-2.5 font-medium hover:underline underline-offset-4'
                        >
                           <span className='sr-only'>Academy</span>
                           文档
                        </Link>
                        <Link
                           href='/docs/introduction/what-is-nooo-ui'
                           className='p-2.5 font-medium hover:underline underline-offset-4'
                        >
                           <span className='sr-only'>Academy</span>
                           Github
                        </Link>
                     </div>
                     <div className='text-gray-300'>|</div>
                     <button
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
                           <strong className='block font-medium'>Yarnb</strong>
                           <span className='text-gray-500'>
                              yarnb@foxmail.com
                           </span>
                        </p>
                     </button>
                  </div>
               </div>
               <div className='mt-20 text-center'>
                  <h1 className='text-2xl font-bold text-gray-900 sm:text-4xl'>
                     Nooo-UI 线上 tailwindcss 设计集散地
                  </h1>
                  <p className='mt-2 text-sm text-gray-500'>
                     300+ 组件设计模板，50+ 分类类目 🚀 支持多种格式导出 🌱
                  </p>
               </div>
               <div className='mt-11'>
                  <div className='relative w-2/3 mx-auto'>
                     <input
                        className='h-16 w-full rounded-lg border-none bg-white pl-5 pr-20 text-lg shadow-md focus:ring-transparent focus:outline-sky-600 focus:shadow-none'
                        id='search'
                        type='search'
                        placeholder='搜索设计模板...'
                     />
                     <button
                        type='button'
                        className='absolute top-1/2 right-5 -translate-y-1/2 rounded-md bg-gray-50 p-3 text-gray-600 transition hover:text-gray-700'
                     >
                        <span className='sr-only'>Submut Search</span>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='h-4 w-4'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </header>
         <div className='mx-auto max-w-screen-xl'>
            <div className='relative'>
               <WidgetsFilter />
            </div>
         </div>
         <div className='max-w-screen-2xl mx-auto mt-11'>
            <div>
               <span className='text-xl'>244 项</span>
               <span className='text-gray-500 pl-2'>搜索结果：</span>
            </div>
         </div>
         <div className='max-w-screen-2xl mx-auto mt-3'>
            <WidgetList />
         </div>

         <div aria-label='footer' className='bg-gray-50 p-5 mt-10'></div>
      </div>
   )
}

export default Home
