<script>
  import { headers, rows } from '../store.js'

  const addRow = () => {
    const newLine = Object.assign({}, $rows[$rows.length - 1])
    $rows = [...$rows, newLine]
  }
</script>

<tr>
  <td></td>
  <td colspan="{$headers.length}" class="add-row" on:click={addRow}> + </td>
</tr>

<style>
  .add-row {
    padding: 8px;
    border-radius: 0 0 8px 8px;
    border: 1px solid lightgrey;
    }

  .add-row:hover {
    background: rgb(148, 206, 231, 0.2);
  }

</style>
