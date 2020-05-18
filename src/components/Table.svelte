<script>
import { records } from '../store.js'
import Row from './Row.svelte'

let headers = ['Nom', 'Commentaire', 'Note']
let rows = [
  ['Berberhygge', 'couscous dannois', 5],
  ['Kleen Canteen', 'hipsters', 4]
]

// $: {
//   if($records) {
//     headers = Object.keys($records[0].record.fields)
//     rows = $records.map(record => Object.values(record.record.fields))
//   }
// }


</script>

<table>
  <col span="1" class="delete-col">
  <thead>
    <tr>
      <th></th>
      {#each headers as header}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <Row values={row}/>
    {/each}
  </tbody>
</table>

<style>
  table {
    table-layout: fixed;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  .delete-col {
    width: 32px;
  }
</style>
