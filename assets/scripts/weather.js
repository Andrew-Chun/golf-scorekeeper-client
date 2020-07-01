const getFormData = require('./../../lib/get-form-fields')

const apiKey = 'f84477b003b7eefe272782b58af26f4b'
// let city = 'Atlanta'
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

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
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  })
}

const getWeatherSuccess = (responseData) => {
  $('.weather').trigger('reset')
  console.log(responseData)
  const city = responseData.name
  const temp = responseData.main.temp
  const temp2 = responseData.main.feels_like
  const description = responseData.weather[0].description
  $('.display-weather').text(`Currently in ${city} it's ${temp} degrees F and feels like ${temp2} degrees F with ${description}.`)
  $('#message').text('').removeClass().addClass('success').show()
}

const getWeatherFailure = () => {
  $('.weather').trigger('reset')
  $('#message').text('Failed to get your local weather.').removeClass().addClass('failure').show()
}

module.exports = weather
