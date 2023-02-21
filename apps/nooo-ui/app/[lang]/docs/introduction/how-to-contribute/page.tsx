'use client'

import { Locale } from 'i18n-config'
import Content from './content.mdx'
import ContentZhCN from './content.zh-CN.mdx'

const WhatIsNoooUi = ({
   params,
}: {
   params: {
      lang: Locale
   }
}) => {
   if (params.lang === 'en') {
      return <Content />
   }
   return <ContentZhCN />
}

export default WhatIsNoooUi
