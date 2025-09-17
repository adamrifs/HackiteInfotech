const express = require('express')
const { addBlog } = require('../controllers/BlogController')
const upload = require('../middleware/Multer')
const router = express.Router()

router.post('/addBlog', upload.single('image'), addBlog)

module.exports = router