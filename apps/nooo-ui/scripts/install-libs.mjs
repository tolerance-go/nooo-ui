#!/usr/bin/env zx

const list = (await $`ls tailwindcss-lib/tailwindcss`).stdout
   .split('\n')
   .filter(Boolean)

await Promise.all(
   list.map((item) => {
      return $`cd tailwindcss-lib/tailwindcss/${item}; npm install;`
   }),
)
