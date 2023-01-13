'use client'

import { widgetsData } from '.data/widgets-data'
import { useFormContext } from 'react-hook-form'
import { getFilterWidgetsData } from 'utils/getFilterWidgetsData'
import { WidgetPanel } from './WidgetPanel'

export const WidgetList = () => {
   const { watch } = useFormContext()
   const watchAllFields = watch()

   const results = getFilterWidgetsData(watchAllFields, widgetsData)

   return (
      <>
         <div className='max-w-screen-2xl mx-auto mt-11'>
            <div>
               <span className='text-xl'>{results.length} 项</span>
               <span className='text-gray-500 pl-2'>搜索结果：</span>
            </div>
         </div>
         <div className='max-w-screen-2xl mx-auto mt-3'>
            {results.map((item) => {
               return <WidgetPanel key={item.key} data={item} />
            })}
         </div>
      </>
   )
}
