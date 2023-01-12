export const Text = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
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
                  className='block px-2.5 py-2 w-full text-sm bg-transparent border-gray-300 rounded-lg peer focus:ring-sky-500 focus:border-sky-500'
                  placeholder='请输入'
               ></input>
            </div>
         </div>
      </div>
   )
}
