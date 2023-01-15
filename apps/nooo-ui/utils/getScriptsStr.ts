import { WidgetData } from 'typings/widgets'
import { getFrameScripts, getPluginsScripts } from './getFrameScripts'

export const getScriptsStr = (data: WidgetData) => {
   const scriptsStr = [
      ...(data.meta.frameworks
         ? getFrameScripts(data.meta.frameworks, data)
         : []),
      ...(data.meta.plugins ? getPluginsScripts(data.meta.plugins, data) : []),
   ]
      .filter(Boolean)
      .join('\n')

   return scriptsStr
}
