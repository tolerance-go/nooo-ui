import { DictionaryType } from 'get-dictionary'
import { FormConfigs } from 'typings/formConfigs'
import { OptionItem, WidgetData } from 'typings/widgets'
import { formConfigsAllOptions } from '../constants/formConfigsAllOptions'
import { ensureArray } from './ensureArray'

export const getDefaultFormConfigs = (dict?: DictionaryType): FormConfigs => {
   return {
      categories: {
         type: 'checkbox',
         options: [],
         title: dict?.filters.categories ?? '',
      },
      type: {
         type: 'radio',
         options: [
            {
               value: 'all',
               label: dict?.filters.radioAllOption ?? '',
            },
         ],
         title: dict?.filters.type ?? '',
      },
   }
}

export const defaultFormConfigs: FormConfigs = getDefaultFormConfigs()

// @TODO 动态获取，属性联动，同时数据字典懒加载
export const getFormConfigs = (
   widgetsData: WidgetData[],
   dict?: DictionaryType,
) => {
   const formConfigs: FormConfigs = widgetsData.reduce(
      (distFormConfigs, next) => {
         return Object.entries(next.meta.props).reduce(
            (_distFormConfigs, [key, config]) => {
               if (key === 'type' || key === 'categories') {
                  // 手动具体的类型
                  const specificConfig = ensureArray(config).map((item) =>
                     item in formConfigsAllOptions
                        ? formConfigsAllOptions[item]
                        : undefined,
                  )
                  _distFormConfigs[key].options.push(
                     ...specificConfig.filter(
                        // 过滤重复
                        (item): item is OptionItem =>
                           item
                              ? !_distFormConfigs[key].options.find(
                                   (it) => it.value === item.value,
                                )
                              : false,
                     ),
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
      getDefaultFormConfigs(dict),
   )

   return formConfigs
}
