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
  console.log(event.target)
  console.log(roundId)
  api.deleteRound(roundId)
    .then(() => {
      $('.rounds-display').empty()
      onIndexRounds(event)
    })
    .catch(ui.deleteRoundFailure)
}

module.exports = {
  onCreateRound,
  onIndexRounds,
  onClearRounds,
  onDeleteRound
}
