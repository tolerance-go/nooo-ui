export const Range = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='flex w-52 items-center justify-center bg-gray-50 p-2'
         >
            range
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div className='flex h-full items-center'>
               <input
                  id='small-range'
                  type='range'
                  defaultValue={50}
                  className='range-sm h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
               />
               <span className='px-2'>78</span>
            </div>
         </div>
      </div>
   )
}
