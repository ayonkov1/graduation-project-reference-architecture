import express from 'express'
const cors = require('cors')
const products = require('./controllers/products-controller')
const app = express()

app.use(cors())
app.use('/products', products)

const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
