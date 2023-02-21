'use client'

import { useMobileDeviceSizeContext } from './MobileDeviceSizeContext'

export const MobileDeviceSelector = () => {
   const { setSize } = useMobileDeviceSizeContext()

   return (
      <div className='relative'>
         <select
            id='small'
            className='block h-9 w-72 rounded-md border border-gray-200 text-xs text-gray-900 transition focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-sky-500 dark:focus:ring-sky-500'
            onChange={(event) => {
               const [width, height] = event.target.value
                  .split(':')[1]
                  .split('x')
                  .map(Number)
               setSize({
                  width,
                  height,
               })
            }}
            defaultValue='iPhoneX:375x812'
         >
            <option value=':320x568'>iPhone 5 (320 x 568 | Dpr:2)</option>
            <option value=':375x667'>iPhone 6/7/8 (375 x 667 | Dpr:2)</option>
            <option value=':414x736'>
               iPhone 6/7/8 Plus (414 x 736 | Dpr:3)
            </option>
            <option value='iPhoneX:375x812'>
               iPhone X (375 x 812 | Dpr:3)
            </option>
            <option value='iPhoneXR:414x896'>
               iPhone XR (414 x 896 | Dpr:2){' '}
            </option>
            <option value='iPhoneXSMax:414x896'>
               iPhone XS Max (414 x 896 | Dpr:3)
            </option>
            <option value=':375x812'>
               iPhone 12/13 mini (375 x 812 | Dpr:3)
            </option>
            <option value=':390x844'>
               iPhone 12/13 (Pro) (390 x 844 | Dpr:3)
            </option>
            <option value='iPhone12/13ProMax:428x926'>
               iPhone 12/13 Pro Max (428 x 926| Dpr:3)
            </option>
            <option value=':428x926'>
               iPhone 14 Pro Max (428 x 926 | Dpr:3)
            </option>
            <option value=':360x640'>Nexus 5 (360 x 640 | Dpr:3)</option>
            <option value=':411x731'>Nexus 5X (411 x 731 | Dpr:2.625)</option>
            <option value=':412x732'>Nexus 6 (412 x 732 | Dpr:3.5) </option>
            <option value=':480x800'>Windows (480 x 800 | Dpr:2)</option>
            <option value=':375x667'>
               Mac 13-inch and below (375 x 667 | Dpr:2)
            </option>
            <option value=':375x736'>Mac 15-inch (375 x 736 | Dpr:2)</option>
            <option value=':414x896'>
               Mac 21-inch and above (414 x 896 | Dpr:2)
            </option>
            <option value=':768x1024'>iPad (768 x 1024 | Dpr:2)</option>
            <option value=':834x1112'>
               iPad Pro 10.5-inch (834 x 1112 | Dpr:2)
            </option>
            <option value=':1024x1366'>
               iPad Pro 12.9-inch (1024 x 1366 | Dpr:2)
            </option>
         </select>
      </div>
   )
}
