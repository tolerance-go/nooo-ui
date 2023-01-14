import { Dispatch, SetStateAction } from 'react'

export const OnlyCollectedToggle = ({
   setOnlyShowCollected,
}: {
   setOnlyShowCollected: Dispatch<SetStateAction<boolean>>
}) => {
   return (
      <div className='flex items-center space-x-2 h-full'>
         <span className='text-sm text-gray-500'>只看收藏</span>
         <label className='relative inline-flex items-center cursor-pointer'>
            <input
               type='checkbox'
               className='sr-only peer'
               onChange={(event) => {
                  setOnlyShowCollected(event.target.checked)
               }}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600" />
         </label>
      </div>
   )
}
