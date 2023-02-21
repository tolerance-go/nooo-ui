export const Select = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='flex w-52 items-center justify-center bg-gray-50 p-2'
         >
            select
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div>
               <label htmlFor='underline_select' className='sr-only'>
                  Underline select
               </label>
               <select
                  id='underline_select'
                  className='peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 py-2 text-sm focus:border-sky-500 focus:ring-sky-500'
                  defaultValue={'df'}
               >
                  <option value={'df'}>Choose a country</option>
                  <option value='US'>United States</option>
                  <option value='CA'>Canada</option>
                  <option value='FR'>France</option>
                  <option value='DE'>Germany</option>
               </select>
            </div>
         </div>
      </div>
   )
}
