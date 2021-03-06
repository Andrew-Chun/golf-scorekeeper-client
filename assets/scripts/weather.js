const getFormData = require('./../../lib/get-form-fields')

const apiKey = 'f84477b003b7eefe272782b58af26f4b'

const weather = (event) => {
  event.preventDefault()
  const data = getFormData(event.target)

  getWeather(data.city)
    .then(getWeatherSuccess)
    .catch(getWeatherFailure)
}

const getWeather = (city) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  })
}

const getWeatherSuccess = (responseData) => {
  $('.weather').trigger('reset')
  const city = responseData.name
  const temp = parseInt(responseData.main.temp)
  const temp2 = parseInt(responseData.main.feels_like)
  const description = responseData.weather[0].description
  $('.display-weather').html(`Currently in ${city} it's ${temp} &#8457 and feels like ${temp2} &#8457 with ${description}.`)
  $('#message').text('').removeClass().addClass('success').show()
}

const getWeatherFailure = () => {
  $('.weather').trigger('reset')
  $('#message').text('Failed to get your local weather.').removeClass().addClass('failure').show()
}

module.exports = weather
