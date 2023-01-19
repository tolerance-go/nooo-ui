import {
   replaceTailwindConfigPluginsImports,
   replaceTailwindConfigSubImports,
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

   test('replaceTailwindConfigSubImports', async () => {
      expect(
         replaceTailwindConfigSubImports(
            `
             const {
               colors,
             } = require('../../../../tailwindcss-lib/tailwindcss/3.2.4/node_modules/tailwindcss/colors');
             const plugin = require('../../../../tailwindcss-lib/tailwindcss/3.2.4/node_modules/tailwindcss/plugin');
            `,
         ),
      ).toMatchInlineSnapshot(`
        "
                     const {
                       colors,
                     } = require('tailwindcss/colors');
                     const plugin = require('tailwindcss/plugin');
                    "
      `)
   })

   test('replaceTailwindConfigPluginsImports', async () => {
      expect(
         replaceTailwindConfigPluginsImports(
            `
            module.exports = {
               darkMode: 'class',
               plugins: [require('../../../../tailwindcss-lib/plugins/kutty/0.6.0')],
            }
            `,
         ),
      ).toMatchInlineSnapshot(`
        "
                    module.exports = {
                       darkMode: 'class',
                       plugins: [require('kutty') /** kutty@0.6.0 */],
                    }
                    "
      `)

      expect(
         replaceTailwindConfigPluginsImports(
            `
            module.exports = {
               darkMode: 'class',
               plugins: [require('../../../../tailwindcss-lib/plugins/@tailwindcss/typography/0.5.9')],
            }
            `,
         ),
      ).toMatchInlineSnapshot(`
        "
                    module.exports = {
                       darkMode: 'class',
                       plugins: [require('@tailwindcss/typography') /** @tailwindcss/typography@0.5.9 */],
                    }
                    "
      `)

      expect(
         replaceTailwindConfigPluginsImports(
            `
            module.exports = {
               darkMode: 'class',
               plugins: [require('../../../../tailwindcss-lib/plugins/kutty/0.6.0'), require('../../../../tailwindcss-lib/plugins/other/0.6.0')],
            }
            `,
         ),
      ).toMatchInlineSnapshot(`
        "
                    module.exports = {
                       darkMode: 'class',
                       plugins: [require('kutty') /** kutty@0.6.0 */, require('other') /** other@0.6.0 */],
                    }
                    "
      `)
   })
})
