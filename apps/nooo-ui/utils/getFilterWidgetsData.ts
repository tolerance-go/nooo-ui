import { FieldValues } from 'react-hook-form'
import { OptionItem, WidgetData } from 'typings/widgets'

export const getFilterWidgetsData = (
   watchAllFields: FieldValues,
   widgetsData: WidgetData[],
) => {
   return widgetsData.filter((widgetData) => {
      return Object.entries(widgetData.meta.props).every(
         ([key, targetProps]) => {
            if (key === 'categories' && key in watchAllFields) {
               if (
                  (targetProps as OptionItem[]).some((item) => {
                     return watchAllFields[key][item.value] === false
                  })
               ) {
                  return false
               }
            }

            if (key === 'type' && key in watchAllFields) {
               if (watchAllFields[key] !== 'all') {
                  if (
                     (targetProps as OptionItem).value !== watchAllFields[key]
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
