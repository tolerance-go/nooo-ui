'use client'

import { useLocaleContext } from 'components/LocaleContext'
import { useState } from 'react'
import { useUpdateEffect } from 'react-use'
import { WidgetData } from 'typings/widgets'
import { WidgetPanel } from './WidgetPanel'

const pageSize = 15

export const ListWrapper = ({ list }: { list: WidgetData[] }) => {
   const [end, setEnd] = useState(pageSize)

   const { dictionary } = useLocaleContext()

   const hasMore =
      /**
       * 14 <= 15
       * 15 <= 15
       */
      list.length > end

   useUpdateEffect(() => {
      setEnd(pageSize)
   }, [list.length])

   return (
      <>
         {list.slice(0, end).map((item) => {
            return <WidgetPanel key={item.key} data={item} />
         })}
         <div className='flex items-center justify-center'>
            {hasMore ? (
               <button
                  onClick={() => {
                     setEnd(end + pageSize)
                  }}
                  className='transform rounded-xl bg-blue-600 px-5 py-4 text-center text-base font-medium text-white transition duration-100 ease-in-out hover:bg-blue-700 active:scale-95 lg:px-10'
               >
                  {dictionary.loadMore}
               </button>
            ) : (
               <div className='text-gray-500'>{dictionary.noMore}</div>
            )}
         </div>
      </>
   )
}
