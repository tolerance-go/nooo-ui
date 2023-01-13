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

export type WidgetBaseFrameworks = {
   alpine?: string
   daisyui?: string
   kutty?: string
}

export type WidgetItemMeta = {
   props: WidgetItemProps
   frameworks?: WidgetBaseFrameworks
   mobile?:
      | boolean
      | {
           type: 'top' | 'center' | 'bottom' | 'page'
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
