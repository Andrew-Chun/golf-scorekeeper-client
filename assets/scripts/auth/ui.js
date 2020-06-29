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
  $('#message').text(`${responseData.user.email} signed in successfully!`).removeClass().addClass('success').show()
  store.user = responseData.user
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

const changePwSuccess = () => {
  $('form').trigger('reset')
  $('#message').text(`Password changed successfully!`).removeClass().addClass('success').show()
}

const changePwFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Password change failure.').removeClass().addClass('failure').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure
}
