export const Toggle = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='flex w-52 items-center justify-center bg-gray-50 p-2'
         >
            toggle
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='flex h-full items-center space-x-2'>
               <label className='relative inline-flex cursor-pointer items-center'>
                  <input type='checkbox' className='peer sr-only' />
                  <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-sky-800" />
                  <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                     Small toggle
                  </span>
               </label>
            </div>
         </div>
      </div>
   )
}
