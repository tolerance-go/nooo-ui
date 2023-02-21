import { useLocaleContext } from 'components/LocaleContext'
import { Dispatch, SetStateAction } from 'react'

export const OnlyCollectedToggle = ({
   setOnlyShowCollected,
}: {
   setOnlyShowCollected: Dispatch<SetStateAction<boolean>>
}) => {
   const { dictionary } = useLocaleContext()
   return (
      <div className='flex h-full items-center space-x-2'>
         <span className='text-sm text-gray-500'>
            {dictionary.onlyCollection}
         </span>
         <label className='relative inline-flex cursor-pointer items-center'>
            <input
               type='checkbox'
               className='peer sr-only'
               onChange={(event) => {
                  setOnlyShowCollected(event.target.checked)
               }}
            />
            <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-sky-800" />
         </label>
      </div>
   )
}
