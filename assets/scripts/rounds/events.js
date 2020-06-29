const api = require('./api')
const ui = require('./ui')
const getFormData = require('./../../../lib/get-form-fields')

const onCreateRound = event => {
  event.preventDefault()

  const data = getFormData(event.target)

  api.createRound(data)
    .then(ui.createRoundSuccess)
    .catch(ui.createRoundFailure)
}

module.exports = {
  onCreateRound
}