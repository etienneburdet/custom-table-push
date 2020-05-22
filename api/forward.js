const apikey = '?apikey=bf362c7d697b2767b15111e8d9a44ea3a4a94cccecedcfc5fa4e1cf6'
const baseUrl = 'https://eburdet.opendatasoft.com/api/management/v2/'
const query = 'files'

export default (req, res) => {
  res.status(200).json({
    message: 'Hello from API'
  })
}
