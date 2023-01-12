import { FormConfigs, MultipleConfig } from './getFormConfigs'

export const getDefaultFormValuesFromFormConfigs = (
   formConfigs: FormConfigs,
) => {
   return Object.entries(formConfigs).reduce(
      (distDefaultFromValues, [key, config]) => {
         if (config.type === 'checkbox') {
            return {
               ...distDefaultFromValues,
               [key]: (config as MultipleConfig).options.reduce((acc, item) => {
                  return {
                     ...acc,
                     [item.value]: true,
                  }
               }, {}),
            }
         }

         if (config.type === 'radio') {
            return {
               ...distDefaultFromValues,
               [key]: 'all',
            }
         }

         return distDefaultFromValues
      },
      {},
   )
}
