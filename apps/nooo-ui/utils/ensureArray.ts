export const ensureArray = <T extends unknown>(target: T | T[]) => {
   return Array.isArray(target) ? target : [target]
}
