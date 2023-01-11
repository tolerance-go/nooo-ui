import { Config } from 'tailwindcss'

export type WidgetTailwindConfig = Omit<Config, 'content'>

export type Option = {
   label: string
   value: string
}

export type WidgetItemProps = Record<
   string,
   | ({
        // 属性显示名称
        name: string
     } & (
        | {
             type: 'toggle'
             target: boolean
          }
        | {
             type: 'radio' | 'select'
             target: Option
          }
        | {
             type: 'textarea' | 'text'
             target: string
          }
        | {
             type: 'multiple-select' | 'checkbox'
             target: Option[]
          }
        | {
             type: 'range'
             target: number
          }
     ))
   | Option
   | Option[]
   | string
   | boolean
   | number
> & { categories: Option[]; type: Option }

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
