<script>
  import Cell from './Cell.svelte'
  import { rows, headers } from '../store.js'
  export let row
  export let index

  const deleteRow = () => {
    $rows = $rows.filter( el => el !== row)
  }

  const updateRow = (cell) => {
    $rows[index][cell[0]] = cell[1]
  }
</script>

<tr>
  <td class="delete-button" on:click={deleteRow}>
    <img src="../img/trash-2.svg" alt="trash" width="14px">
  </td>
  {#each [...Object.entries(row)] as cell}
    <Cell bind:cellContent={cell[1]} on:blur={updateRow(cell)}/>
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
