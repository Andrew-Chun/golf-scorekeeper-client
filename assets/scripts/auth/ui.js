const store = require('./../store')

const signUpSuccess = responseData => {
  $('.sign-up').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
}

const signUpFailure = function () {
  $('.sign-up').trigger('reset')
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

const signInSuccess = responseData => {
  $('.sign-in').trigger('reset')
  $('#message').text(`${responseData.user.email} signed in successfully!`).removeClass().addClass('success').show()
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.sign-in-toggle').hide()
  $('.cg-pw-toggle').show()
  $('.sign-out').show()
  $('.crud-action-buttons').show()
  store.user = responseData.user
}

const signInFailure = () => {
  $('.sign-in').trigger('reset')
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

const changePwSuccess = () => {
  $('.change-pw').trigger('reset')
  $('#message').text(`Password changed successfully!`).removeClass().addClass('success').show()
}

const changePwFailure = () => {
  $('.change-pw').trigger('reset')
  $('#message').text('Password change failure.').removeClass().addClass('failure').show()
}

const signOutSuccess = () => {
  $('#message').text(`Signed Out successfully!`).removeClass().addClass('success').show()
  $('.sign-up').show()
  $('.sign-in-toggle').show()
  $('.cg-pw-toggle').hide()
  $('.sign-out').hide()
  $('.crud-action-buttons').hide()
}

const signOutFailure = () => {
  $('#message').text('Sign Out failure.').removeClass().addClass('failure').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
