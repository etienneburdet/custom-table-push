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
  const baseUrl = 'https://eburdet.opendatasoft.com/api/management/v2/datasets'
  const api = '?apikey=5035b2640587b7f1fd96b22322b2c42becb8056fe586f7e9a544d7ca'
  const q = '/restaurants/resorces'
  const tableRows = [...document.querySelectorAll('tbody tr')]
  const tableRecords = tableRows.map(formRecordFromRow)
  try {
    const res = await fetch(baseUrl + q, {
      mode: 'no-cors',
      headers: {
        Authorization: 'Bearer 5035b2640587b7f1fd96b22322b2c42becb8056fe586f7e9a544d7ca'
      }
    })
    console.log(res)
  } catch (error) {
    console.log('Erreur', error)
  }
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

<button on:click={postData}>Save !</button>

<style>
  table {
    table-layout: fixed;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  button {
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
