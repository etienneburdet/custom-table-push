<script>
  export let cell
  let editing
</script>

<td contenteditable on:focus={e=> editing = true} on:blur={e=> editing = false} class:editing>
  {cell}
</td>

<style>
  td {
    border: 1px solid lightgrey;
    padding: 0.5rem;
  }

  .editing {
    background: rgb(148, 206, 231, 0.8);
  }
</style>
