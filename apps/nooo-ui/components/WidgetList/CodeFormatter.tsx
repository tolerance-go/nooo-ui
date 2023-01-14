import htmlParser from 'prettier/parser-html'
import prettier from 'prettier/standalone'
import { useMemo } from 'react'
export const CodeFormatter = (props: {
   code: string
   type: 'html'
   children: (code: string) => React.ReactNode
}) => {
   const config = useMemo(() => {
      if (props.type === 'html') {
         return {
            parser: 'html',
            plugins: [htmlParser],
         }
      }
      return null
   }, [props.type])
   if (!config) {
      return <>{props.children(props.code)}</>
   }
   const next = prettier.format(props.code, config)
   return <>{props.children(next)}</>
}
