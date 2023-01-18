const { cac } = require('cac')
const glob = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const { version } = require('../package.json')
const { collectFromGlob } = require('./utils/collectFromGlob')
const { collectWidgetData } = require('./utils/collectWidgetData')
const chokidar = require('chokidar')

const dataPath = path.join(process.cwd(), '.data')

fs.ensureDirSync(dataPath)

const main = async () => {
   const cli = cac('pnpm watch')

   cli.command(
      '[glob]',
      "Collect file with glob, eg: 'widgets/**/list-1/template.html'",
      {
         ignoreOptionDefaultValue: true,
      },
   ).action(async (/** @type {string} */ globPath, flags) => {
      chokidar
         .watch([globPath], {
            ignoreInitial: false,
         })
         .on('all', async (type, pathname) => {
            console.log(`[${type}]:`, pathname)
            await collectFromGlob(pathname)
         })
   })

   cli.help()

   cli.version(version)

   cli.parse(process.argv, { run: false })
   await cli.runMatchedCommand()
}

main()
