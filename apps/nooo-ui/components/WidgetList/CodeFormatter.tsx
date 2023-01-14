'use client'

import { Options } from 'prettier'
import babelParser from 'prettier/parser-babel'
import htmlParser from 'prettier/parser-html'
import prettier from 'prettier/standalone'
import { useMemo } from 'react'
export const CodeFormatter = (props: {
   code: string
   type: 'html' | 'js'
   children: (code: string) => React.ReactNode
}) => {
   const config = useMemo((): Options | null => {
      if (props.type === 'html') {
         return {
            parser: 'html',
            plugins: [htmlParser],
         }
      }
      if (props.type === 'js') {
         return {
            parser: 'babel',
            plugins: [babelParser],
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
