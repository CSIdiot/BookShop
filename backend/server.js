const express = require('express')
const books = require('./data/books')

const app = express()

app.get('/', (req, res) => {
    res.send('server has started')
})

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get('/api/books/:id', (req, res) => {
    const book = books.find(book => book._id === req.params.id)
    res.json(book)
})


app.listen(8888, console.log('server has started at port 8888...'))