import fetch from 'node-fetch'

const apikey = '?apikey=bf362c7d697b2767b15111e8d9a44ea3a4a94cccecedcfc5fa4e1cf6'
const baseUrl = 'https://eburdet.opendatasoft.com/api/management/v2/'

const pushFileToServer = async (data) => {
  console.log(data)
  const resFromServ = await fetch(baseUrl + 'files' + apikey, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "content": JSON.stringify(data),
      "mimetype": "application/json",
      "filename": "restaurant.json"})
  })
  const json = await resFromServ.json()
  const fileUrl = await json.url
  return fileUrl
}

const getResourceUid = async () => {
  const resFromServ = await fetch(baseUrl + 'datasets/da_qf8jze/resources' + apikey)
  const json = await resFromServ.json()
  const resourceUid = await json[0].resource_uid
  return resourceUid
}

const updateResource = async (resourceUid, fileUrl) => {
  const resFromServ = await fetch(baseUrl + 'datasets/da_qf8jze/resources/' + resourceUid + apikey, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "url": fileUrl,
      "title": "restaurants.json",
      "type": "jsonfile",
      "params": {
        "json_root": ""
      },
    })
  })
  return resFromServ
}

const publishDataset = async () => {
  const resFromServ = await fetch( baseUrl + 'datasets/da_qf8jze/publish' + apikey, {
    method: 'PUT'
  })
  return resFromServ
}

export default async (reqFromClient, resToClient) => {
  const data = reqFromClient.body
  console.log("data",data)
  const resourceUid = await getResourceUid()
  const fileUrl = await pushFileToServer(data)
  await updateResource(resourceUid, fileUrl)
  const resFromServ = await publishDataset()
  const json = await resFromServ.json()
  resToClient.json(json)
}
