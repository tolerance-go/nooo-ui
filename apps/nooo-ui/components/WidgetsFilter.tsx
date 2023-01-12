'use client'

import { widgetsData } from '.data/widgets-data'
import { WidgetsFilterToggler } from 'components/WidgetsFilterToggler'
import { getFormConfigs } from 'utils/getFormConfigs'
import { Checkbox } from './filter-inputs/Checkbox'
import { Radio } from './filter-inputs/Radio'

const formConfigs = getFormConfigs(widgetsData)

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
