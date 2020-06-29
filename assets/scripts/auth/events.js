const api = require('./api')
const ui = require('./ui')
const getFormData = require('./../../../lib/get-form-fields')

const onSignUp = event => {
  event.preventDefault()

  const data = getFormData(event.target)
  console.log(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const data = getFormData(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}