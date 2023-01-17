import { widgetsData } from '.data/widgets-data'
import { WidgetPreview } from 'components/WidgetPreview'
import { PageProps } from 'typings/next'

const PreviewPage = async (props: PageProps) => {
   const target = widgetsData.find(
      (item) => item.key === props.searchParams?.key,
   )

   if (!target) return <div>not match</div>

   return <WidgetPreview data={target} />
}

export default PreviewPage
