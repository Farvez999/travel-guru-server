const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const hotels = require('./data/hotel.json')
const places = require('./data/places.json')

app.get('/', (req, res) => {
    res.send('Travel guru running')
})

app.get('/places', (req, res) => {
    res.json(places)
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const place = places.find(place => place.id === parseInt(id));
    res.send(place)
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const hotel = hotels.find(hotel => hotel.id === parseInt(id));
    res.send(hotel)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})