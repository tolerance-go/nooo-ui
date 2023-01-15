import { convertHTMLToJSX } from 'scripts/utils/convertHTMLToJSX'
import { describe, expect, test } from 'vitest'

describe('utils', async () => {
   test('convertHTMLToJSX', async () => {
      expect(await convertHTMLToJSX('<div>Hello world!</div>'))
         .toMatchInlineSnapshot(`
        "<div>Hello world!</div>
        "
      `)
   })
})
