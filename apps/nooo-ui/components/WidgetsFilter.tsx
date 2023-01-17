'use client'

import { WidgetsFilterToggler } from 'components/WidgetsFilterToggler'
import { FormConfigs } from 'typings/formConfigs'
import { Checkbox } from './filter-inputs/Checkbox'
import { Radio } from './filter-inputs/Radio'
import { useFormConfigsContext } from './FilterFormProvider'
import { useLocaleContext } from './LocaleContext'

export const WidgetsFilter = () => {
   const { dictionary, lang } = useLocaleContext()
   const { formConfigs } = useFormConfigsContext()

   return (
      <WidgetsFilterToggler>
         {(open) => {
            return open ? (
               <div>
                  {Object.entries(formConfigs).map(([key, config]) => {
                     const typeKey = key as keyof FormConfigs
                     if (config.type === 'checkbox') {
                        return (
                           <Checkbox
                              key={key}
                              name={key}
                              title={dictionary.filters[typeKey]}
                              options={config.options.map((item) => ({
                                 ...item,
                                 label:
                                    lang === 'zh-CN'
                                       ? item.zhLabel ?? item.label
                                       : item.label,
                              }))}
                           />
                        )
                     }
                     if (config.type === 'radio') {
                        return (
                           <Radio
                              key={key}
                              name={key}
                              title={dictionary.filters[typeKey]}
                              options={config.options.map((item) => ({
                                 ...item,
                                 label:
                                    lang === 'zh-CN'
                                       ? item.zhLabel ?? item.label
                                       : item.label,
                              }))}
                           />
                        )
                     }
                  })}
               </div>
            ) : null
         }}
      </WidgetsFilterToggler>
   )
}
