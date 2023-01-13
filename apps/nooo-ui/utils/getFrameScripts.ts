import { WidgetBaseFrameworks } from 'typings/widgets'

export const getFrameScripts = (frameworks: WidgetBaseFrameworks) => {
   const scripts: string[] = []
   if (frameworks.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/kutty@${frameworks.kutty}/dist/kutty.min.js"></script>`,
      )
   }

   if (frameworks.alpine && !frameworks.kutty) {
      scripts.push(
         `<script src="https://cdn.jsdelivr.net/npm/alpinejs@${frameworks.alpine}/dist/cdn.min.js"></script>`,
      )
   }

   return scripts
}
