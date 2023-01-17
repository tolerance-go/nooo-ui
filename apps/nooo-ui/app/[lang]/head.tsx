import { getDictionary } from 'get-dictionary'
import { cookies } from 'next/headers'

export default async function Head() {
   const nextCookies = cookies()

   const lang = nextCookies.get('lang')?.value === 'zh-CN' ? 'zh-CN' : 'en'

   const dict = await getDictionary(lang)
   // 不能直接出现在 title 标签内，先赋值
   const titleContent = `NoooUI - ${dict.headTitle.index}`
   return (
      <>
         <title>{titleContent}</title>
         <meta content='width=device-width, initial-scale=1' name='viewport' />
         <link rel='icon' href='/_assets/favicon.ico' />
      </>
   )
}
