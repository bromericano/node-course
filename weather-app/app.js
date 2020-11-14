const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=b0572a2fb0165bd4e7ac2a9604a7a215&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees.')
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJvbWVyaWNhbm8iLCJhIjoiY2toaGZvdWtqMGl2eDJybnFhYm9qZWlpMSJ9.19GpgPl9eynN2-z8nNrkdw&limit=1'
request({ url: geocodeurl, json: true }, (error, response) => {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];
    console.log(lat, long)
})