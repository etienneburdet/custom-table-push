import fetch from 'node-fetch'

const apikey = '?apikey=bf362c7d697b2767b15111e8d9a44ea3a4a94cccecedcfc5fa4e1cf6'
const baseUrl = 'https://eburdet.opendatasoft.com/api/management/v2/'
const query = 'files'

const pushDataToServer = async (data) => {
  console.log('sending', data)
  const res = await fetch(baseUrl + query + apikey)
  console.log(res)
  const json = await res.json()
  return json
}

export default async (reqFromClient, resToClient) => {
  const data = reqFromClient.body
  const json = await pushDataToServer(data)
  resToClient.json(json)
}
