const fs = require('fs-extra')
const { Random } = require('mockjs')
const Mustache = require('mustache')
const path = require('path')
const invariant = require('tiny-invariant')
const { convertHTMLToJSX } = require('./convertHTMLToJSX')
const {
   getTailwindcssFromHtml,
   defaultTailwindEntryCss,
} = require('./getTailwindcssFromHtml')
const requireUncached = require('./requireUncached')

const widgetRootPath = path.join(process.cwd(), 'widgets')
const publicPath = path.join(process.cwd(), 'public')
const publicAssetsPath = path.join(publicPath, '_assets')

const copyAssetsToPublic = (/** @type {string} */ assetsPath) => {
   const relativeAssetsPath = path.relative(process.cwd(), assetsPath)

   if (fs.existsSync(assetsPath) && fs.statSync(assetsPath).isDirectory()) {
      fs.emptyDirSync(path.join(publicAssetsPath, relativeAssetsPath))
      fs.readdirSync(assetsPath).forEach((asset) => {
         fs.copyFileSync(
            path.join(assetsPath, asset),
            path.join(publicAssetsPath, relativeAssetsPath, asset),
         )
      })
   }
}

const replaceTailwindConfigSubImports = (code) => {
   return code.replace(
      /require\('(\.\.\/)*tailwindcss-lib\/tailwindcss\/(.*?)\/node_modules\/tailwindcss\/(.*?)'\)/g,
      `require('tailwindcss/$3')`,
   )
}

const replaceTailwindConfigTypeImports = (code) => {
   return code.replace(
      /\/\*\* @type \{import\('(\.\.\/)*typings\/widgets'\)\.WidgetTailwindConfig\} \*\//,
      `/** @type {import('tailwindcss').Config} */`,
   )
}

const replaceTailwindConfigPluginsImports = (
   code,
   /** @type {((pluginName, version) => {}) | undefined} */ callback,
) => {
   return code.replace(
      /require\('(\.\.\/)*tailwindcss-lib\/plugins\/(.*?)\/(.*?)(\/(.*?))?'\)/g,
      (a, b, c, d, e) => {
         if (c.startsWith('@')) {
            callback?.(`${c}/${d}`, e.slice(1))
            return `require('${c}/${d}') /** ${c}/${d}@${e.slice(1)} */`
         }

         callback?.(c, d)
         return `require('${c}') /** ${c}@${d} */`
      },
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
   const frameWrapPath = path.join(widgetPath, 'frame-wrap.html')
   const globalCssPath = path.join(widgetPath, 'global.css')

   const assetsPath = path.join(widgetPath, 'assets')
   copyAssetsToPublic(assetsPath)

   const segmentedMetas = await collectSegmentedMetas(widgetPath)

   /** @type {import('../../typings/widgets').WidgetItemMeta | undefined} */
   let meta

   /** @type {string | undefined} */
   let tpl

   /** @type {import('../../typings/widgets').WidgetTailwindConfig | undefined} */
   let tailwindConfig

   /** @type {string | undefined} */
   let frameWrap

   /** @type {string | undefined} */
   let globalCss

   if (fs.existsSync(globalCssPath)) {
      globalCss = fs.readFileSync(globalCssPath, { encoding: 'utf-8' })
   }

   if (fs.existsSync(frameWrapPath)) {
      frameWrap = fs.readFileSync(frameWrapPath, { encoding: 'utf-8' })
   }

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

      avatar: () =>
         `https://api.dicebear.com/5.x/identicon/svg?seed=${Math.random()}`,
      image: () =>
         `https://source.unsplash.com/random/400x400?sig=${Math.floor(
            Math.random() * 10,
         )}`,
      dummyImage50x50: () => `https://dummyimage.com/50x50`,
      dummyImage100x100: () => `https://dummyimage.com/100x100`,
      dummyImage200x100: () => `https://dummyimage.com/200x100`,
      dummyImage800x400: () => `https://dummyimage.com/800x400`,
      dummyImage800x200: () => `https://dummyimage.com/800x200`,
      dummyImage800x800: () => `https://dummyimage.com/800x800`,
   })

   const css = await getTailwindcssFromHtml(
      html,
      tailwindConfig,
      meta.tailwindcssVersion,
      globalCss,
   )

   const tailwindEntryCss = globalCss ?? defaultTailwindEntryCss

   const frameWrapCss =
      frameWrap &&
      (await getTailwindcssFromHtml(
         frameWrap,
         tailwindConfig,
         meta.tailwindcssVersion,
         '@tailwind utilities',
      ))

   const plugins = {}

   const nextTailwindConfigCode = replaceTailwindConfigSubImports(
      replaceTailwindConfigPluginsImports(
         replaceTailwindConfigTypeImports(tailwindConfigCode),
         (pluginName, version) => {
            plugins[pluginName] = version
         },
      ),
   )

   const p = {
      ...plugins,
      ...meta.plugins,
   }

   const nextMeta = {
      ...meta,
      plugins: Object.keys(p).length ? p : undefined,
   }

   /** @type {import('../../typings/widgets').WidgetData} */
   const data = {
      css,
      html,
      frameWrap,
      frameWrapCss,
      tailwindEntryCss,
      jsx: convertHTMLToJSX(html),
      vue: `<template>
      ${html}
      </template>`,
      meta: nextMeta,
      tailwindConfig,
      tailwindConfigCode: nextTailwindConfigCode,
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

module.exports.replaceTailwindConfigSubImports = replaceTailwindConfigSubImports
