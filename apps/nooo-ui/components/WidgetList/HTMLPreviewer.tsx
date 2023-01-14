'use client'

import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import { CodeFormatter } from './CodeFormatter'

export const HTMLPreviewer = (props: { code: string; language: Language }) => {
   return (
      <CodeFormatter code={props.code} type='html'>
         {(code) => (
            <Highlight
               {...defaultProps}
               code={code}
               theme={githubTheme}
               language={props.language}
            >
               {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                     className={clsx(
                        className,
                        'p-5 overflow-auto max-h-screen',
                     )}
                     style={style}
                  >
                     {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })} key={i}>
                           {line.map((token, key) => (
                              <span
                                 {...getTokenProps({ token, key })}
                                 key={key}
                              />
                           ))}
                        </div>
                     ))}
                  </pre>
               )}
            </Highlight>
         )}
      </CodeFormatter>
   )
}
