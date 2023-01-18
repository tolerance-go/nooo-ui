const fs = require('fs-extra')
const { Random } = require('mockjs')
const Mustache = require('mustache')
const path = require('path')
const invariant = require('tiny-invariant')
const { convertHTMLToJSX } = require('./convertHTMLToJSX')
const { getTailwindcssFromHtml } = require('./getTailwindcssFromHtml')
const requireUncached = require('./requireUncached')

const widgetRootPath = path.join(process.cwd(), 'widgets')
const publicPath = path.join(process.cwd(), 'public')
const publicAssetsPath = path.join(publicPath, '_assets')

const copyAssetsToPublic = (/** @type {string} */ assetsPath) => {
   const relativeAssetsPath = path.relative(process.cwd(), assetsPath)

   if (fs.existsSync(assetsPath) && fs.statSync(assetsPath).isDirectory()) {
      fs.readdirSync(assetsPath).forEach((asset) => {
         fs.emptyDirSync(path.join(publicAssetsPath, relativeAssetsPath))

         fs.copyFileSync(
            path.join(assetsPath, asset),
            path.join(publicAssetsPath, relativeAssetsPath, asset),
         )
      })
   }
}

const replaceTailwindConfigTypeImports = (code) => {
   return code.replace(
      /\/\*\* @type \{import\('(\.\.\/)*typings\/widgets'\)\.WidgetTailwindConfig\} \*\//,
      `/** @type {import('tailwindcss').Config} */`,
   )
}

const replaceTailwindConfigPluginsImports = (code) => {
   return code.replace(
      /require\('(\.\.\/)*tailwindcss-lib\/plugins\/(.*?)\/(.*?)'\)/g,
      `require('$2') /** $2@$3 */`,
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

   const html = Mustache.render(tpl, {
      // https://github.com/nuysoft/Mock/wiki/Mock.Random
      ctitle: () => Random.ctitle(),
      cword: () => Random.cword(),
      'cword-2': () => Random.cword(2),
      cparagraph: () => Random.cparagraph(3, 7),
      csentence: () => Random.csentence(12, 18),
      'csentence-sm': () => Random.csentence(6, 12),
      // 类尺寸 api，返回固定数值而不是范围，利于精确设计布局
      'csentence-lg': () => Random.csentence(25),
      cfirst: () => Random.cfirst(),
      cname: () => Random.cname(),

      title: () => Random.title(),
      word: () => Random.word(),
      'word-2': () => Random.word(2),
      paragraph: () => Random.paragraph(3, 7),
      sentence: () => Random.sentence(12, 18),
      'sentence-sm': () => Random.sentence(6, 12),
      'sentence-lg': () => Random.sentence(25),
      first: () => Random.first(),
      name: () => Random.name(),
   })

   /** @type {import('../../typings/widgets').WidgetData} */
   const data = {
      css,
      html,
      jsx: convertHTMLToJSX(html),
      vue: `<template>
      ${html}
      </template>`,
      meta,
      tailwindConfig,
      tailwindConfigCode: replaceTailwindConfigPluginsImports(
         replaceTailwindConfigTypeImports(tailwindConfigCode),
      ),
      segmentedMetas,
      key: path.relative(process.cwd(), widgetPath).replace(/\//g, '_'),
   }

   return data
}

module.exports.copyAssetsToPublic = copyAssetsToPublic
module.exports.collectSegmentedMetas = collectSegmentedMetas
module.exports.replaceTailwindConfigTypeImports =
   replaceTailwindConfigTypeImports
module.exports.replaceTailwindConfigPluginsImports =
   replaceTailwindConfigPluginsImports
