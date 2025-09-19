import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [blogCount, setBlogCount] = useState(0)
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/blog/getBlog"
            );
            setBlogs(response.data);
            setBlogCount(response.data.length)
            console.log("Fetched blogs:", response.data);
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <BlogContext.Provider value={{ blogs, fetchBlogs, blogCount }}>
            {children}
        </BlogContext.Provider>
    )
}
