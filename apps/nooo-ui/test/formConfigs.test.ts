import dict from 'dictionaries/en.json'
import { getDefaultFormValuesFromFormConfigs } from 'utils/getDefaultFormValuesFromFormConfigs'
import { getFilterWidgetsData, keywordIsHit } from 'utils/getFilterWidgetsData'
import { getFormConfigs } from 'utils/getFormConfigs'
import { describe, expect, test } from 'vitest'

describe('formConfigs', async () => {
   test('getFormConfigs', async () => {
      expect(
         getFormConfigs(
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     mobile: { type: 'page' },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
            ],
            dict,
         ),
      ).toMatchInlineSnapshot(`
        {
          "categories": {
            "options": [],
            "title": "categories",
            "type": "checkbox",
          },
          "platform": {
            "options": [
              {
                "label": "all",
                "value": "platform_all",
              },
              {
                "label": "mobile",
                "value": "mobile",
                "zhLabel": "移动端",
              },
            ],
            "title": "type",
            "type": "radio",
          },
          "type": {
            "options": [
              {
                "label": "all",
                "value": "type_all",
              },
              {
                "label": "page",
                "value": "page",
                "zhLabel": "页面",
              },
            ],
            "title": "type",
            "type": "radio",
          },
        }
      `)
   })

   test('getFilterWidgetsData categories all false', async () => {
      expect(
         getFilterWidgetsData(
            {
               categories: {
                  banner: false,
                  page: false,
               },
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot(`
        [
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/app/page/page-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "mobile": {
                "type": "page",
              },
              "props": {
                "categories": [],
                "keywords": [],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
              {
                "ff": "true",
              },
            ],
            "tailwindConfig": {},
            "tailwindConfigCode": "",
            "vue": "",
          },
        ]
      `)
   })

   test('getFilterWidgetsData categories some true', async () => {
      expect(
         getFilterWidgetsData(
            {
               categories: {
                  banner: true,
                  page: false,
               },
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',

                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot(`
        [
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/app/page/page-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "mobile": {
                "type": "page",
              },
              "props": {
                "categories": [],
                "keywords": [],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
              {
                "ff": "true",
              },
            ],
            "tailwindConfig": {},
            "tailwindConfigCode": "",
            "vue": "",
          },
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/web/banner/banner-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "frameHeight": 750,
              "props": {
                "categories": [
                  "banner",
                ],
                "keywords": [],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
            ],
            "tailwindConfig": {
              "darkMode": "class",
            },
            "tailwindConfigCode": "module.exports = { darkMode: 'class' };",
            "vue": "",
          },
        ]
      `)
   })

   test('getFilterWidgetsData keywords empty', async () => {
      expect(
         getFilterWidgetsData(
            {
               keywords: 'other',
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: ['home'],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',

                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot('[]')
   })

   test('keywordIsHit', () => {
      expect(keywordIsHit('home', [])).toBe(false)
      expect(keywordIsHit('home', ['home'])).toBe(true)
      expect(keywordIsHit('home', ['home-home'])).toBe(true)
      expect(keywordIsHit('home', ['home', 'other'])).toBe(true)
   })

   test('getFilterWidgetsData keywords some hit', async () => {
      expect(
         getFilterWidgetsData(
            {
               keywords: 'home',
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: ['home'],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',

                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot(`
        [
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/app/page/page-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "mobile": {
                "type": "page",
              },
              "props": {
                "categories": [],
                "keywords": [
                  "home",
                ],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
              {
                "ff": "true",
              },
            ],
            "tailwindConfig": {},
            "tailwindConfigCode": "",
            "vue": "",
          },
        ]
      `)
   })

   test('getFilterWidgetsData type all', async () => {
      expect(
         getFilterWidgetsData(
            {
               type: 'all',
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',

                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot('[]')
   })

   test('getFilterWidgetsData type app', async () => {
      expect(
         getFilterWidgetsData(
            {
               type: 'page',
               platform: 'mobile',
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: [],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',

                     mobile: {
                        type: 'page',
                     },
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: {},
                  tailwindConfigCode: '',
                  segmentedMetas: [{ gg: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: 'page',
                        platform: 'mobile',
                        categories: ['banner'],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                     tailwindcssVersion: '',
                  },
                  jsx: '',
                  vue: '',
                  tailwindConfig: { darkMode: 'class' },
                  tailwindConfigCode: "module.exports = { darkMode: 'class' };",
                  segmentedMetas: [{ gg: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toMatchInlineSnapshot(`
        [
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/app/page/page-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "mobile": {
                "type": "page",
              },
              "props": {
                "categories": [],
                "keywords": [],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
              {
                "ff": "true",
              },
            ],
            "tailwindConfig": {},
            "tailwindConfigCode": "",
            "vue": "",
          },
          {
            "css": "",
            "html": "",
            "jsx": "",
            "key": "widgets/web/banner/banner-1",
            "meta": {
              "createDate": "2023-01-01 00:00:00",
              "frameHeight": 750,
              "props": {
                "categories": [
                  "banner",
                ],
                "keywords": [],
                "platform": "mobile",
                "type": "page",
              },
              "tailwindcssVersion": "",
              "updateDate": "2023-01-01 00:00:00",
            },
            "segmentedMetas": [
              {
                "gg": "true",
              },
            ],
            "tailwindConfig": {
              "darkMode": "class",
            },
            "tailwindConfigCode": "module.exports = { darkMode: 'class' };",
            "vue": "",
          },
        ]
      `)
   })

   test('form configs', async () => {
      expect(
         getDefaultFormValuesFromFormConfigs({
            categories: {
               options: [
                  {
                     label: 'page',
                     value: 'page',
                  },
                  {
                     label: 'banner',
                     value: 'banner',
                  },
               ],
               title: '分类',
               type: 'checkbox',
            },
            type: {
               options: [
                  {
                     label: '全部',
                     value: 'type_all',
                  },
                  {
                     label: 'app',
                     value: 'app',
                  },
                  {
                     label: 'web',
                     value: 'web',
                  },
               ],
               title: '类型',
               type: 'radio',
            },
            platform: {
               options: [
                  {
                     label: '全部',
                     value: 'platform_all',
                  },
                  {
                     label: 'app',
                     value: 'app',
                  },
                  {
                     label: 'web',
                     value: 'web',
                  },
               ],
               title: '类型',
               type: 'radio',
            },
         }),
      ).toMatchInlineSnapshot(`
        {
          "categories": {
            "banner": true,
            "page": true,
          },
          "platform": "platform_all",
          "type": "type_all",
        }
      `)
   })
})
