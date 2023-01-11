/** @type {import('../../../../typings/widgets').WidgetItemMeta} */
export default {
   keywords: [],
   props: {
      type: {
         label: 'app',
         value: 'app',
      },
      categories: [
         {
            label: 'page',
            value: 'page',
         },
      ],
      custom: {
         type: 'checkbox',
         target: {
            value: 'sdfsdf',
            label: 'alsdfj',
         },
         name: 'custom-name',
      },
   },
   createDate: '2023-01-01 00:00:00',
   updateDate: '2023-01-01 00:00:00',
   center: true,
   mobile: {
      type: 'page',
      size: {
         width: 375,
         height: 812,
      },
   },
}
