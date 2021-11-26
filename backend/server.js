import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import books from './data/books.js'


dotenv.config()
connectDB()

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

const PORT = process.env.PORT

app.listen(PORT, console.log(`server runs at port number ${PORT}`))