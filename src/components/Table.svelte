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

  const tableRows = [...document.querySelectorAll('tbody tr')]
  const tableRecords = tableRows.map(formRecordFromRow)
  const contents = {
    "content": "language,phrase\nEnglish,Hello World\nEsperanto,Saluton mondo\n",
    "mimetype": "text/csv",
    "filename": "data.csv"
  }

  const apikey = '?apikey=bf362c7d697b2767b15111e8d9a44ea3a4a94cccecedcfc5fa4e1cf6'
  const baseUrl = 'https://eburdet.opendatasoft.com/api/management/v2/'
  const query = 'files'

  const res = await fetch(baseUrl + query + apikey, {
    body: "{\"content\": \"language,phrasenEnglish,Hello World\\nEsperanto,Saluton mondo\\n\", \"mimetype\": \"text/csv\", \"filename\": \"data.csv\"}",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
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
