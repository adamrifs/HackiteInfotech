const express = require('express')
const { addBlog, getBlog, editBlog, deleteBlog } = require('../controllers/BlogController')
const upload = require('../middleware/Multer')
const protectRoute = require('../middleware/AdminMiddleware')
const router = express.Router()

router.post('/addBlog', protectRoute, upload.single('image'), addBlog)
router.get('/getBlog', getBlog)
router.put('/editBlog/:id', protectRoute, upload.single('image'), editBlog)
router.delete('/deleteBlog/:id', protectRoute, deleteBlog)

module.exports = router