import { WidgetList } from 'components/WidgetList'
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
               <div className='absolute top-0 rounded-full shadow-md left-1/2 p-1.5 bg-white -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-900 text-gray-400 transition'>
                  <svg
                     className='w-4 h-4'
                     viewBox='0 0 1024 1024'
                     version='1.1'
                     xmlns='http://www.w3.org/2000/svg'
                     fill='currentColor'
                  >
                     <path d='M171.64288 322.58048a34.05824 34.05824 0 0 1 48.9472-8.51968l255.50848 192.14336a59.65824 59.65824 0 0 0 71.80288 0l255.488-192.14336a34.03776 34.03776 0 0 1 48.9472 8.51968c11.79648 17.8176 10.09664 41.43104-4.096 57.344L571.53536 690.0736a79.60576 79.60576 0 0 1-119.07072 0L175.77984 379.94496a47.18592 47.18592 0 0 1-4.13696-57.344z'></path>
                  </svg>
               </div>
               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     radio
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div className='flex items-center space-x-4 h-full'>
                        <div className='flex items-center'>
                           <input
                              id='default-radio-1'
                              type='radio'
                              name='default-radio'
                              className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                           />
                           <label
                              htmlFor='default-radio-1'
                              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                           >
                              Default radio
                           </label>
                        </div>
                        <div className='flex items-center'>
                           <input
                              defaultChecked
                              id='default-radio-2'
                              type='radio'
                              name='default-radio'
                              className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                           />
                           <label
                              htmlFor='default-radio-2'
                              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                           >
                              Checked state
                           </label>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     toggle
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div className='flex items-center space-x-2 h-full'>
                        <label className='relative inline-flex items-center cursor-pointer'>
                           <input type='checkbox' className='sr-only peer' />
                           <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600" />
                           <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                              Small toggle
                           </span>
                        </label>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     range
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div className='h-full flex items-center'>
                        <input
                           id='small-range'
                           type='range'
                           defaultValue={50}
                           className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
                        />
                        <span className='px-2'>78</span>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     checkbox
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div className='flex items-center h-full space-x-4'>
                        <div className='flex items-center'>
                           <input
                              id='default-checkbox'
                              type='checkbox'
                              className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                           />
                           <label
                              htmlFor='default-checkbox'
                              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                           >
                              Default checkbox
                           </label>
                        </div>
                        <div className='flex items-center'>
                           <input
                              defaultChecked
                              id='checked-checkbox'
                              type='checkbox'
                              className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                           />
                           <label
                              htmlFor='checked-checkbox'
                              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                           >
                              Checked state
                           </label>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     select
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div>
                        <label htmlFor='underline_select' className='sr-only'>
                           Underline select
                        </label>
                        <select
                           id='underline_select'
                           className='block py-1 px-0 w-full text-sm bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer'
                           defaultValue={'df'}
                        >
                           <option value={'df'}>Choose a country</option>
                           <option value='US'>United States</option>
                           <option value='CA'>Canada</option>
                           <option value='FR'>France</option>
                           <option value='DE'>Germany</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     textarea
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div>
                        <label htmlFor='text-area' className='sr-only'>
                           Underline select
                        </label>
                        <textarea
                           id='text-area'
                           className='block py-1 px-0 w-full text-sm bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer'
                           placeholder='请输入'
                        ></textarea>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     text
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div>
                        <label htmlFor='text-area' className='sr-only'>
                           Underline select
                        </label>
                        <input
                           type={'text'}
                           id='text-area'
                           className='block py-1 px-0 w-full text-sm bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer'
                           placeholder='请输入'
                        ></input>
                     </div>
                  </div>
               </div>

               <div className='flex items-stretch border-b'>
                  <div
                     aria-label='left-area'
                     className='w-56 bg-gray-50 flex items-center justify-center py-1.5 px-2.5'
                  >
                     multiple select
                  </div>
                  <div
                     className='flex-grow py-1.5 px-2.5'
                     aria-label='right-area'
                  >
                     <div>
                        <select
                           multiple
                           id='countries_multiple'
                           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
                        >
                           <option selected>Choose countries</option>
                           <option value='US'>United States</option>
                           <option value='CA'>Canada</option>
                           <option value='FR'>France</option>
                           <option value='DE'>Germany</option>
                        </select>
                     </div>
                  </div>
               </div>
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
