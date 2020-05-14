/* global fetch */
import './app.scss'

const query = '/api/push/1.0/custom-form/realtime/push/?pushkey=c96bb9984316e2e56d571b1ad7a6fa24c9f02106ff4095d18839a1ee'
const baseUrl = 'https://eburdet.opendatasoft.com'
const form = document.querySelector('form')
const formData = new FormData(form)

const postJSONToUrl = (event) => {
  event.preventDefault()
  const jsonData = {
    nom: formData.get('nom'),
    commentaire: formData.get('commentaire'),
    note: formData.get('note')
  }
  fetch(baseUrl + query, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  }).then(res => console.log(res))
}

form.addEventListener('submit', postJSONToUrl)
