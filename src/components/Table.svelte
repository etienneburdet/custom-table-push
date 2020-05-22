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

const matchCellToHeader = (record, cell, index) => {
  if (index > 1 ) { record[headers[index - 2]] = cell.innerText }
  return record
}

const formRecordFromRow = (row) => {
  const cells = [...row.childNodes]
  const rowRecord = cells.reduce(matchCellToHeader,{})
  return rowRecord
}

const postData = async () => {
  console.log('send data')
  const tableRows = [...document.querySelectorAll('tbody tr')]
  const tableRecords = tableRows.map(formRecordFromRow)

  const res = await fetch('/api/forward')
  console.log(res)
  const data = await res.json()
  console.log(data)
}
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

<input type="submit" value="Save !" on:click={postData}>

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
