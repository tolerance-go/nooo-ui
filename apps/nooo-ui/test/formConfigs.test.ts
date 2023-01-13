import { getDefaultFormValuesFromFormConfigs } from 'utils/getDefaultFormValuesFromFormConfigs'
import { getFilterWidgetsData, keywordIsHit } from 'utils/getFilterWidgetsData'
import { getFormConfigs } from 'utils/getFormConfigs'
import { describe, expect, test } from 'vitest'

describe('formConfigs', async () => {
   test('getFormConfigs', async () => {
      expect(
         getFormConfigs([
            {
               css: '',
               html: '',
               meta: {
                  props: {
                     keywords: [],
                     type: { label: 'app', value: 'app' },
                     categories: [{ label: 'page', value: 'page' }],
                  },
                  createDate: '2023-01-01 00:00:00',
                  updateDate: '2023-01-01 00:00:00',
                  center: true,
                  mobile: { type: 'page', size: { width: 375, height: 812 } },
               },
               tailwindConfig: {},
               segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
               key: 'widgets/app/page/page-1',
            },
            {
               css: '',
               html: '',
               meta: {
                  props: {
                     keywords: [],
                     type: { label: 'web', value: 'web' },
                     categories: [{ label: 'banner', value: 'banner' }],
                  },
                  createDate: '2023-01-01 00:00:00',
                  updateDate: '2023-01-01 00:00:00',
                  frameHeight: 750,
               },
               tailwindConfig: { darkMode: 'class' },
               segmentedMetas: [{ asdfasdfff: 'true' }],
               key: 'widgets/web/banner/banner-1',
            },
         ]),
      ).toEqual({
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
                  value: 'all',
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
      })
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
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([])
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
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([
         {
            css: '',
            html: '',
            meta: {
               props: {
                  keywords: [],
                  type: { label: 'web', value: 'web' },
                  categories: [{ label: 'banner', value: 'banner' }],
               },
               createDate: '2023-01-01 00:00:00',
               updateDate: '2023-01-01 00:00:00',
               frameHeight: 750,
            },
            tailwindConfig: { darkMode: 'class' },
            segmentedMetas: [{ asdfasdfff: 'true' }],
            key: 'widgets/web/banner/banner-1',
         },
      ])
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
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([])
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
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([
         {
            css: '',
            html: '',
            key: 'widgets/app/page/page-1',
            meta: {
               center: true,
               createDate: '2023-01-01 00:00:00',
               mobile: {
                  size: {
                     height: 812,
                     width: 375,
                  },
                  type: 'page',
               },
               props: {
                  categories: [
                     {
                        label: 'page',
                        value: 'page',
                     },
                  ],
                  keywords: ['home'],
                  type: {
                     label: 'app',
                     value: 'app',
                  },
               },
               updateDate: '2023-01-01 00:00:00',
            },
            segmentedMetas: [
               {
                  asdfasdfff: 'true',
               },
               {
                  ff: 'true',
               },
            ],
            tailwindConfig: {},
         },
      ])
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
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([
         {
            css: '',
            html: '',
            key: 'widgets/app/page/page-1',
            meta: {
               center: true,
               createDate: '2023-01-01 00:00:00',
               mobile: {
                  size: {
                     height: 812,
                     width: 375,
                  },
                  type: 'page',
               },
               props: {
                  keywords: [],
                  categories: [
                     {
                        label: 'page',
                        value: 'page',
                     },
                  ],
                  type: {
                     label: 'app',
                     value: 'app',
                  },
               },
               updateDate: '2023-01-01 00:00:00',
            },
            segmentedMetas: [
               {
                  asdfasdfff: 'true',
               },
               {
                  ff: 'true',
               },
            ],
            tailwindConfig: {},
         },
         {
            css: '',
            html: '',
            key: 'widgets/web/banner/banner-1',
            meta: {
               createDate: '2023-01-01 00:00:00',
               frameHeight: 750,
               props: {
                  keywords: [],
                  categories: [
                     {
                        label: 'banner',
                        value: 'banner',
                     },
                  ],
                  type: {
                     label: 'web',
                     value: 'web',
                  },
               },
               updateDate: '2023-01-01 00:00:00',
            },
            segmentedMetas: [
               {
                  asdfasdfff: 'true',
               },
            ],
            tailwindConfig: {
               darkMode: 'class',
            },
         },
      ])
   })

   test('getFilterWidgetsData type app', async () => {
      expect(
         getFilterWidgetsData(
            {
               type: 'app',
            },
            [
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     center: true,
                     mobile: {
                        type: 'page',
                        size: { width: 375, height: 812 },
                     },
                  },
                  tailwindConfig: {},
                  segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
                  key: 'widgets/app/page/page-1',
               },
               {
                  css: '',
                  html: '',
                  meta: {
                     props: {
                        keywords: [],
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                     },
                     createDate: '2023-01-01 00:00:00',
                     updateDate: '2023-01-01 00:00:00',
                     frameHeight: 750,
                  },
                  tailwindConfig: { darkMode: 'class' },
                  segmentedMetas: [{ asdfasdfff: 'true' }],
                  key: 'widgets/web/banner/banner-1',
               },
            ],
         ),
      ).toEqual([
         {
            css: '',
            html: '',
            meta: {
               props: {
                  keywords: [],
                  type: { label: 'app', value: 'app' },
                  categories: [{ label: 'page', value: 'page' }],
               },
               createDate: '2023-01-01 00:00:00',
               updateDate: '2023-01-01 00:00:00',
               center: true,
               mobile: {
                  type: 'page',
                  size: { width: 375, height: 812 },
               },
            },
            tailwindConfig: {},
            segmentedMetas: [{ asdfasdfff: 'true' }, { ff: 'true' }],
            key: 'widgets/app/page/page-1',
         },
      ])
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
                     value: 'all',
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
      ).toEqual({
         categories: {
            banner: true,
            page: true,
         },
         type: 'all',
      })
   })
})