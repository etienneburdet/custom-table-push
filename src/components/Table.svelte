<script>
import { records } from '../store.js'
import Row from './Row.svelte'

let headers = []
let rows = []

$: {
  if($records) {
    headers = Object.keys($records[0].record.fields)
    rows = $records.map(record => Object.values(record.record.fields))
  }
}
</script>

<table>
  <thead>
    <tr>
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
