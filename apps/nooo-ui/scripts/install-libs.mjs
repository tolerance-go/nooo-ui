#!/usr/bin/env zx
import { flattenDeep } from 'lodash-es'

const tailwindcssList = (await $`ls tailwindcss-lib/tailwindcss`).stdout
   .split('\n')
   .filter(Boolean)

await Promise.all(
   tailwindcssList.map((item) => {
      return $`cd tailwindcss-lib/tailwindcss/${item}; npm install;`
   }),
)

const pluginsList = (await $`ls tailwindcss-lib/plugins`).stdout
   .split('\n')
   .filter(Boolean)

const plns = flattenDeep(
   await Promise.all(
      pluginsList.map(async (pluginItem) => {
         if (pluginItem.startsWith('@')) {
            return Promise.all(
               (await $`ls tailwindcss-lib/plugins/${pluginItem}`).stdout
                  .split('\n')
                  .filter(Boolean)
                  .map(async (item) =>
                     (
                        await $`ls tailwindcss-lib/plugins/${pluginItem}/${item}`
                     ).stdout
                        .split('\n')
                        .filter(Boolean)
                        .map((it) => `${pluginItem}/${item}/${it}`),
                  ),
            )
         }

         return (await $`ls tailwindcss-lib/plugins/${pluginItem}`).stdout
            .split('\n')
            .filter(Boolean)
            .map((item) => `${pluginItem}/${item}`)
      }),
   ),
)

await Promise.all(
   plns.map((item) => {
      return $`cd tailwindcss-lib/plugins/${item}; npm install;`
   }),
)
