const signUpSuccess = responseData => {
  $('sign-up').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
}

const signUpFailure = function () {
  $('sign-up').trigger('reset')
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
