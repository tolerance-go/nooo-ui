export const Select = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
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
                  className='block px-2.5 py-2 border-gray-300 focus:ring-sky-500 focus:border-sky-500 w-full text-sm bg-transparent appearance-none peer rounded-lg'
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
