<script>
import { getData } from '../helpers/odsData.js'
import { rows, headers } from '../store.js'

const url = 'https://eburdet.opendatasoft.com/api/v2/catalog/datasets/restaurants/records' //hardcode for test

const getLatestData = async () => {
  $rows = await getData(url)
  $headers = Object.keys($rows[0])
}
</script>

<form action="#" on:submit|preventDefault={getLatestData}>
  <input type="text" name="url" value={url} placeholder="Paste dataset Url">
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
