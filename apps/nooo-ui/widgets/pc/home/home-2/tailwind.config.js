/** @type {import('../../../../typings/widgets').WidgetTailwindConfig} */
module.exports = {
   theme: {
      extend: {
         zIndex: {
            '-10': '-10',
         },
         boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
            DEFAULT:
               '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
            none: 'none',
         },
         colors: {
            discord: '#536bbd',
         },
      },
   },
   plugins: [
      require('../../../../tailwindcss-lib/plugins/@tailwindcss/typography/0.5.9'),
   ],
}
