<script>
import { rows, headers } from '../store.js'
import { postData } from './postData.svelte'
import Row from './Row.svelte'
import AddRow from './AddRow.svelte'
</script>

<table>
  <col span="1" class="delete-col">
  <thead>
    <tr>
      <th></th>
      {#each $headers as header}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each $rows as row}
      <Row row={row}/>
    {/each}
    <AddRow/>
  </tbody>
</table>

<input type="submit" value="Save !" on:click={postData($rows)}>

<style>
  table {
    table-layout: fixed;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  input[type="submit"]{
    background: none;
    border: 2px solid black;
    border-radius: 2px;
    text-align: right;
    margin: 1rem;
  }

  .delete-col {
    width: 32px;
  }
</style>
