import fs from 'fs-extra'
import path from 'path'
import invariant from 'tiny-invariant'
import {
   WidgetData,
   WidgetItemMeta,
   WidgetSegmentedMeta,
   WidgetTailwindConfig,
} from 'typings/widgets'
import { getTailwindcssFromHtml } from './getTailwindcssFromHtml'

const widgetRootPath = path.join(process.cwd(), 'widgets')
const publicPath = path.join(process.cwd(), 'public')

export const copyAssetsToPublic = (assetsPath: string) => {
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

/**
 *
 * @param widgetPath eg: ${cwd}/widgets/mobile/button/button-1
 */
export const collectSegmentedMetas = async (
   widgetPath: string,
   segmenteds: WidgetSegmentedMeta[] = [],
) => {
   const upper = path.dirname(widgetPath)

   if (upper === widgetRootPath) {
      return []
   }

   const segMetaPath = path.join(upper, 'meta.mjs')

   if (fs.existsSync(segMetaPath)) {
      segmenteds.unshift(
         // https://ar.al/2021/02/22/cache-busting-in-node.js-dynamic-esm-imports/
         (await import(`${segMetaPath}?update=${Date.now()}`)).default,
      )
   }

   await collectSegmentedMetas(upper, segmenteds)

   return segmenteds
}

/**
 *
 * @param widgetPath eg: ${cwd}/widgets/mobile/button/button-1
 */
export const collectWidgetData = async (
   widgetPath: string,
): Promise<WidgetData> => {
   const metaPath = path.join(widgetPath, 'meta.mjs')
   const tailwindConfigPath = path.join(widgetPath, 'tailwind.config.mjs')
   const tplPath = path.join(widgetPath, 'template.html')

   const assetsPath = path.join(widgetPath, 'assets')
   copyAssetsToPublic(assetsPath)

   const segmentedMetas = await collectSegmentedMetas(widgetPath)

   let meta: WidgetItemMeta | undefined,
      tpl: string | undefined,
      tailwindConfig: WidgetTailwindConfig | undefined
   if (fs.existsSync(metaPath)) {
      meta = (await import(`${metaPath}?update=${Date.now()}`)).default
   }

   if (fs.existsSync(tailwindConfigPath)) {
      tailwindConfig = (
         await import(`${tailwindConfigPath}?update=${Date.now()}`)
      ).default
   }

   if (fs.existsSync(tplPath)) {
      tpl = fs.readFileSync(tplPath, { encoding: 'utf-8' })
   }

   invariant(tailwindConfig, `${tailwindConfigPath} not find.`)
   invariant(meta, `${metaPath} not find.`)
   invariant(tpl, `${tplPath} not find.`)

   const css = await getTailwindcssFromHtml(tpl, tailwindConfig)

   return {
      css,
      html: tpl,
      meta,
      tailwindConfig,
      segmentedMetas,
      key: path.relative(process.cwd(), widgetPath),
   }
}
