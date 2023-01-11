'use client'

import { WidgetsFilterToggler } from 'components/WidgetsFilterToggler'

export const WidgetsFilter = () => {
   return (
      <WidgetsFilterToggler>
         {(open) => {
            return open ? (
               <div>
                  <div className='flex items-stretch border-b'>
                     <div
                        aria-label='left-area'
                        className='w-52 bg-gray-50 flex items-center justify-center p-2'
                     >
                        radio
                     </div>
                     <div className='flex-grow p-2' aria-label='right-area'>
                        <div className='flex items-center space-x-4 h-full'>
                           <div className='flex items-center'>
                              <input
                                 id='default-radio-1'
                                 type='radio'
                                 name='default-radio'
                                 className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              />
                              <label
                                 htmlFor='default-radio-1'
                                 className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                              >
                                 Default radio
                              </label>
                           </div>
                           <div className='flex items-center'>
                              <input
                                 defaultChecked
                                 id='default-radio-2'
                                 type='radio'
                                 name='default-radio'
                                 className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              />
                              <label
                                 htmlFor='default-radio-2'
                                 className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                              >
                                 Checked state
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>

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

                  <div className='flex items-stretch border-b'>
                     <div
                        aria-label='left-area'
                        className='w-52 bg-gray-50 flex items-center justify-center p-2'
                     >
                        checkbox
                     </div>
                     <div className='flex-grow p-2' aria-label='right-area'>
                        <div className='flex items-center h-full space-x-4'>
                           <div className='flex items-center'>
                              <input
                                 id='default-checkbox'
                                 type='checkbox'
                                 className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              />
                              <label
                                 htmlFor='default-checkbox'
                                 className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                              >
                                 Default checkbox
                              </label>
                           </div>
                           <div className='flex items-center'>
                              <input
                                 defaultChecked
                                 id='checked-checkbox'
                                 type='checkbox'
                                 className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                              />
                              <label
                                 htmlFor='checked-checkbox'
                                 className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                              >
                                 Checked state
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='flex items-stretch border-b'>
                     <div
                        aria-label='left-area'
                        className='w-52 bg-gray-50 flex items-center justify-center p-2'
                     >
                        select
                     </div>
                     <div className='flex-grow p-2' aria-label='right-area'>
                        <div>
                           <label
                              htmlFor='underline_select'
                              className='sr-only'
                           >
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
               </div>
            ) : null
         }}
      </WidgetsFilterToggler>
   )
}
