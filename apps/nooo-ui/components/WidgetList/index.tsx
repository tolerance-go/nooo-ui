'use client'

import { useLocaleContext } from 'components/LocaleContext'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { WidgetData } from 'typings/widgets'
import { getFilterWidgetsData } from 'utils/getFilterWidgetsData'
import { getCollectedKeys } from './getCollectedKeys'
import { OnlyCollectedToggle } from './OnlyCollectedToggle'
import { WidgetPanel } from './WidgetPanel'

export const WidgetList = ({ list }: { list: WidgetData[] }) => {
   const { watch } = useFormContext()
   const watchAllFields = watch()
   const { dictionary } = useLocaleContext()

   const results = getFilterWidgetsData(watchAllFields, list)

   const [onlyShowCollected, setOnlyShowCollected] = useState(false)

   const resultsFilterByCollection = onlyShowCollected
      ? results.filter((item) => {
           const collectedKeys = getCollectedKeys()
           return collectedKeys.has(item.key)
        })
      : results

   const size = onlyShowCollected
      ? resultsFilterByCollection.length
      : results.length

   return (
      <>
         <div className='max-w-screen-2xl mx-auto mt-11 flex justify-between items-center px-2 lg:px-0'>
            <div>
               <span className='text-xl transition dark:text-white'>
                  {size} {size ? dictionary.items : dictionary.item}
               </span>
               <span className='text-gray-500 pl-2'>
                  {dictionary.searchResults}
                  {dictionary.colon}
               </span>
            </div>
            <OnlyCollectedToggle setOnlyShowCollected={setOnlyShowCollected} />
         </div>
         <div className='max-w-screen-2xl mx-auto mt-3 px-2 lg:px-0'>
            {resultsFilterByCollection.map((item) => {
               return <WidgetPanel key={item.key} data={item} />
            })}
         </div>
      </>
   )
}
