import Link from 'next/link'
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
         <div className='px-10 py-4 border-b fixed top-0 w-full doc-header flex items-center justify-between'>
            <Link className='inline-flex space-x-3 items-center' href={'/'}>
               <img src='/logo.svg' className='w-7 h-7' />
               <span className='uppercase font-bold text-lg'>Nooo-UI</span>
            </Link>
         </div>
         <div className='fixed w-52 left-60 top-32'>
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
               <li className='text-gray-500 my-2.5 text-sm'>Getting Started</li>
               <li className='text-gray-500 my-2.5 text-sm'>Configuration</li>
               <li className='text-gray-500 my-2.5 text-sm'>Deploying</li>
            </ul>
            <ul className=''>
               <li className='text-gray-900 my-3.5 text-sm font-medium'>
                  Introduction
               </li>
               <li className='text-gray-500 my-2.5 text-sm'>
                  What is VitePress?
               </li>
               <li className='text-gray-500 my-2.5 text-sm'>Getting Started</li>
               <li className='text-gray-500 my-2.5 text-sm'>Configuration</li>
               <li className='text-gray-500 my-2.5 text-sm'>Deploying</li>
            </ul>
         </div>
         <div className='max-w-screen-2xl mx-auto px-8 py-5 pl-72 mt-16'>
            <div className='px-14 pt-10 pb-14 shadow-xl rounded-2xl'>
               <div className='prose dark:prose-invert'>{props.children}</div>
            </div>
         </div>
      </div>
   )
}
