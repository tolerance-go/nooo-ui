const { cac } = require('cac')
const { version } = require('../package.json')
const { collectFromGlob } = require('./utils/collectFromGlob')

const main = async () => {
   const cli = cac('pnpm collect')

   cli.command(
      '[glob]',
      "Collect file with glob, eg: 'widgets/**/template.html'",
      {
         ignoreOptionDefaultValue: true,
      },
   ).action(async (/** @type {string} */ globPath, flags) => {
      await collectFromGlob(globPath)
   })

   cli.help()

   cli.version(version)

   cli.parse(process.argv, { run: false })
   await cli.runMatchedCommand()
}

main()
