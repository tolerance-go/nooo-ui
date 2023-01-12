import { getDefaultFormValuesFromFormConfigs } from 'utils/getDefaultFormValuesFromFormConfigs'
import { getFilterWidgetsData } from 'utils/getFilterWidgetsData'
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
                  keywords: [],
                  props: {
                     type: { label: 'app', value: 'app' },
                     categories: [{ label: 'page', value: 'page' }],
                     customSame: {
                        type: 'checkbox',
                        target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                        title: 'custom-name',
                     },
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
                  keywords: [],
                  props: {
                     type: { label: 'web', value: 'web' },
                     categories: [{ label: 'banner', value: 'banner' }],
                     customSame: {
                        type: 'checkbox',
                        target: [{ value: 'xxxx', label: 'fff' }],
                        title: 'custom-name',
                     },
                     custom: {
                        type: 'checkbox',
                        target: [{ value: 'bbbb', label: 'bbbb' }],
                        title: 'custom-name',
                     },
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
         custom: {
            options: [
               {
                  label: 'bbbb',
                  value: 'bbbb',
               },
            ],
            title: 'custom-name',
            type: 'checkbox',
         },
         customSame: {
            options: [
               {
                  label: 'alsdfj',
                  value: 'sdfsdf',
               },
               {
                  label: 'fff',
                  value: 'xxxx',
               },
            ],
            title: 'custom-name',
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
                     keywords: [],
                     props: {
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                           title: 'custom-name',
                        },
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
                     keywords: [],
                     props: {
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'xxxx', label: 'fff' }],
                           title: 'custom-name',
                        },
                        custom: {
                           type: 'checkbox',
                           target: [{ value: 'bbbb', label: 'bbbb' }],
                           title: 'custom-name',
                        },
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
                     keywords: [],
                     props: {
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                           title: 'custom-name',
                        },
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
                     keywords: [],
                     props: {
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'xxxx', label: 'fff' }],
                           title: 'custom-name',
                        },
                        custom: {
                           type: 'checkbox',
                           target: [{ value: 'bbbb', label: 'bbbb' }],
                           title: 'custom-name',
                        },
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
               keywords: [],
               props: {
                  type: { label: 'web', value: 'web' },
                  categories: [{ label: 'banner', value: 'banner' }],
                  customSame: {
                     type: 'checkbox',
                     target: [{ value: 'xxxx', label: 'fff' }],
                     title: 'custom-name',
                  },
                  custom: {
                     type: 'checkbox',
                     target: [{ value: 'bbbb', label: 'bbbb' }],
                     title: 'custom-name',
                  },
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
                     keywords: [],
                     props: {
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                           title: 'custom-name',
                        },
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
                     keywords: [],
                     props: {
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'xxxx', label: 'fff' }],
                           title: 'custom-name',
                        },
                        custom: {
                           type: 'checkbox',
                           target: [{ value: 'bbbb', label: 'bbbb' }],
                           title: 'custom-name',
                        },
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
               keywords: [],
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
                  customSame: {
                     target: [
                        {
                           label: 'alsdfj',
                           value: 'sdfsdf',
                        },
                     ],
                     title: 'custom-name',
                     type: 'checkbox',
                  },
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
               keywords: [],
               props: {
                  categories: [
                     {
                        label: 'banner',
                        value: 'banner',
                     },
                  ],
                  custom: {
                     target: [
                        {
                           label: 'bbbb',
                           value: 'bbbb',
                        },
                     ],
                     title: 'custom-name',
                     type: 'checkbox',
                  },
                  customSame: {
                     target: [
                        {
                           label: 'fff',
                           value: 'xxxx',
                        },
                     ],
                     title: 'custom-name',
                     type: 'checkbox',
                  },
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
                     keywords: [],
                     props: {
                        type: { label: 'app', value: 'app' },
                        categories: [{ label: 'page', value: 'page' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                           title: 'custom-name',
                        },
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
                     keywords: [],
                     props: {
                        type: { label: 'web', value: 'web' },
                        categories: [{ label: 'banner', value: 'banner' }],
                        customSame: {
                           type: 'checkbox',
                           target: [{ value: 'xxxx', label: 'fff' }],
                           title: 'custom-name',
                        },
                        custom: {
                           type: 'checkbox',
                           target: [{ value: 'bbbb', label: 'bbbb' }],
                           title: 'custom-name',
                        },
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
               keywords: [],
               props: {
                  type: { label: 'app', value: 'app' },
                  categories: [{ label: 'page', value: 'page' }],
                  customSame: {
                     type: 'checkbox',
                     target: [{ value: 'sdfsdf', label: 'alsdfj' }],
                     title: 'custom-name',
                  },
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
            custom: {
               options: [
                  {
                     label: 'bbbb',
                     value: 'bbbb',
                  },
               ],
               title: 'custom-name',
               type: 'checkbox',
            },
            customSame: {
               options: [
                  {
                     label: 'alsdfj',
                     value: 'sdfsdf',
                  },
                  {
                     label: 'fff',
                     value: 'xxxx',
                  },
               ],
               title: 'custom-name',
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
         custom: {
            bbbb: true,
         },
         customSame: {
            sdfsdf: true,
            xxxx: true,
         },
         type: 'all',
      })
   })
})
