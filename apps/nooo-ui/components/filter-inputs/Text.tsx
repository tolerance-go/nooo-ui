export const Text = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='flex w-52 items-center justify-center bg-gray-50 p-2'
         >
            text
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div>
               <label htmlFor='text-area' className='sr-only'>
                  Underline select
               </label>
               <input
                  type={'text'}
                  id='text-area'
                  className='peer block w-full rounded-lg border-gray-300 bg-transparent px-2.5 py-2 text-sm focus:border-sky-500 focus:ring-sky-500'
                  placeholder='请输入'
               ></input>
            </div>
         </div>
      </div>
   )
}
