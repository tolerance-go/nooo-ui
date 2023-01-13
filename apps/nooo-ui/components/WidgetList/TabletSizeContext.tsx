'use client'

import {
   createContext,
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   useContext,
   useState,
} from 'react'

export const defaultTabletSize = 'full'

export type TabletSize = 'xs' | 'md' | 'full'

export const TabletSizeContextContext = createContext<{
   size: TabletSize
   setSize: Dispatch<SetStateAction<TabletSize>>
}>({
   size: defaultTabletSize,
   setSize: () => {},
})

export const TabletSizeContextProvider = (props: PropsWithChildren) => {
   const [size, setSize] = useState<TabletSize>(defaultTabletSize)

   return (
      <TabletSizeContextContext.Provider
         value={{
            size,
            setSize,
         }}
      >
         {props.children}
      </TabletSizeContextContext.Provider>
   )
}

export const useTabletSizeContext = () => {
   return useContext(TabletSizeContextContext)
}
