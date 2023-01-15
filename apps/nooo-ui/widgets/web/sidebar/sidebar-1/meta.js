/** @type {import('../../../../typings/widgets').WidgetItemMeta} */
module.exports = {
   plugins: {
      kutty: '0.6.0',
   },
   frameworks: {
      alpine: '2.8.0',
   },
   props: {
      keywords: ['管理系统'],
      type: {
         label: 'web',
         value: 'web',
      },
      categories: [
         {
            label: 'sidebar',
            value: 'sidebar',
         },
      ],
   },
   createDate: '2023-01-01 00:00:00',
   updateDate: '2023-01-01 00:00:00',
   tailwindcssVersion: '3.2.x',
   frameHeight: 750,
}
