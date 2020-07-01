# OpenWeatherMap 3rd Party API

let apiKey = 'f84477b003b7eefe272782b58af26f4b'
let city = 'Atlanta'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

curl "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f84477b003b7eefe272782b58af26f4b" \
  --include \
  --request GET \

echo
