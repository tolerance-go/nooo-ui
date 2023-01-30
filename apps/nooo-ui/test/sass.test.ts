import path from 'path'
import sass from 'sass'
import { describe, expect, test } from 'vitest'

describe('sass', async () => {
   test('compile', async () => {
      const result = sass.compile(path.join(__dirname, 'global.scss'))
      expect(result).toMatchInlineSnapshot(`
        {
          "css": "@tailwind base;
        @tailwind components;
        @tailwind utilities;
        body {
          @apply antialiased;
        }

        .grid-margins {
          @apply mx-15px;
        }

        @screen md {
          .grid-margins {
            margin: 0 4%;
          }
        }
        /* 1440 max width + 58px left & right padding */
        @media only screen and (min-width: 1556px) {
          .grid-margins {
            @apply max-w-screen-xxl mx-auto;
          }
        }
        #toggle-animation {
          background-color: rgba(6, 27, 45, 0.6);
          min-width: initial;
          border: none;
          color: #8c9aa2;
          z-index: 2;
        }
        #toggle-animation:hover {
          @apply text-blueGreenLight;
        }",
          "loadedUrls": [
            "file:///Users/yarnb/fenxing/nooo-ui/apps/nooo-ui/test/global.scss",
          ],
        }
      `)
   })
})
