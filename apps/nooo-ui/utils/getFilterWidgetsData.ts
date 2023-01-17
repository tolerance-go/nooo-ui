import { FieldValues } from 'react-hook-form'
import { WidgetData } from 'typings/widgets'
import { formConfigsAllOptions } from '../constants/formConfigsAllOptions'
import { ensureArray } from './ensureArray'

export const keywordIsHit = (keyword: string, keywords: string[]) => {
   if (keywords.some((item) => item.indexOf(keyword) > -1) === false) {
      return false
   }

   return true
}

export const convertMetaPropsValueEnumToOption = (key: string | string[]) => {
   return ensureArray(key)
      .map((key) => formConfigsAllOptions[key])
      .filter(Boolean)
}

export const getFilterWidgetsData = (
   watchAllFields: FieldValues,
   widgetsData: WidgetData[],
) => {
   return widgetsData.filter((widgetData) => {
      return Object.entries(widgetData.meta.props).every(
         ([key, targetProps]) => {
            if (key === 'keywords' && watchAllFields[key]) {
               if (
                  keywordIsHit(watchAllFields[key], targetProps as string[]) ===
                  false
               ) {
                  return false
               }
            }

            if (key === 'categories' && key in watchAllFields) {
               if (
                  convertMetaPropsValueEnumToOption(targetProps).some(
                     (item) => {
                        return watchAllFields[key][item.value] === false
                     },
                  )
               ) {
                  return false
               }
            }

            if (key === 'type' && key in watchAllFields) {
               if (watchAllFields[key] !== 'all') {
                  if (
                     convertMetaPropsValueEnumToOption(targetProps)[0].value !==
                     watchAllFields[key]
                  ) {
                     return false
                  }
               }
            }

            return true
         },
      )
   })
}
