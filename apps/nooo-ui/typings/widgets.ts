import { Config } from 'tailwindcss'

export type WidgetTailwindConfig = Omit<Config, 'content'>

export type WidgetItemMeta = {
   keywords: string[]
   props: Record<string, string>
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
