'use client'

import clsx from 'clsx'
import { useLocaleContext } from 'components/LocaleContext'
import { formConfigsAllOptions } from 'constants/formConfigsAllOptions'
import { useFormContext } from 'react-hook-form'
import { WidgetData } from 'typings/widgets'
import { backPageTop } from 'utils/backPageTop'

type LiteItem = {
   title: string
   content: React.ReactNode
}

export const WidgetInfo = ({ data }: { data: WidgetData }) => {
   const { setValue } = useFormContext()
   const { dictionary, lang } = useLocaleContext()

   const list: LiteItem[] = [
      {
         title: dictionary.widgetPanel.info.keywords,
         content: (
            <div className='inline-flex space-x-1'>
               {(lang === 'en'
                  ? data.meta.props.keywords
                  : data.meta.props.zhKeywords ?? data.meta.props.keywords
               ).map((item) => (
                  <span
                     onClick={() => {
                        setValue('keywords', item)
                        backPageTop()
                     }}
                     className='cursor-pointer rounded-full bg-sky-100 px-3 py-1.5 text-xs hover:underline dark:bg-sky-800'
                     key={item}
                  >
                     {item}
                  </span>
               ))}
            </div>
         ),
      },
      {
         title: dictionary.filters.type,
         content: (() => {
            try {
               return lang === 'en'
                  ? formConfigsAllOptions[data.meta.props.type].label
                  : formConfigsAllOptions[data.meta.props.type].zhLabel ??
                       formConfigsAllOptions[data.meta.props.type].label
            } catch (error) {
               console.log(formConfigsAllOptions, data.meta.props.type)
               throw error
            }
         })(),
      },
      {
         title: dictionary.filters.categories,
         content: data.meta.props.categories
            .map((item) => {
               try {
                  return lang === 'en'
                     ? formConfigsAllOptions[item].label
                     : formConfigsAllOptions[item].zhLabel ??
                          formConfigsAllOptions[item].label
               } catch (error) {
                  console.log(formConfigsAllOptions, item)
                  throw error
               }
            })
            .join(', '),
      },
      {
         title: dictionary.widgetPanel.info.tailwindcssVersion,
         content: data.meta.tailwindcssVersion,
      },
   ]
      .concat(
         data.meta.frameworks
            ? {
                 title: dictionary.widgetPanel.info.frameworksVersion,
                 content: Object.entries(data.meta.frameworks)
                    .map(([name, version]) => {
                       return `${name}@${version}`
                    })
                    .join(', '),
              }
            : [],
      )
      .concat(
         data.meta.plugins
            ? {
                 title: dictionary.widgetPanel.info.pluginsVersion,
                 content: Object.entries(data.meta.plugins)
                    .map(([name, version]) => {
                       return `${name}@${version}`
                    })
                    .join(', '),
              }
            : [],
      )
   return (
      <div className='group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition hover:bg-gray-50 hover:text-sky-600 dark:border-gray-700 dark:hover:bg-gray-900'>
         <svg
            className='h-4 w-4'
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
         <div className='absolute top-full right-1/2 z-10 hidden -translate-y-2 cursor-default rounded-lg bg-white shadow-lg transition group-hover:block dark:border dark:border-gray-800 dark:bg-black dark:shadow-none'>
            <div className='relative w-max overflow-x-auto rounded-md'>
               <table className='w-full text-left text-xs text-gray-500 transition'>
                  <tbody>
                     {list.map((item, index) => {
                        return (
                           <tr
                              key={item.title}
                              className='border-b border-gray-200 transition dark:border-gray-800'
                           >
                              <th
                                 scope='row'
                                 className={clsx(
                                    'whitespace-nowrap bg-gray-50 px-8 font-medium transition dark:bg-gray-900',
                                    index === 0
                                       ? 'pt-4 pb-3'
                                       : index === list.length - 1
                                       ? 'pb-4 pt-3'
                                       : 'py-3',
                                 )}
                              >
                                 {item.title}
                              </th>
                              <td
                                 className={clsx(
                                    'max-w-md px-8 text-gray-900 transition dark:text-gray-100',
                                    index === 0
                                       ? 'pt-4 pb-3'
                                       : index === list.length - 1
                                       ? 'pb-4 pt-3'
                                       : 'py-3',
                                 )}
                              >
                                 {item.content}
                              </td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
