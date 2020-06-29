const createRoundSuccess = () => {
  $('.create-round').trigger('reset')
  $('#message').text('Successfully added a new round the database!').removeClass().addClass('success').show()
}

const createRoundFailure = () => {
  $('.create-round').trigger('reset')
  $('#message').text('Failed to add a new round to the database.').removeClass().addClass('failure').show()
}

module.exports = {
  createRoundSuccess,
  createRoundFailure
}
