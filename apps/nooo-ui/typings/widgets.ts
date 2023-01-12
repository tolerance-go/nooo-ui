import { Config } from 'tailwindcss'

export type WidgetTailwindConfig = Omit<Config, 'content'>

export type OptionItem = {
   label: string
   value: string
}

export type WidgetItemTargetProps =
   | {
        // 属性显示名称
        title: string
     } & (
        | {
             type: 'toggle'
             target: boolean
          }
        | {
             type: 'radio' | 'select'
             target: OptionItem
          }
        | {
             type: 'textarea' | 'text'
             target: string
          }
        | {
             type: 'multiple-select' | 'checkbox'
             target: OptionItem[]
          }
        | {
             type: 'range'
             target: number
          }
     )

export type WidgetItemProps = Record<
   string,
   WidgetItemTargetProps | OptionItem | OptionItem[] | string | boolean | number
> & { categories: OptionItem[]; type: OptionItem }

export type WidgetItemMeta = {
   keywords: string[]
   props: WidgetItemProps
   alpine?: boolean
   mobile?:
      | boolean
      // 机型
      | string
      | {
           type: 'top' | 'center' | 'bottom' | 'page'
           size: {
              width: number
              height: number
           }
        }
   center?: boolean
   theme?: boolean
   createDate: string
   updateDate: string
   frameHeight?: number | string
}

export type WidgetSegmentedMeta = {}

export type WidgetData = {
   tailwindConfig: WidgetTailwindConfig
   css: string
   html: string
   meta: WidgetItemMeta
   segmentedMetas: WidgetSegmentedMeta[]
   key: string
}
