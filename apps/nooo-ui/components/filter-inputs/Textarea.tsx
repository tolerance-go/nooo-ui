export const Textarea = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
         >
            textarea
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div>
               <label htmlFor='text-area' className='sr-only'>
                  Underline select
               </label>
               <textarea
                  id='text-area'
                  className='block px-2.5 py-2 w-full rounded-lg text-sm bg-transparent border-gray-300 appearance-none focus:ring-sky-500 focus:border-sky-500 peer'
                  placeholder='请输入'
               ></textarea>
            </div>
         </div>
      </div>
   )
}
