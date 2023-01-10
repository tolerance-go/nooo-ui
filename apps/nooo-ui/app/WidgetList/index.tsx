import widgetsData from '.data/widgets-data.json'
import clsx from 'clsx'
import { getDoc } from '../getDoc'
import { MobileContainer } from './MobileContainer'

export const WidgetList = () => {
   return (
      <>
         {widgetsData.map((item) => {
            return (
               <div
                  key={item.key}
                  aria-label='card'
                  className='rounded-xl bg-white border overflow-hidden'
               >
                  <div className='py-5 px-7 flex justify-between items-center flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b'>
                     <div className='flex'>
                        <div className='mr-2'>
                           <a
                              href='#'
                              className='inline-block px-4 py-3 text-white bg-sky-600 rounded-lg active'
                              aria-current='page'
                           >
                              预览
                           </a>
                        </div>
                        <div className='mr-2'>
                           <a
                              href='#'
                              className='inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                           >
                              HTML
                           </a>
                        </div>
                        <div className='mr-2'>
                           <a
                              href='#'
                              className='inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                           >
                              JSX
                           </a>
                        </div>
                        <div className='mr-2'>
                           <a
                              href='#'
                              className='inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                           >
                              Vue
                           </a>
                        </div>
                        <div>
                           <a className='inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500'>
                              Taro
                           </a>
                        </div>
                     </div>
                     <div className='flex items-center space-x-2 absolute left-1/2 -translate-x-1/2'>
                        <div className='p-2 border rounded-md'>
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
                        </div>
                        <div className='p-2 border rounded-md'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='2'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-4 h-4'
                           >
                              <path
                                 stroke-linecap='round'
                                 stroke-linejoin='round'
                                 d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                              ></path>
                           </svg>
                        </div>
                        <div className='p-2 border rounded-md'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='2'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-4 h-4'
                           >
                              <path
                                 stroke-linecap='round'
                                 stroke-linejoin='round'
                                 d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                              ></path>
                           </svg>
                        </div>
                        <div className='text-gray-200'>|</div>
                        <div className='p-2 border rounded-md'>
                           <svg
                              viewBox='0 0 1024 1024'
                              version='1.1'
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-4 h-4'
                           >
                              <path
                                 d='M1010.522034 378.125967c-2.697435-7.186679-9.568936-11.9471-17.244756-11.9471l-317.167616-0.024559L531.542078 29.566386c-2.907213-6.767124-9.56382-11.149944-16.924461-11.149944-0.021489 0-0.042979 0-0.064468 0-7.386224 0.025583-14.042831 4.461615-16.910135 11.269671L355.918175 366.154307l-319.960219 0.024559c-7.66354 0-14.524808 4.746094-17.231453 11.915377-2.706645 7.169283-0.690732 15.264659 5.061272 20.329001l264.485767 232.853325-87.217411 311.044152c-2.061962 7.354502 0.62831 15.21861 6.764054 19.768229 6.135744 4.548596 14.44192 4.840238 20.881586 0.730641l285.916868-182.503591 285.915845 182.503591c3.027963 1.933025 6.471388 2.892887 9.909697 2.892887 3.796466 0 7.584746-1.171686 10.799974-3.497661 6.124488-4.431939 8.919137-12.156878 7.04751-19.481703l-43.378973-169.779801c-0.10847-0.425695-0.233314-0.848321-0.37146-1.264806-7.653307-22.956851-15.889899-63.611783-9.262968-77.967746 4.264117-9.235338 0.233314-20.179598-9.004071-24.443715-9.239432-4.264117-20.180622-0.233314-24.443715 9.004071-7.04137 15.252379-7.662517 37.273928-1.899256 67.321268 3.518127 18.34788 8.340969 33.67189 9.441023 37.062104l31.686676 124.018571L524.528338 742.937696c-6.043646-3.857864-13.776771-3.857864-19.820418 0L249.554706 905.804041l77.314877-275.729855c1.910513-6.814196-0.251733-14.121626-5.563716-18.797112L84.751243 403.013797l283.396465-0.021489c7.40976 0 14.097066-4.441149 16.97358-11.269671L514.783393 83.893712l132.266419 307.947628c2.90619 6.765077 9.56075 11.149944 16.923438 11.149944l280.237519 0.021489L711.389166 606.468558c-7.659447 6.693446-8.443299 18.329461-1.74883 25.989931 6.693446 7.659447 18.331507 8.442276 25.989931 1.74883l269.766027-235.739049C1011.175927 393.417231 1013.219469 385.311623 1010.522034 378.125967z'
                                 fill='#FF9000'
                              ></path>
                           </svg>

                           <svg
                              viewBox='0 0 1024 1024'
                              version='1.1'
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-4 h-4 hidden'
                           >
                              <path
                                 d='M1006.942208 391.708672c-2.10944-5.599232-7.458816-9.310208-13.459456-9.310208L672.516096 382.398464 526.367744 42.118144c-2.251776-5.26336-7.45472-8.675328-13.205504-8.675328-0.021504 0-0.043008 0-0.043008 0-5.772288 0-10.975232 3.45088-13.2096 8.762368L356.626432 382.399488 32.821248 382.399488c-5.983232 0-11.355136 3.709952-13.459456 9.271296-2.10944 5.604352-0.54784 11.91936 3.959808 15.880192L290.67264 642.930688l-88.240128 314.625024c-1.600512 5.72928 0.504832 11.880448 5.28896 15.418368 4.780032 3.53792 11.246592 3.791872 16.303104 0.590848l289.137664-184.52992 289.133568 184.52992c2.359296 1.514496 5.056512 2.230272 7.7312 2.230272 2.989056 0 5.961728-0.927744 8.489984-2.7392 4.780032-3.493888 6.928384-9.560064 5.413888-15.29344l-84.93568-319.50848L1002.939392 407.59296C1007.468544 403.633152 1009.047552 397.313024 1006.942208 391.708672z'
                                 fill='#FF9000'
                              ></path>
                           </svg>
                        </div>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <div className='p-2'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              // width='702px'
                              // height='134px'
                              viewBox='0 0 702 134'
                              version='1.1'
                              className='w-24'
                           >
                              <g
                                 id='Custom-Preset-4-Copy-5'
                                 stroke='none'
                                 stroke-width='1'
                                 fill='none'
                                 fill-rule='evenodd'
                              >
                                 <path
                                    d='M236.145,101 L240.16,88.02 L265.625,88.02 L269.64,101 L288.175,101 L264.69,27.19 L242.305,27.19 L217.445,101 L236.145,101 Z M261.61,74.985 L244.615,74.985 L253.25,47.98 L261.61,74.985 Z M317.05,101 L317.05,25.1 L299.45,25.1 L299.45,101 L317.05,101 Z M353.35,127.29 L353.349,98.719 L353.403988,98.7692 C353.956452,99.2796 354.54746,99.7372 355.177012,100.142 L355.495,100.34 C358.171667,101.953333 361.508333,102.76 365.505,102.76 C370.088333,102.76 374.3875,101.623333 378.4025,99.35 C382.4175,97.0766667 385.6625,93.795 388.1375,89.505 C390.6125,85.215 391.85,80.0266667 391.85,73.94 C391.85,67.8166667 390.630833,62.61 388.1925,58.32 C385.754167,54.03 382.591667,50.7483333 378.705,48.475 C374.818333,46.2016667 370.711667,45.065 366.385,45.065 C363.121667,45.065 360.041667,45.8991667 357.145,47.5675 C355.0594,48.7687 353.263672,50.497372 351.757816,52.753516 L351.541,53.086 L350.105,46.825 L335.75,46.825 L335.75,127.29 L353.35,127.29 Z M362.7,86.7 C361.013333,86.7 359.455,86.3883333 358.025,85.765 C356.595,85.1416667 355.458333,84.28 354.615,83.18 C353.771667,82.08 353.35,80.7966667 353.35,79.33 L353.349,79.33 L353.349,70.42 L353.3555,70.0419667 C353.403167,68.4181222 353.760667,66.9801778 354.428,65.7281333 L354.5875,65.4425 C355.4125,64.0308333 356.558333,62.94 358.025,62.17 C359.491667,61.4 361.16,61.015 363.03,61.015 C365.34,61.015 367.329167,61.5466667 368.9975,62.61 C370.665833,63.6733333 371.958333,65.1766667 372.875,67.12 C373.791667,69.0633333 374.25,71.3366667 374.25,73.94 C374.25,77.02 373.635833,79.495 372.4075,81.365 C371.179167,83.235 369.675833,84.5916667 367.8975,85.435 C366.119167,86.2783333 364.386667,86.7 362.7,86.7 Z M416.325,39.84 C419.551667,39.84 422.1,38.9875 423.97,37.2825 C425.84,35.5775 426.775,33.1666667 426.775,30.05 C426.775,27.0066667 425.84,24.5775 423.97,22.7625 C422.1,20.9475 419.551667,20.04 416.325,20.04 C412.988333,20.04 410.4125,20.9475 408.5975,22.7625 C406.7825,24.5775 405.875,27.0066667 405.875,30.05 C405.875,33.1666667 406.7825,35.5775 408.5975,37.2825 C410.4125,38.9875 412.988333,39.84 416.325,39.84 Z M425.125,101 L425.125,46.495 L407.525,46.495 L407.525,101 L425.125,101 Z M462.965,101 L462.965,78.175 L462.968125,77.6150568 C463.009792,73.9158144 463.468125,70.8908144 464.343125,68.5400568 L464.4775,68.1925 C465.485833,65.6808333 466.833333,63.8566667 468.52,62.72 C470.206667,61.5833333 472.058333,61.015 474.075,61.015 C476.055,61.015 477.741667,61.7025 479.135,63.0775 C480.528333,64.4525 481.225,66.57 481.225,69.43 L481.225,69.43 L481.225,101 L498.935,101 L498.935,69.43 C498.935,64.7 498.238333,60.5016667 496.845,56.835 C495.451667,53.1683333 493.279167,50.29 490.3275,48.2 C487.375833,46.11 483.571667,45.065 478.915,45.065 C474.845,45.065 471.205833,46.2016667 467.9975,48.475 C466.006121,49.8860345 464.276073,51.7985434 462.807357,54.2125268 L462.656,54.466 L460.875,46.825 L445.365,46.825 L445.365,101 L462.965,101 Z M537.82,102.76 C542.293333,102.76 546.244167,101.953333 549.6725,100.34 C553.100833,98.7266667 555.8875,96.545 558.0325,93.795 C560.1775,91.045 561.525,87.9833333 562.075,84.61 L562.075,84.61 L544.585,84.61 C544.108333,86.04 543.265,87.085 542.055,87.745 C540.845,88.405 539.433333,88.735 537.82,88.735 C535.84,88.735 534.199167,88.2675 532.8975,87.3325 C531.595833,86.3975 530.615,85.0866667 529.955,83.4 C529.295,81.7133333 528.965,79.715 528.965,77.405 L528.966,77.515 L561.525,77.515 C562.393421,73.6244737 562.562535,69.8409003 562.032341,66.1642798 L561.9375,65.5525 C561.295833,61.6841667 559.939167,58.21 557.8675,55.13 C555.795833,52.05 553.073333,49.6025 549.7,47.7875 C546.326667,45.9725 542.366667,45.065 537.82,45.065 C533.236667,45.065 528.946667,46.2016667 524.95,48.475 C520.953333,50.7483333 517.726667,54.0208333 515.27,58.2925 C512.813333,62.5641667 511.585,67.6883333 511.585,73.665 C511.585,79.6416667 512.8225,84.8116667 515.2975,89.175 C517.7725,93.5383333 521.008333,96.8933333 525.005,99.24 C529.001667,101.586667 533.273333,102.76 537.82,102.76 Z M546.179,68.605 L529.044,68.605 L529.045178,68.5898444 C529.178807,67.0856963 529.479474,65.7485852 529.947178,64.5785111 L530.0925,64.2325 C530.844167,62.5275 531.9075,61.2258333 533.2825,60.3275 C534.6575,59.4291667 536.28,58.98 538.15,58.98 C539.836667,58.98 541.220833,59.3191667 542.3025,59.9975 C543.384167,60.6758333 544.218333,61.5741667 544.805,62.6925 C545.391667,63.8108333 545.785833,65.03 545.9875,66.35 C546.088333,67.01 546.150208,67.6654167 546.173125,68.31625 L546.179,68.605 Z M580.775,101.99 C584.258333,101.99 587.136667,100.935833 589.41,98.8275 C591.683333,96.7191667 592.82,94.0333333 592.82,90.77 C592.82,87.5066667 591.683333,84.7933333 589.41,82.63 C587.136667,80.4666667 584.258333,79.385 580.775,79.385 C577.291667,79.385 574.459167,80.4666667 572.2775,82.63 C570.095833,84.7933333 569.005,87.5066667 569.005,90.77 C569.005,93.9966667 570.095833,96.6733333 572.2775,98.8 C574.459167,100.926667 577.291667,101.99 580.775,101.99 Z M614.38,39.84 C617.606667,39.84 620.155,38.9875 622.025,37.2825 C623.895,35.5775 624.83,33.1666667 624.83,30.05 C624.83,27.0066667 623.895,24.5775 622.025,22.7625 C620.155,20.9475 617.606667,20.04 614.38,20.04 C611.153333,20.04 608.586667,20.9475 606.68,22.7625 C604.773333,24.5775 603.82,27.0066667 603.82,30.05 C603.82,33.1666667 604.773333,35.5775 606.68,37.2825 C608.586667,38.9875 611.153333,39.84 614.38,39.84 Z M603.875,129.215 C610.291667,129.215 615.15,127.464167 618.45,123.9625 C621.75,120.460833 623.4,114.548333 623.4,106.225 L623.4,106.225 L623.4,46.605 L605.69,46.605 L605.69,105.895 C605.69,109.048333 605.130833,111.156667 604.0125,112.22 C602.894167,113.283333 601.198333,113.815 598.925,113.815 C597.165,113.815 595.258333,113.558333 593.205,113.045 C591.151667,112.531667 589.336667,111.963333 587.76,111.34 L587.76,111.34 L587.76,126.465 C590.29,127.161667 592.801667,127.794167 595.295,128.3625 C597.788333,128.930833 600.648333,129.215 603.875,129.215 Z M664.54,102.76 C669.086667,102.76 673.156667,101.916667 676.75,100.23 C680.343333,98.5433333 683.175833,96.3525 685.2475,93.6575 C687.319167,90.9625 688.355,88.1116667 688.355,85.105 C688.355,81.805 687.291667,79.055 685.165,76.855 C683.038333,74.655 680.123333,72.8216667 676.42,71.355 L676.42,71.355 L661.46,65.36 C659.15,64.5533333 657.995,63.4533333 657.995,62.06 C657.995,61.0333333 658.545,60.2083333 659.645,59.585 C660.745,58.9616667 662.248333,58.65 664.155,58.65 C666.465,58.65 668.115,59.0808333 669.105,59.9425 C670.095,60.8041667 670.59,61.8216667 670.59,62.995 L670.59,62.995 L686.705,62.995 C686.668333,57.7883333 684.706667,53.4983333 680.82,50.125 C676.933333,46.7516667 671.378333,45.065 664.155,45.065 C656.455,45.065 650.386667,46.55 645.95,49.52 C641.513333,52.49 639.295,56.3766667 639.295,61.18 C639.295,64.59 640.349167,67.5325 642.4575,70.0075 C644.565833,72.4825 647.563333,74.5266667 651.45,76.14 L651.45,76.14 L664.595,81.255 C665.988333,81.805 667.015,82.355 667.675,82.905 C668.335,83.455 668.665,84.1883333 668.665,85.105 C668.665,85.8016667 668.426667,86.4525 667.95,87.0575 C667.473333,87.6625 666.758333,88.1483333 665.805,88.515 C664.851667,88.8816667 663.641667,89.065 662.175,89.065 C659.755,89.065 657.839167,88.6983333 656.4275,87.965 C655.015833,87.2316667 654.273333,85.9116667 654.2,84.005 L654.2,84.005 L638.305,84.005 C638.268333,88.2216667 639.359167,91.7141667 641.5775,94.4825 C643.795833,97.2508333 646.885,99.3225 650.845,100.6975 C654.805,102.0725 659.37,102.76 664.54,102.76 Z'
                                    id='Alpine.js'
                                    fill='#2D3441'
                                    fill-rule='nonzero'
                                 />
                                 <g
                                    id='Group-4'
                                    transform='translate(0.000000, 12.000000)'
                                 >
                                    <polygon
                                       id='Path'
                                       fill='#77C1D2'
                                       points='149.520377 10.3027772 189.392477 50 149.520377 89.6972228 109.648276 50'
                                    />
                                    <polygon
                                       id='Path'
                                       fill='#2D3441'
                                       points='49.8401255 10.3027772 132.499974 92.6000822 52.7557729 92.6000822 9.96802511 50'
                                    />
                                 </g>
                              </g>
                           </svg>
                        </div>
                        <div className='text-gray-200'>|</div>
                        <div className='p-2 border rounded-md'>
                           <svg
                              viewBox='0 0 1024 1024'
                              className='w-4 h-4'
                              version='1.1'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                           >
                              <path d='M339.432 63.594H99.944c-19.851 0-36 16.149-36 36v239.488c0 17.673 14.327 32 32 32s32-14.327 32-32V127.594h211.487c17.673 0 32-14.327 32-32 0.001-17.673-14.326-32-31.999-32zM339.432 895.503H127.944V684.016c0-17.673-14.327-32-32-32s-32 14.327-32 32v239.487c0 19.851 16.149 36 36 36h239.487c17.673 0 32-14.327 32-32s-14.326-32-31.999-32zM928 651.915c-17.673 0-32 14.327-32 32v211.487H684.513c-17.673 0-32 14.327-32 32s14.327 32 32 32H924c19.851 0 36-16.149 36-36V683.915c0-17.673-14.327-32-32-32zM924 64.151H684.513c-17.673 0-32 14.327-32 32s14.327 32 32 32H896v211.488c0 17.673 14.327 32 32 32s32-14.327 32-32V100.151c0-19.851-16.149-36-36-36z'></path>
                           </svg>
                        </div>
                        <div className='p-2 border rounded-md'>
                           <div>
                              <svg
                                 aria-hidden='true'
                                 data-toggle-icon='moon'
                                 className='w-4 h-4'
                                 fill='currentColor'
                                 viewBox='0 0 20 20'
                                 xmlns='http://www.w3.org/2000/svg'
                              >
                                 <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                              </svg>
                              <svg
                                 aria-hidden='true'
                                 data-toggle-icon='sun'
                                 className='w-4 h-4 hidden'
                                 fill='currentColor'
                                 viewBox='0 0 20 20'
                                 xmlns='http://www.w3.org/2000/svg'
                              >
                                 <path
                                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                 />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='py-5 px-7 example-bg'>
                     {item.meta.mobile ? (
                        typeof item.meta.mobile === 'object' ? (
                           <div
                              className={clsx(
                                 item.meta.center && 'flex justify-center',
                              )}
                           >
                              <MobileContainer
                                 size={item.meta.mobile.size}
                                 type={item.meta.mobile.type}
                              >
                                 <iframe
                                    height={item.meta.frameHeight}
                                    className='w-full h-full'
                                    srcDoc={getDoc({
                                       html: item.html,
                                       css: item.css,
                                       bodyCss: `background-color: white; overflow-x: hidden; height: ${item.meta.mobile.size.height}px; width: ${item.meta.mobile.size.width}px;`,
                                    })}
                                 />
                              </MobileContainer>
                           </div>
                        ) : null
                     ) : (
                        <iframe
                           height={item.meta.frameHeight}
                           className='w-full'
                           srcDoc={getDoc({
                              html: item.html,
                              css: item.css,
                              center: item.meta.center,
                           })}
                        />
                     )}
                  </div>
               </div>
            )
         })}
      </>
   )
}
