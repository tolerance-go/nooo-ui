import { removeTailwindConfigTypeImports } from 'scripts/utils/collectWidgetData'
import { describe, expect, test } from 'vitest'

describe('replaces', async () => {
   test('collectSegmentedMetas', async () => {
      expect(
         removeTailwindConfigTypeImports(
            "/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */\nmodule.exports = {}\n",
         ),
      ).toMatchInlineSnapshot(`
        "module.exports = {}
        "
      `)
   })
})
