import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import { WidgetTailwindConfig } from 'typings/widgets'

export const getTailwindcssFromHtml = async (
   html: string,
   configs?: WidgetTailwindConfig,
) => {
   return postcss([
      tailwind({
         darkMode: 'class',
         ...configs,
         content: [
            {
               raw: html,
            },
         ],
         // corePlugins: {
         //    preflight: false,
         // },
      }),
      autoprefixer(),
      cssnano(),
   ])
      .process('@tailwind base; @tailwind components; @tailwind utilities', {
         from: undefined,
      })
      .then((result) => result.css)
}
