<script>
let url

const findId = (url) => {
  const datasetRegexp = /api\/push\/1\.0\/([a-zA-Z0-9_-]*)(?=\/realtime)/
  const datasetId = url.match(datasetRegexp)[1]
  return datasetId
}

const fetchData = async (event) => {
  event.preventDefault()
  const datasetId = findId(url)
  console.log(datasetId);
  // const res = await fetch(url)
  // const data = await res.json()
  // const data
}
</script>

<form action="#" on:submit={fetchData}>
  <input type="text" name="url" bind:value={url}>
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
