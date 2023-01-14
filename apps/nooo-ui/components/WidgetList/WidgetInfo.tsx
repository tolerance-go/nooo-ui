import { WidgetData } from 'typings/widgets'

export const WidgetInfo = ({ data }: { data: WidgetData }) => {
   return (
      <div className='w-9 h-9 flex justify-center dark:hover:bg-gray-900 dark:border-gray-700 transition hover:bg-gray-50 hover:text-sky-600 items-center border rounded-md group relative cursor-pointer'>
         <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
         </svg>
         <div className='group-hover:block hidden absolute top-full right-1/2 bg-white dark:bg-black transition shadow-lg rounded-lg -translate-y-2'>
            <div className='relative overflow-x-auto rounded-md w-max'>
               <table className='w-full text-xs text-left text-gray-500 transition'>
                  <tbody>
                     <tr className='border-b border-gray-200 dark:border-gray-800 transition'>
                        <th
                           scope='row'
                           className='px-8 pt-4 pb-3 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-900 transition'
                        >
                           搜索关键字
                        </th>
                        <td className='px-8 pt-4 pb-3 text-gray-900 dark:text-gray-100 transition'>
                           {data.meta.props.keywords.join(', ')}
                        </td>
                     </tr>
                     <tr className='border-b border-gray-200 dark:border-gray-800 transition'>
                        <th
                           scope='row'
                           className='px-8 py-3 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-900 transition'
                        >
                           类型
                        </th>
                        <td className='px-8 py-3 text-gray-900 dark:text-gray-100 transition'>
                           {data.meta.props.type.label}
                        </td>
                     </tr>
                     <tr className=''>
                        <th
                           scope='row'
                           className='px-8 pt-3 pb-4 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-900 transition'
                        >
                           分类
                        </th>
                        <td className='px-8 pt-3 pb-4 text-gray-900 dark:text-gray-100 transition'>
                           {data.meta.props.categories
                              .map((item) => item.label)
                              .join(', ')}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
