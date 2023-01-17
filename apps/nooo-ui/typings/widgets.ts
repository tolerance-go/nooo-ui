import { Config } from 'tailwindcss'

export type WidgetTailwindConfig = Omit<Config, 'content'>

export type OptionItem = {
   label: string
   zhLabel?: string
   value: string
}

export type WidgetItemProps = {
   categories: string[]
   type: string
   keywords: string[]
   zhKeywords?: string[]
}

export type WidgetBaseFrameworks = {
   alpine?: string
}

export type WidgetBasePlugins = {
   daisyui?: string
   kutty?: string
}

export type WidgetItemMeta = {
   props: WidgetItemProps
   frameworks?: WidgetBaseFrameworks
   plugins?: WidgetBasePlugins
   tailwindcssVersion: string
   mobile?:
      | boolean
      | {
           type: 'top' | 'center' | 'bottom' | 'page'
        }
   theme?: boolean
   createDate: string
   updateDate: string
   frameHeight?: number | string
   playgroundLink?: string
}

export type WidgetSegmentedMeta = {}

export type WidgetData = {
   tailwindConfig: WidgetTailwindConfig
   tailwindConfigCode: string
   css: string
   html: string
   jsx: string
   vue: string
   meta: WidgetItemMeta
   segmentedMetas: WidgetSegmentedMeta[]
   key: string
}
