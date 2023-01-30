'use client'

import { useLocaleContext } from 'components/LocaleContext'
import { useState } from 'react'
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

   return (
      <>
         {list.slice(0, end).map((item) => {
            return <WidgetPanel key={item.key} data={item} />
         })}
         <div className='flex justify-center items-center'>
            {hasMore ? (
               <button
                  onClick={() => {
                     setEnd(end + pageSize)
                  }}
                  className='px-5 py-4 text-base font-medium text-center text-white duration-100 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 active:scale-95 transition'
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
