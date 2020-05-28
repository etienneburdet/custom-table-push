<script context="module">
const postData = async (rows) => {
  const res = await fetch('/api/forward', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(rows)
  })
  console.log(res)
  const data = await res.json()
  console.log(data)
}

export { postData }
</script>
