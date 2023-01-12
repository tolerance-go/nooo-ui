export const Toggle = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
         >
            toggle
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='flex items-center space-x-2 h-full'>
               <label className='relative inline-flex items-center cursor-pointer'>
                  <input type='checkbox' className='sr-only peer' />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600" />
                  <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                     Small toggle
                  </span>
               </label>
            </div>
         </div>
      </div>
   )
}
