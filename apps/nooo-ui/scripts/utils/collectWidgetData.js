const fs = require('fs-extra')
const { Random } = require('mockjs')
const Mustache = require('mustache')
const path = require('path')
const invariant = require('tiny-invariant')
const { getTailwindcssFromHtml } = require('./getTailwindcssFromHtml')
const requireUncached = require('./requireUncached')

const widgetRootPath = path.join(process.cwd(), 'widgets')
const publicPath = path.join(process.cwd(), 'public')

const copyAssetsToPublic = (/** @type {string} */ assetsPath) => {
   const relativeAssetsPath = path.relative(process.cwd(), assetsPath)

   if (fs.existsSync(assetsPath) && fs.statSync(assetsPath).isDirectory()) {
      fs.readdirSync(assetsPath).forEach((asset) => {
         fs.emptyDirSync(path.join(publicPath, relativeAssetsPath))

         fs.copyFileSync(
            path.join(assetsPath, asset),
            path.join(publicPath, relativeAssetsPath, asset),
         )
      })
   }
}

const removeTailwindConfigTypeImports = (code) => {
   return code.replace(
      /\/\*\* @type \{import\('(\.\.\/)*typings\/widgets'\)\.WidgetTailwindConfig\} \*\/\n/,
      '',
   )
}

/**
 *
 * @param widgetPath eg: ${cwd}/widgets/mobile/button/button-1
 */
const collectSegmentedMetas = async (
   /** @type {string} */ widgetPath,
   /** @type {import('../../typings/widgets').WidgetSegmentedMeta[]} */ segmenteds = [],
) => {
   const upper = path.dirname(widgetPath)

   if (upper === widgetRootPath) {
      return []
   }

   const segMetaPath = path.join(upper, 'meta.js')

   if (fs.existsSync(segMetaPath)) {
      segmenteds.unshift(requireUncached(segMetaPath))
   }

   await collectSegmentedMetas(upper, segmenteds)

   return segmenteds
}

/**
 *
 * @param widgetPath eg: ${cwd}/widgets/mobile/button/button-1
 */
module.exports.collectWidgetData = async (/** @type {string} */ widgetPath) => {
   const metaPath = path.join(widgetPath, 'meta.js')
   const tailwindConfigPath = path.join(widgetPath, 'tailwind.config.js')
   const tplPath = path.join(widgetPath, 'template.html')

   const assetsPath = path.join(widgetPath, 'assets')
   copyAssetsToPublic(assetsPath)

   const segmentedMetas = await collectSegmentedMetas(widgetPath)

   /** @type {import('../../typings/widgets').WidgetItemMeta | undefined} */
   let meta

   /** @type {string | undefined} */
   let tpl

   /** @type {import('../../typings/widgets').WidgetTailwindConfig | undefined} */
   let tailwindConfig

   if (fs.existsSync(metaPath)) {
      meta = requireUncached(metaPath)
   }

   if (fs.existsSync(tailwindConfigPath)) {
      tailwindConfig = requireUncached(tailwindConfigPath)
   }

   if (fs.existsSync(tplPath)) {
      tpl = fs.readFileSync(tplPath, { encoding: 'utf-8' })
   }

   const tailwindConfigCode = fs.readFileSync(tailwindConfigPath, {
      encoding: 'utf-8',
   })

   invariant(tailwindConfig, `${tailwindConfigPath} not find.`)
   invariant(meta, `${metaPath} not find.`)
   invariant(tpl, `${tplPath} not find.`)

   const css = await getTailwindcssFromHtml(
      tpl,
      tailwindConfig,
      meta.tailwindcssVersion,
   )

   /** @type {import('../../typings/widgets').WidgetData} */
   const data = {
      css,
      html: Mustache.render(tpl, {
         // https://github.com/nuysoft/Mock/wiki/Mock.Random
         title: () => Random.ctitle(),
         word: () => Random.cword(),
         'word-2': () => Random.cword(2),
         paragraph: () => Random.cparagraph(3, 7),
         sentence: () => Random.csentence(12, 18),
         // 类尺寸 api，返回固定数值而不是范围，利于精确设计布局
         'sentence-lg': () => Random.csentence(25),
         first: () => Random.cfirst(),
         name: () => Random.cname(),
      }),
      meta,
      tailwindConfig,
      tailwindConfigCode: removeTailwindConfigTypeImports(tailwindConfigCode),
      segmentedMetas,
      key: path.relative(process.cwd(), widgetPath).replace(/\//g, '_'),
   }

   return data
}

module.exports.copyAssetsToPublic = copyAssetsToPublic
module.exports.collectSegmentedMetas = collectSegmentedMetas
module.exports.removeTailwindConfigTypeImports = removeTailwindConfigTypeImports
