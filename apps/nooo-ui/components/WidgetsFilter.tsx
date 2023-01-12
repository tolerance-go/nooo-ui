'use client'

import { WidgetsFilterToggler } from 'components/WidgetsFilterToggler'
import { formConfigs } from 'constants/formConfigs'
import { Checkbox } from './filter-inputs/Checkbox'
import { Radio } from './filter-inputs/Radio'

export const WidgetsFilter = () => {
   return (
      <WidgetsFilterToggler>
         {(open) => {
            return open ? (
               <div>
                  {Object.entries(formConfigs).map(([key, config]) => {
                     if (config.type === 'checkbox') {
                        return (
                           <Checkbox
                              key={key}
                              name={key}
                              title={config.title}
                              options={config.options}
                           />
                        )
                     }
                     if (config.type === 'radio') {
                        return (
                           <Radio
                              key={key}
                              name={key}
                              title={config.title}
                              options={config.options}
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
