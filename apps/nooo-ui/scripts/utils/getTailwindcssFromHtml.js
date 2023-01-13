const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('postcss')
const tailwind = require('tailwindcss')

module.exports.getTailwindcssFromHtml = async (
   /** @type {string} */ html,
   /** @type {import('../../typings/widgets').WidgetTailwindConfig} */ configs,
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
