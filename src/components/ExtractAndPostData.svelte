<script context="module">
const headers = ['Nom', 'Commentaire', 'Note']

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

  const res = await fetch('/api/forward', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tableRecords)
  })
  console.log(res)
  const data = await res.json()
  console.log(data)
}

export { postData }
</script>
