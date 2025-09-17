const Blog = require("../models/BlogSchema");

const addBlog = async (req, res) => {
    try {
        const { title, description } = req.body

        let imageUrl = "";
        if (req.file) {
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "blogs" },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    }
                )
                uploadStream.end(req.file.buffer)
            })
            imageUrl = result.secure_url
        }

        const blog = new Blog({
            title,
            description,
            image: imageUrl,
            date: new Date()
        })
        await blog.save()
        res.status(201).json(blog)
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "error occured on addBlog" })
    }
}

module.exports = { addBlog }