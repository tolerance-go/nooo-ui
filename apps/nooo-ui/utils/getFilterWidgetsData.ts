import { FieldValues } from 'react-hook-form'
import { WidgetData } from 'typings/widgets'
import { formConfigsAllOptions } from '../constants/formConfigsAllOptions'
import { Locale } from './../i18n-config'
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
   lang: Locale = 'en',
) => {
   return widgetsData.filter((widgetData) => {
      return Object.entries(widgetData.meta.props).every(
         ([prop, targetProps]) => {
            if (
               (lang === 'en' ? prop === 'keywords' : prop === 'zhKeywords') &&
               watchAllFields['keywords']
            ) {
               if (
                  keywordIsHit(
                     watchAllFields['keywords'],
                     targetProps as string[],
                  ) === false
               ) {
                  return false
               }
            }

            if (prop === 'categories' && prop in watchAllFields) {
               // 如果分类为空则不进行过滤
               if (widgetData.meta.props[prop].length === 0) {
                  return false
               }
               if (
                  convertMetaPropsValueEnumToOption(targetProps).some(
                     (item) => {
                        return watchAllFields[prop][item.value] === false
                     },
                  )
               ) {
                  return false
               }
            }

            if (
               (prop === 'type' || prop === 'platform') &&
               prop in watchAllFields
            ) {
               if (watchAllFields[prop] !== `${prop}_all`) {
                  if (
                     convertMetaPropsValueEnumToOption(targetProps)[0].value !==
                     watchAllFields[prop]
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
