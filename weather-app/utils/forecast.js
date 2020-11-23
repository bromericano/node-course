const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0572a2fb0165bd4e7ac2a9604a7a215&query=' + lat + ',' + long + '&units=f'
    request({ url: url, json: true }, (error, response) => {
        if(error) {
            console.log('Error........')
        } else if (response.body.success === false) {
            callback('Unable to find location. Please try again.', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast;