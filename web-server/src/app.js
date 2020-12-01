const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set handlebar engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static directory to serve
app.use(express.static(publicDirectoryPath))

//Set up static directory
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Luke G'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Luke G'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        name: 'Luke G',
        message: 'This is your help message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '52F',
        location: 'Taipei'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404page', {
        title: '404',
        name: 'Luke G',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404',
        name: 'Luke G',
        message: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000...')
})