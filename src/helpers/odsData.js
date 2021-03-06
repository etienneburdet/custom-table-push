/* global fetch */

// const fakerows = [
//  {
//      "name": "Agra Express",
//      "origin": "Agra Cantt",
//      "destination": "New Delhi"
//  },
//  {
//      "name": "Gour Express",
//      "origin": "Balurghat",
//      "destination": "Sealdah"
//  }
// ]

const postData = async (rows) => {
  if (rows.length > 0) {
    const res = await fetch('/api/forward', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(rows)
    })
    const data = await res.json()
    console.log('Posted :', data)
  } else {
    console.error('Empty dataset')
  }
}

const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  const records = data.records
  const rows = records.map((record) => record.record.fields)
  return rows
}

export { postData, getData }
