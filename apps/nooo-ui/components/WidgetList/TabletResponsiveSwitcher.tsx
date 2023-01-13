import { LittleBoxBtn } from './LittleBoxBtn'
import { TabletSize, useTabletSizeContext } from './TabletSizeContext'

export const TabletResponsiveSwitcher = () => {
   const { size, setSize } = useTabletSizeContext()
   console.log('setSize', size)

   return (
      <>
         {(
            [{ value: 'full' }, { value: 'md' }, { value: 'xs' }] as {
               value: TabletSize
            }[]
         ).map((item) => {
            return (
               <LittleBoxBtn
                  onClick={() => {
                     setSize(item.value)
                  }}
                  key={item.value}
                  selected={item.value === size}
               >
                  {item.value === 'full' && (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                        className='w-4 h-4'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                     </svg>
                  )}
                  {item.value === 'md' && (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                        className='w-4 h-4'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                        />
                     </svg>
                  )}
                  {item.value === 'xs' && (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        aria-hidden='true'
                        className='w-4 h-4'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                        />
                     </svg>
                  )}
               </LittleBoxBtn>
            )
         })}
      </>
   )
}
