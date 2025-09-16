const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
const PORT = 5000


app.use(express.json())
app.use(cors())

connectDB()

app.listen(PORT, () => {
    console.log(`server running succesfull on port ${PORT}`)
})