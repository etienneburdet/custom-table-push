<script>
  export let cellContent
  let editing
</script>

<td contenteditable
  bind:textContent={cellContent}
  on:focus={e => editing = true}
  on:blur={e => editing = false}
  on:blur
  class:editing>
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
