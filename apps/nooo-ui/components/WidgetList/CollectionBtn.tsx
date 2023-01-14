'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import store from 'store'
import { WidgetData } from 'typings/widgets'
import { collectedLocalKey, getCollectedKeys } from './getCollectedKeys'

export const CollectionBtn = ({ data }: { data: WidgetData }) => {
   const [collected, setCollected] = useState(false)
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      const collectedKeys = getCollectedKeys()
      setCollected(collectedKeys.has(data.key))
      setMounted(true)
   }, [])

   return (
      <div
         className={clsx(
            'w-9 h-9 flex hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-amber-500 transition cursor-pointer justify-center items-center border dark:border-gray-700 rounded-md',
            collected && 'text-amber-500',
         )}
         onClick={() => {
            setCollected(!collected)

            const collectedKeys = getCollectedKeys()

            if (collected) {
               collectedKeys.delete(data.key)
               store.set(collectedLocalKey, Array.from(collectedKeys))
            } else {
               collectedKeys.add(data.key)
               store.set(collectedLocalKey, Array.from(collectedKeys))
            }
         }}
      >
         {!mounted ? (
            <div className='w-4 h-4'></div>
         ) : collected ? (
            <svg
               fill='currentColor'
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
               className='w-4 h-4'
            >
               <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
               />
            </svg>
         ) : (
            <svg
               fill='none'
               stroke='currentColor'
               strokeWidth={2}
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
               className='w-4 h-4'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
               />
            </svg>
         )}
      </div>
   )
}
