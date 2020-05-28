/* global fetch */
const postData = async (rows) => {
  const res = await fetch('/api/forward', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(rows)
  })
  const data = await res.json()
  console.log('Posted :', data)
}

const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  const records = data.records
  const rows = records.map((record) => record.record.fields)
  return rows
}

export { postData, getData }
