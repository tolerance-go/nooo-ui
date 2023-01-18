const glob = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const { collectWidgetData } = require('./collectWidgetData')

const dataPath = path.join(process.cwd(), '.data')

fs.ensureDirSync(dataPath)

const collectFromGlob = async (/** @type {string} */ globPath) => {
   const pathnames = await glob(globPath, {})

   const widgetPaths = pathnames
      .filter((item) => item.endsWith('template.html'))
      .map((item) => path.dirname(path.join(process.cwd(), item)))

   const widgetsData = await Promise.all(
      widgetPaths.map((item) => collectWidgetData(item)),
   )

   fs.writeFileSync(
      path.join(dataPath, 'widgets-data.ts'),
      `
import { WidgetData } from '../typings/widgets'

export const widgetsData: WidgetData[] = ${JSON.stringify(widgetsData, null, 2)}
    `,
      {
         encoding: 'utf-8',
      },
   )
}

module.exports.collectFromGlob = collectFromGlob
