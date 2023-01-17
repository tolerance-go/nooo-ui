import { widgetsData } from '.data/widgets-data'
import { WidgetPreview } from 'components/WidgetPreview'

const PreviewPage = async (props: {
   params: {
      key: string
   }
}) => {
   const target = widgetsData.find((item) => item.key === props.params.key)

   if (!target) return <div>not match</div>

   return <WidgetPreview data={target} />
}

export default PreviewPage
