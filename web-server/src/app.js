const path = require('path')
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '52F',
        location: 'Taipei'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000...')
})