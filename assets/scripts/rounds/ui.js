const showRoundsTemplate = require('./../templates/round-listing.handlebars')

const createRoundSuccess = () => {
  $('.create-round').trigger('reset')
  $('#message').text('Successfully added a new round the database!').removeClass().addClass('success').show()
}

const createRoundFailure = () => {
  $('.create-round').trigger('reset')
  $('#message').text('Failed to add a new round to the database.').removeClass().addClass('failure').show()
}

const indexRoundSuccess = (responseData) => {
  console.log(responseData)
  $('#message').text('Successfully retrieved your previous rounds!').removeClass().addClass('success').show()
  const showRoundsHtml = showRoundsTemplate({rounds: responseData.rounds})
  $('.rounds-display').append(showRoundsHtml)
}

const indexRoundFailure = () => {
  $('#message').text('Failed to retrieve previous rounds.').removeClass().addClass('failure').show()
}

const clearRounds = () => {
  $('#message').empty()
  $('.rounds-display').empty()
}

const deleteRoundFailure = () => {
  $('#message').text('You are not the owner of this round!').removeClass().addClass('failure').show()
}

const updateRoundSuccess = () => {
  $('.update-round').trigger('reset')
  $('#message').text('Successfully updated your previous round!').removeClass().addClass('success').show()
  $('.rounds-display').empty()
}

const updateRoundFailure = () => {
  $('.update-round').trigger('reset')
  $('#message').text('You are not the owner of this round!').removeClass().addClass('failure').show()
}

module.exports = {
  createRoundSuccess,
  createRoundFailure,
  indexRoundSuccess,
  indexRoundFailure,
  clearRounds,
  deleteRoundFailure,
  updateRoundSuccess,
  updateRoundFailure
}
