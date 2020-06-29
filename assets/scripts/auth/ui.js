const store = require('./../store')

const signUpSuccess = responseData => {
  $('sign-up').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
}

const signUpFailure = function () {
  $('sign-up').trigger('reset')
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

const signInSuccess = responseData => {
  $('form').trigger('reset')
  $('.forms').hide()
  $('#message').text(`${responseData.user.email} signed in successfully!`).removeClass().addClass('success').show()
  $('#new-game').show()
  $('.dropdown-toggle').text(responseData.user.email)
  $('#user-actions').show()
  store.user = responseData.user
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
