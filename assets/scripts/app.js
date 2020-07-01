'use strict'

const authEvents = require('./auth/events')
const roundEvents = require('./rounds/events')
const weather = require('./weather')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-pw').on('submit', authEvents.onChangePw)
  $('.sign-out').on('click', authEvents.onSignOut)

  $('.create-round').on('submit', roundEvents.onCreateRound)
  $('.index-rounds').on('click', roundEvents.onIndexRounds)
  $('.clear-rounds').on('click', roundEvents.onClearRounds)
  $('.rounds-display').on('click', '.delete-round', roundEvents.onDeleteRound)
  $('.update-round').on('submit', roundEvents.onUpdateRound)

  $('.weather').on('submit', weather)

  $('.navbar').hide()
})
