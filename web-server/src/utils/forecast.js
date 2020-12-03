const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0572a2fb0165bd4e7ac2a9604a7a215&query=' + lat + ',' + long + '&units=f'
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            console.log('Error........')
        } else if (body.success === false) {
            callback('Unable to find location. Please try again.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast;