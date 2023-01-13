import { OptionItem, WidgetData } from 'typings/widgets'

export type MultipleConfig = {
   title: string
   type: 'radio' | 'select' | 'multiple-select' | 'checkbox'
   options: {
      value: string
      label: string
   }[]
}

export type FormConfigs = {
   categories: MultipleConfig
   type: MultipleConfig
}

export const getFormConfigs = (widgetsData: WidgetData[]) => {
   const formConfigs: FormConfigs = widgetsData.reduce(
      (distFormConfigs, next) => {
         return Object.entries(next.meta.props).reduce(
            (_distFormConfigs, [key, config]) => {
               if (key === 'type' || key === 'categories') {
                  // 手动具体的类型
                  const specificConfig = config as OptionItem | OptionItem[]
                  _distFormConfigs[key].options.push(
                     ...(Array.isArray(specificConfig)
                        ? specificConfig
                        : [specificConfig]),
                  )
                  return _distFormConfigs
               }

               return {
                  ..._distFormConfigs,
               }
            },
            distFormConfigs,
         )
      },
      {
         categories: {
            type: 'checkbox',
            options: [],
            title: '分类',
         },
         type: {
            type: 'radio',
            options: [
               {
                  value: 'all',
                  label: '全部',
               },
            ],
            title: '类型',
         },
      } as FormConfigs,
   )

   return formConfigs
}
