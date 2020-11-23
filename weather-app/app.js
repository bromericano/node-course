const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Creates variable containing the location input in the command line (ie node app.js Taipei)
const address = process.argv[2]
// If no address entered, ask for location
if(!address) {
    console.log('Please enter a location')
} else {
    // geocode looks up location information (latitude and longitude)
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log(error)
        }
        // forecast uses the lat,long from geocode to get weather data
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
