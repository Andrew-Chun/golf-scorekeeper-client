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
  $('.log-in-forms').hide()
  $('.navbar').show()
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
  $('.log-in-forms').show()
  $('#collapseSignIn').collapse('hide')
  $('.navbar').hide()
  $('#collapseCreate').collapse('hide')
  $('#collapseUpdate').collapse('hide')
  $('#collapseChangePw').collapse('hide')
  $('.rounds-display').empty()
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
