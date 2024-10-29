const scriptURL = 'https://script.google.com/macros/s/AKfycbyqMeDwiX_wRA19g5lT-6Egj9fQQaMkzqP6uQoC0ipCa5xPm97q1xLi34chFqon_EXNKA/exec'
const form = document.forms['contact-form-submissions']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})