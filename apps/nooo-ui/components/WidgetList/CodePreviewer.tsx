'use client'

import clsx from 'clsx'
import { useSiteThemeContext } from 'components/SiteThemeContext'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import vsLight from 'prism-react-renderer/themes/vsLight'

export const CodePreviewer = (props: { code: string; language: Language }) => {
   const { theme } = useSiteThemeContext()

   return (
      <Highlight
         {...defaultProps}
         code={props.code}
         theme={theme === 'dark' ? vsDark : vsLight}
         language={props.language}
      >
         {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
               className={clsx(className, 'p-5 overflow-auto max-h-screen')}
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
