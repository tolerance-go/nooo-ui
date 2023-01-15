const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('postcss')
const semver = require('semver')
const fs = require('fs-extra')
const path = require('path')

const getMatchAvailableTwVersion = (
   /** @type {string[]} */ allAvailableTwVersions,
   /** @type {string} */ tailwindcssVersion,
) => {
   return allAvailableTwVersions
      .filter((version) => semver.satisfies(version, tailwindcssVersion))
      .sort((a, b) => (semver.eq(a, b) ? 0 : semver.gt(a, b) ? -1 : 1))[0]
}

module.exports.getMatchAvailableTwVersion = getMatchAvailableTwVersion

module.exports.getTailwindcssFromHtml = async (
   /** @type {string} */ html,
   /** @type {import('../../typings/widgets').WidgetTailwindConfig} */ configs,
   /** @type {string} */ tailwindcssVersion,
) => {
   const twPath = path.join(process.cwd(), 'tailwindcss-lib', 'tailwindcss')
   // 所有可用 tw 版本
   const allAvailableTwVersions = fs.readdirSync(twPath)

   const version = getMatchAvailableTwVersion(
      allAvailableTwVersions,
      tailwindcssVersion,
   )

   const tailwind = require(path.join(twPath, version))

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
