'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-pw').on('submit', authEvents.onChangePw)
  $('.sign-out').on('click', authEvents.onSignOut)
})
