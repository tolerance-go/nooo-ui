import { OptionItem, WidgetData, WidgetItemTargetProps } from 'typings/widgets'

export type MultipleConfig = {
   type: 'radio' | 'select' | 'multiple-select' | 'checkbox'
   options: {
      value: string
      label: string
   }[]
}

export type FormConfigs = Record<
   string,
   {
      title: string
   } & (
      | {
           type: 'toggle'
        }
      | {
           type: 'textarea' | 'text'
        }
      | MultipleConfig
      | {
           type: 'range'
        }
   )
>

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

               if (typeof config === 'object') {
                  // 手动具体的类型
                  const specificConfig = config as WidgetItemTargetProps

                  if (specificConfig.type === 'checkbox') {
                     if (_distFormConfigs[key]) {
                        ;(_distFormConfigs[key] as MultipleConfig).options.push(
                           ...specificConfig.target,
                        )
                     } else {
                        _distFormConfigs[key] = {
                           type: 'checkbox',
                           options: specificConfig.target,
                           title: specificConfig.title,
                        }
                     }
                  }
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
      } as FormConfigs & {
         categories: MultipleConfig
         type: MultipleConfig
      },
   )

   return formConfigs
}
