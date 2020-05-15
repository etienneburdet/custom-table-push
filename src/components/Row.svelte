<script>
  export let values
</script>

<tr>
  {#each values as value}
    <td>{value}</td>
  {/each}
</tr>
