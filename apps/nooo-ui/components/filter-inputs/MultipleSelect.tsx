export const MultipleSelect = () => {
   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
         >
            multiple select
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <div>
               <select
                  multiple
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2'
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
