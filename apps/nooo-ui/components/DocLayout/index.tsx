import { PropsWithChildren } from 'react'
import './prose.css'

export const DocLayout = (
   props: PropsWithChildren<{
      meta: {
         author?: string
      }
   }>,
) => {
   return (
      <div>
         <div className='px-10 py-4 border-b'>
            <div className='inline-flex space-x-3'>
               <img src='/logo.svg' className='w-6 h-6' />
               <span className='uppercase font-medium'>Nooo-UI</span>
            </div>
         </div>
         <div className='max-w-screen-2xl mx-auto px-8 py-5 mt-10 flex'>
            <div className='w-1/6 pr-6'>
               <ul className='border-b pb-4'>
                  <li className='text-gray-900 my-3.5 text-sm font-medium'>
                     Introduction
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm hover:text-gray-900'>
                     What is VitePress?
                  </li>
                  <li className='text-sky-600 my-2.5 text-sm hover:text-gray-900'>
                     Getting Started
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm hover:text-gray-900'>
                     Configuration
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm hover:text-gray-900'>
                     Deploying
                  </li>
               </ul>
               <ul className='border-b pb-4'>
                  <li className='text-gray-900 my-3.5 text-sm font-medium'>
                     Introduction
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     What is VitePress?
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     Getting Started
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     Configuration
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>Deploying</li>
               </ul>
               <ul className=''>
                  <li className='text-gray-900 my-3.5 text-sm font-medium'>
                     Introduction
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     What is VitePress?
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     Getting Started
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>
                     Configuration
                  </li>
                  <li className='text-gray-500 my-2.5 text-sm'>Deploying</li>
               </ul>
            </div>
            <div className='px-10 py-7 shadow-xl flex-grow'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}
