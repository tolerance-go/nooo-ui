import { getFormConfigs } from 'utils/getFormConfigs'
import { describe, expect, test } from 'vitest'

describe('formConfigs', async () => {
   test('basic', async () => {
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
      ).toMatchInlineSnapshot(`
        {
          "categories": {
            "options": [
              {
                "label": "page",
                "value": "page",
              },
              {
                "label": "banner",
                "value": "banner",
              },
            ],
            "title": "分类",
            "type": "checkbox",
          },
          "custom": {
            "options": [
              {
                "label": "bbbb",
                "value": "bbbb",
              },
            ],
            "title": "custom-name",
            "type": "checkbox",
          },
          "customSame": {
            "options": [
              {
                "label": "alsdfj",
                "value": "sdfsdf",
              },
              {
                "label": "fff",
                "value": "xxxx",
              },
            ],
            "title": "custom-name",
            "type": "checkbox",
          },
          "type": {
            "options": [
              {
                "label": "app",
                "value": "app",
              },
              {
                "label": "web",
                "value": "web",
              },
            ],
            "title": "类型",
            "type": "radio",
          },
        }
      `)
   })
})
