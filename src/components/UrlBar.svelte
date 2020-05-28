<script>
import { getData } from '../helpers/odsData.js'
import { rows, headers } from '../store.js'

let typedUrl

const getLatestData = async () => {
  const url = 'https://eburdet.opendatasoft.com/api/v2/catalog/datasets/restaurants/records' //hardcode for test
  $rows = await getData(url)
  $headers = Object.keys($rows[0])
}
</script>

<form action="#" on:submit|preventDefault={getLatestData}>
  <input type="text" name="url" bind:value={typedUrl} placeholder="Paste dataset Url">
  <input type="submit" value="Get latest data">
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
