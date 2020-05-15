<script>

let baseUrl
let pushUrl

const findId = (url) => {
  const datasetRegexp = /api\/push\/1\.0\/([a-zA-Z0-9_-]*)(?=\/realtime)/
  const datasetId = url.match(datasetRegexp)[1]
  return datasetId
}

const getSearchUrl= (datasetId) => baseUrl + '/api/v2/catalog/datasets/' + datasetId + '/records'

const fetchData = async (event) => {
  event.preventDefault()
  const datasetId = findId(pushUrl)
  const searchUrl = getSearchUrl(datasetId)
  const res = await fetch(searchUrl)
  const data = await res.json()
  console.log(data)
}
</script>

<form action="#" on:submit={fetchData}>
  <input type="text" name="url" bind:value={baseUrl} placeholder="Paste base domain URL">
  <input type="text" name="url" bind:value={pushUrl} placeholder="Paste push URL with key">
  <input type="submit" value="Rechercher">
</form>

<style>
  form {
    display: flex;
    justify-content: space-around;
  }

  input[type="text"] {
    flex-grow: 1;
  }
</style>
