const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog