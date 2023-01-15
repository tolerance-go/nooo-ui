// 测试此库暂无法在 ssr 中使用

const HTMLtoJSX = require('htmltojsx')

const convertHTMLToJSX = (html) => {
   const converter = new HTMLtoJSX({
      createClass: false,
   })
   const output = converter.convert(html)

   return output
}

module.exports.convertHTMLToJSX = convertHTMLToJSX
