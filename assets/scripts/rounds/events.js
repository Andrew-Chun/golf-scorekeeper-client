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

const onIndexRounds = event => {
  api.indexRounds()
    .then(ui.indexRoundSuccess)
    .catch(ui.indexRoundFailure)
}

const onClearRounds = event => {
  ui.clearRounds()
}

const onDeleteRound = event => {
  const roundId = event.target.getAttribute('data-id')

  api.deleteRound(roundId)
    .then(ui.deleteRoundSuccess)
    .catch(ui.deleteRoundFailure)
}

const onUpdateRound = event => {
  event.preventDefault()

  const roundId = event.target.getAttribute('data-id')
  const data = getFormData(event.target)

  console.log(event.target)
  console.log(data)
  console.log(roundId)

  api.updateRound(data, roundId)
    .then(ui.updateRoundSuccess)
    .catch(ui.updateRoundFailure)
}

module.exports = {
  onCreateRound,
  onIndexRounds,
  onClearRounds,
  onDeleteRound,
  onUpdateRound
}
