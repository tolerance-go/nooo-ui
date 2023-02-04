import clsx from 'clsx'
import { WidgetData } from 'typings/widgets'
import { MobileContainerWrapper } from './MobileContainerWrapper'
import { TabletIframeWrapper } from './TabletIframeWrapper'
import { useThemeContext } from './ThemeContext'

export const Previewer = ({ data }: { data: WidgetData }) => {
   const { theme } = useThemeContext()
   return (
      <div
         className={clsx('py-5 px-7 example-bg', {
            dark: data.meta.theme === 'dark' || theme === 'dark',
         })}
      >
         {data.meta.mobile ? (
            <MobileContainerWrapper data={data} />
         ) : (
            <TabletIframeWrapper data={data} />
         )}
      </div>
   )
}
