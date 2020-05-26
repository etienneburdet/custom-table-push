<script>
  import Cell from './Cell.svelte'
  import { rows } from '../store.js'
  export let row

  const deleteRow = () => {
    $rows = $rows.filter( el => el !== row)
  }
</script>

<tr>
  <td class="delete-button" on:click={deleteRow}>
    <img src="../img/trash-2.svg" alt="trash" width="14px">
  </td>
  {#each row as cell}
    <Cell cell={cell}/>
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
