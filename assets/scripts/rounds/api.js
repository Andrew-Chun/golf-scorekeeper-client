const config = require('./../config')
const store = require('./../store')

const createRound = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/rounds',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexRounds = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/rounds',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRound = roundId => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/rounds/' + roundId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRound = (formData, roundId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/rounds/' + roundId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      round: {
        score: formData.round.score
      }
    }
  })
}

module.exports = {
  createRound,
  indexRounds,
  deleteRound,
  updateRound
}
