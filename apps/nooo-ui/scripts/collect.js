const { cac } = require('cac')
const glob = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const { version } = require('../package.json')
const { collectWidgetData } = require('./utils/collectWidgetData')

const dataPath = path.join(process.cwd(), '.data')

fs.ensureDirSync(dataPath)

const main = async () => {
   const cli = cac('pnpm collect')

   cli.command(
      '[glob]',
      "Collect file with glob, eg: 'widgets/**/template.html'",
      {
         ignoreOptionDefaultValue: true,
      },
   ).action(async (/** @type {string} */ globPath, flags) => {
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
   })

   cli.help()

   cli.version(version)

   cli.parse(process.argv, { run: false })
   await cli.runMatchedCommand()
}

main()
