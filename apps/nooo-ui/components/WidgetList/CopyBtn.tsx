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
            className='absolute top-2 right-3 mr-2 mb-2 rounded-lg border border-sky-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-sky-600 transition hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-sky-300 dark:border-sky-600 dark:bg-gray-800 dark:text-sky-600 dark:hover:bg-sky-600 dark:hover:text-white dark:focus:ring-sky-700'
         >
            {copied ? 'Copied!' : 'Copy'}
         </button>
      </CopyToClipboard>
   )
}
