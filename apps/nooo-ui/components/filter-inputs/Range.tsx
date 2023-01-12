export const Range = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
         >
            range
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='h-full flex items-center'>
               <input
                  id='small-range'
                  type='range'
                  defaultValue={50}
                  className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
               />
               <span className='px-2'>78</span>
            </div>
         </div>
      </div>
   )
}
