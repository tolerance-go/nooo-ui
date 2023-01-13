import { Config } from 'tailwindcss'

export type WidgetTailwindConfig = Omit<Config, 'content'>

export type OptionItem = {
   label: string
   value: string
}

export type WidgetItemProps = {
   categories: OptionItem[]
   type: OptionItem
   keywords: string[]
}

export type WidgetItemMeta = {
   props: WidgetItemProps
   frameworks?: {
      alpine?: boolean
      daisyui?: boolean
      kutty?: boolean
   }
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
