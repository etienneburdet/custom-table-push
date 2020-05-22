<script>
  import Cell from './Cell.svelte'
  import { deletedRows } from '../store.js'
  export let values
</script>

<tr>
  <td class="delete-button">
    <img src="../img/trash-2.svg" alt="trash" width="14px">
  </td>
  {#each values as value}
    <Cell value={value}/>
  {/each}
</tr>

<style>
  tr:hover {
    background: rgb(148, 206, 231, 0.2);
  }

  .delete-button {
    visibility: hidden;
    border: none;
  }

  .delete-button:hover {
    background: rgb(148, 206, 231, 0.8);
  }

  tr:hover .delete-button {
    visibility: visible;
  }
</style>
