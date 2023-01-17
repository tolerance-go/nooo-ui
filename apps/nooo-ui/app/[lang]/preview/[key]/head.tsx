import { getDictionary } from 'get-dictionary'
import { cookies } from 'next/headers'

export default async function Head(props: {
   params: {
      key: string
   }
}) {
   const nextCookies = cookies()

   const lang = nextCookies.get('lang')?.value === 'zh-CN' ? 'zh-CN' : 'en'
   const dict = await getDictionary(lang)
   const titleContent = `${dict.headTitle.preview} - ${props.params.key} / NoooUI`
   return (
      <>
         <title>{titleContent}</title>
         <meta content='width=device-width, initial-scale=1' name='viewport' />
         <link rel='icon' href='/_assets/favicon.ico' />
      </>
   )
}
