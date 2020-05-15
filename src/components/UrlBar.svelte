<script>
import { baseUrl, pushUrl } from '../store.js'

let typeBaseUrl, typePushUrl

const fetchData = () => {
  $baseUrl = typeBaseUrl
  $pushUrl = typePushUrl
}
</script>

<form action="#" on:submit|preventDefault={fetchData}>
  <input type="text" name="url" bind:value={typeBaseUrl} placeholder="Paste base domain URL">
  <input type="text" name="url" bind:value={typePushUrl} placeholder="Paste push URL with key">
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
