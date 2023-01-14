import store from 'store'

export const collectedLocalKey = 'collected__'

export const getCollectedKeys = () => {
   const local = store.get(collectedLocalKey)
   const collectedKeys = new Set(Array.isArray(local) ? local : [])

   return collectedKeys
}
