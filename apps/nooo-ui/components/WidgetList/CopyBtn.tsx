import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const CopyBtn = ({ text }: { text: string }) => {
   const [copied, setCopied] = useState(false)

   useEffect(() => {
      if (copied) {
         setTimeout(() => {
            setCopied(false)
         }, 2000)
      }
   }, [copied])

   return (
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
         <button
            type='button'
            className='absolute top-2 right-3 text-sky-700 bg-white hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800 transition dark:bg-g'
         >
            {copied ? 'Copied!' : 'Copy'}
         </button>
      </CopyToClipboard>
   )
}
