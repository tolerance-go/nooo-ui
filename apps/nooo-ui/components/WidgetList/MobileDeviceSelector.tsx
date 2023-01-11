export const MobileDeviceSelector = () => {
   return (
      <div className='relative'>
         <select
            id='small'
            // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500
            className='block p-2 w-72 text-xs text-gray-900 border border-gray-200 rounded-md focus:ring-sky-500 focus:border-sky-500'
         >
            <option value='320 x 568'>iPhone 5 (320 x 568 | Dpr:2)</option>
            <option value='375 x 667'>iPhone 6/7/8 (375 x 667 | Dpr:2)</option>
            <option value='414 x 736'>
               iPhone 6/7/8 Plus (414 x 736 | Dpr:3)
            </option>
            <option value='375 x 812'>iPhone X (375 x 812 | Dpr:3)</option>
            <option value='414 x 896'>iPhone XR (414 x 896 | Dpr:2) </option>
            <option value='414 x 896'>iPhone XS Max (414 x 896 | Dpr:3)</option>
            <option value='375 x 812'>
               iPhone 12/13 mnini (375 x 812 | Dpr:3)
            </option>
            <option value='390 x 844'>
               iPhone 12/13 (Pro) (390 x 844 | Dpr:3)
            </option>
            <option value='428 x 926'>
               iPhone 12/13 Pro Max (428 x 926| Dpr:3)
            </option>
            <option value='428 x 926'>
               iPhone 14 Pro Max (428 x 926 | Dpr:3)
            </option>
            <option value='360 x 640'>Nexus 5 (360 x 640 | Dpr:3)</option>
            <option value='411 x 731'>Nexus 5X (411 x 731 | Dpr:2.625)</option>
            <option value='412 x 732'>Nexus 6 (412 x 732 | Dpr:3.5) </option>
            <option value='480 x 800'>Windows (480 x 800 | Dpr:2)</option>
            <option value='375 x 667'>
               Mac 13-inch and below (375 x 667 | Dpr:2)
            </option>
            <option value='375 x736'>Mac 15-inch (375 x 736 | Dpr:2)</option>
            <option value='414x 896'>
               Mac 21-inch and above (414 x 896 | Dpr:2)
            </option>
            <option value='768 x 1024'>iPad (768 x 1024 | Dpr:2)</option>
            <option value='834 x 1112'>
               iPad Pro 10.5-inch (834 x 1112 | Dpr:2)
            </option>
            <option value='1024 x 1366'>
               iPad Pro 12.9-inch (1024 x 1366 | Dpr:2)
            </option>
         </select>
      </div>
   )
}
