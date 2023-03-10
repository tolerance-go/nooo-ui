'use client'

import { defaultMobileSize } from 'constants/defaultMobileSize'
import {
   createContext,
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   useContext,
   useState,
} from 'react'

export type Size = {
   width: number
   height: number
}

export const MobileDeviceSizeContext = createContext<{
   size: {
      width: number
      height: number
   }
   setSize: Dispatch<SetStateAction<Size>>
}>({
   size: { ...defaultMobileSize },
   setSize: () => {},
})

export const MobileDeviceSizeContextProvider = (props: PropsWithChildren) => {
   const [size, setSize] = useState({
      ...defaultMobileSize,
   })

   return (
      <MobileDeviceSizeContext.Provider
         value={{
            size,
            setSize,
         }}
      >
         {props.children}
      </MobileDeviceSizeContext.Provider>
   )
}

export const useMobileDeviceSizeContext = () => {
   return useContext(MobileDeviceSizeContext)
}
