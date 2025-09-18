const Blog = require("../models/BlogSchema");
const cloudinary = require('cloudinary').v2;

const addBlog = async (req, res) => {
    try {
        const { title, description } = req.body;

        let imageUrl = "";

        if (req.file) {
            // Upload to Cloudinary using buffer
            const uploadResult = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "blogs" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                stream.end(req.file.buffer);
            });

            imageUrl = uploadResult.secure_url;
        }

        const blog = new Blog({
            title,
            description,
            image: imageUrl,
            date: new Date()
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred on addBlog" });
    }
};

const getBlog = async (req, res) => {
    try {
        const getBlogs = await Blog.find()
        res.status(200).json(getBlogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error occurred on getBlog" });
    }
}
const editBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body

        const blog = await Blog.findById(id)
        if (!blog) {
            return res.status(500).json({ message: "blog not found" })
        }
        if (title) blog.title = title
        if (description) blog.description = description

        if (req.file) {
            const uploadResult = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "blogs" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                stream.end(req.file.buffer);
            });

            blog.image = uploadResult.secure_url;
        }
        await blog.save()
        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error occurred on editBlog" });
    }
}
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.image) {
            const publicId = blog.image.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`blogs/${publicId}`)
        }
        await Blog.findByIdAndDelete(id)
        res.status(200).json({ message: "Blog and image deleted successfully" });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error occurred on deleteBlog" });
    }
}
module.exports = { addBlog, getBlog, editBlog, deleteBlog };
