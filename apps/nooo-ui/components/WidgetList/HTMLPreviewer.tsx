'use client'

import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'

export const HTMLPreviewer = (props: { code: string; language: Language }) => {
   return (
      <Highlight
         {...defaultProps}
         code={props.code}
         theme={githubTheme}
         language={props.language}
      >
         {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
               className={clsx(className, 'py-5 px-8 overflow-x-auto')}
               style={style}
            >
               {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })} key={i}>
                     {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={key} />
                     ))}
                  </div>
               ))}
            </pre>
         )}
      </Highlight>
   )
}
