import { writable, derived } from 'svelte/store'

export const headers = writable([])
export const rows = writable([])


// const findId = (url) => {
//   if (url) {
//     const datasetRegexp = /api\/push\/1\.0\/([a-zA-Z0-9_-]*)(?=\/realtime)/
//     const datasetId = url.match(datasetRegexp)[1]
//     return datasetId
//   }
// }
//
// export const records = derived(
//   [baseUrl],
//   async ([$pushUrl, $baseUrl], set) => {
//     if ($pushUrl) {
//       const datasetId = findId($pushUrl)
//       const searchUrl = `${$baseUrl}/api/v2/catalog/datasets/${datasetId}/records`
//       const res = await fetch(searchUrl)
//       const data = await res.json()
//       set(data.records)
//
//       return {
//         set: () => {}
//       }
//     }
//   },
// )
