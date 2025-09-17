const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const adminRoutes = require('./routes/AdminRoutes.js')
const blogRoutes = require('./routes/BlogRoutes.js')
const connectCloudinary = require('./config/Cloudinary.js')


const app = express()
const PORT = 5000


app.use(express.json())
app.use(cors())

connectDB()
connectCloudinary()

app.use('/api/admin', adminRoutes)
app.use('/api/blog', blogRoutes)

app.listen(PORT, () => {
    console.log(`server running succesfull on port ${PORT}`)
})