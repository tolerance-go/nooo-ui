import {
   WidgetBaseFrameworks,
   WidgetBasePlugins,
   WidgetData,
} from 'typings/widgets'

export const getFrameScripts = (
   frameworks: WidgetBaseFrameworks,
   data: WidgetData,
) => {
   const scripts: string[] = []
   if (frameworks.alpine && !data.meta.plugins?.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/alpinejs@${frameworks.alpine}/dist/cdn.min.js"></script>`,
      )
   }

   return scripts
}

export const getPluginsScripts = (
   plugins: WidgetBasePlugins,
   data: WidgetData,
) => {
   const scripts: string[] = []
   if (plugins.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/kutty@${plugins.kutty}/dist/kutty.min.js"></script>`,
      )
   }

   return scripts
}
