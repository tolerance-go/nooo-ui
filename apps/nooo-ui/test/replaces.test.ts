import {
   replaceTailwindConfigPluginsImports,
   replaceTailwindConfigTypeImports,
} from 'scripts/utils/collectWidgetData'
import { describe, expect, test } from 'vitest'

describe('replaces', async () => {
   test('collectSegmentedMetas', async () => {
      expect(
         replaceTailwindConfigTypeImports(
            "/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */\nmodule.exports = {}\n",
         ),
      ).toMatchInlineSnapshot(`
        "/** @type {import('tailwindcss').Config} */
        module.exports = {}
        "
      `)
   })

   test('replaceTailwindConfigPluginsImports', async () => {
      expect(
         replaceTailwindConfigPluginsImports(
            `/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */
            module.exports = {
               darkMode: 'class',
               plugins: [require('../../../../tailwindcss-lib/plugins/kutty/0.6.0')],
            }
            `,
         ),
      ).toMatchInlineSnapshot(`
        "/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */
                    module.exports = {
                       darkMode: 'class',
                       plugins: [require('kutty') /** kutty@0.6.0 */],
                    }
                    "
      `)

      expect(
         replaceTailwindConfigPluginsImports(
            `/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */
            module.exports = {
               darkMode: 'class',
               plugins: [require('../../../../tailwindcss-lib/plugins/kutty/0.6.0'), require('../../../../tailwindcss-lib/plugins/other/0.6.0')],
            }
            `,
         ),
      ).toMatchInlineSnapshot(`
        "/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */
                    module.exports = {
                       darkMode: 'class',
                       plugins: [require('kutty') /** kutty@0.6.0 */, require('other') /** other@0.6.0 */],
                    }
                    "
      `)
   })
})
