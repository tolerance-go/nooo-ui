import { cac } from 'cac'
import glob from 'fast-glob'
import fs from 'fs-extra'
import path from 'path'
import { version } from '../package.json'
import { collectWidgetData } from './collectWidgetData'

const dataPath = path.join(process.cwd(), '.data')

fs.ensureDirSync(dataPath)

const main = async () => {
   const cli = cac('pnpm collect')

   cli.command(
      '[glob]',
      "Collect file with glob, eg: 'widgets/mobile/**/template.html'",
      {
         ignoreOptionDefaultValue: true,
      },
   ).action(async (globPath: string, flags) => {
      console.log(globPath, flags)

      const pathnames = await glob(globPath, {})

      const widgetPaths = pathnames
         .filter((item) => item.endsWith('template.html'))
         .map((item) => path.dirname(path.join(process.cwd(), item)))

      const widgetsData = await Promise.all(
         widgetPaths.map((item) => collectWidgetData(item)),
      )

      fs.writeJsonSync(path.join(dataPath, 'widgets-data.json'), widgetsData)
   })

   cli.help()

   cli.version(version)

   cli.parse(process.argv, { run: false })
   await cli.runMatchedCommand()
}

main()
