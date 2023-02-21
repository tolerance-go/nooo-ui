export const MultipleSelect = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='flex w-52 items-center justify-center bg-gray-50 p-2'
         >
            multiple select
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div>
               <select
                  multiple
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-sky-500 focus:ring-sky-500'
               >
                  <option selected>Choose countries</option>
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
