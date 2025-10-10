const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const adminRoutes = require('./routes/AdminRoutes.js')
const blogRoutes = require('./routes/BlogRoutes.js')
const connectCloudinary = require('./config/Cloudinary.js')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173","https://www.hackiteinfotech.com"],
    credentials: true
}))
app.use(cookieParser())

connectDB()
connectCloudinary()

app.use('/api/admin', adminRoutes)
app.use('/api/blog', blogRoutes)

app.listen(port, () => {
    console.log(`server running succesfull on port ${port}`)
})