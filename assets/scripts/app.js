'use strict'

const authEvents = require('./auth/events')
const roundEvents = require('./rounds/events')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-pw').on('submit', authEvents.onChangePw)
  $('.sign-out').on('click', authEvents.onSignOut)

  $('.create-round').on('submit', roundEvents.onCreateRound)
  $('.index-rounds').on('click', roundEvents.onIndexRounds)

  $('.change-pw').hide()
  $('.sign-out').hide()
  $('.create-round').hide()
  $('.index-rounds').hide()
})
