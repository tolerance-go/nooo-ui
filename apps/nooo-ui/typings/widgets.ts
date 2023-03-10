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
   platform: string
   keywords: string[]
   zhKeywords?: string[]
}

export type WidgetBaseFrameworks = {
   alpine?: string
} & Record<string, string>

export type WidgetBasePlugins = {
   daisyui?: string
   kutty?: string
} & Record<string, string>

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
   theme?: boolean | 'dark'
   createDate: string
   updateDate: string
   frameHeight?: number | string | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   frameBodyStyle?: string
   playgroundLink?: string
}

export type WidgetSegmentedMeta = {}

export type WidgetData = {
   tailwindEntryIsScss?: boolean
   tailwindConfig: WidgetTailwindConfig
   tailwindConfigCode: string
   tailwindEntryCss: string
   css: string
   html: string
   frameWrap?: string
   frameWrapCss?: string
   jsx: string
   vue: string
   meta: WidgetItemMeta
   segmentedMetas: WidgetSegmentedMeta[]
   key: string
}
