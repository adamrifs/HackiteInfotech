import React, { useEffect, useState } from "react";
import Image from "../assets/avatar.jpg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddBlog = () => {
  const [blogModal, setBlogModal] = useState(false);
  const [editBlog, setEditBlog] = useState(false);
  const [blogsId, setBlogsId] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // ============================== fetching blogs =======================
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/blog/getBlog"
      );
      setBlogs(response.data);
      console.log("Fetched blogs:", response.data);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  //================================= adding blogs =========================

  const handleAddBlog = async () => {
    try {
      const formdata = new FormData();
      formdata.append("image", image);
      formdata.append("title", title);
      formdata.append("description", description);

      const response = await axios.post(
        "http://localhost:5000/api/blog/addBlog",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
      setBlogModal(false);
      fetchBlogs();
      setDescription("");
      setTitle("");
      toast.success("Blog added");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  //========================= delete a blog =====================================

  const handleDeleteBlog = async (Id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/blog/deleteBlog/${Id}`,
        { withCredentials: true }
      );
      fetchBlogs();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  //============================= edit a blog ====================================
  const handleEditOpen = (blog) => {
    setEditBlog(true);
    setBlogsId(blog._id);
    setTitle(blog.title);
    setDescription(blog.description);
    setImage(null);
  };
  const handleEditBlog = async (e) => {
    try {
      const formdata = new FormData();
      if (image) formdata.append("image", image);
      formdata.append("title", title);
      formdata.append("description", description);

      const response = await axios.put(
        `http://localhost:5000/api/blog/editBlog/${blogsId}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("Updated:", response.data);
      setTitle("");
      setDescription("");
      setBlogsId(null);
      setEditBlog(false);
      setImage(null);
      fetchBlogs();
      toast.success("Blog updated successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
        <ToastContainer />
        <div className="bg-gray-800 w-full !px-4 !py-2 flex justify-between items-center">
          <p className="text-2xl !pl-10 md:!pl-0">Blog</p>
          <button
            onClick={() => setBlogModal(true)}
            className="bg-gray-700 !py-1 !px-4 rounded-md cursor-pointer hover:bg-gray-600"
          >
            <p className="font-semibold">Add Blog</p>
          </button>
        </div>

        {/* ================= card starts here =================== */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center items-center">
        {blogs.map((item, index) => (
          <div className="!p-3" key={index}>
            <div className="bg-gray-900  text-white rounded-2xl overflow-hidden shadow-md max-w-sm">
              {/* Image Wrapper */}
              <div className="relative">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-56 object-cover rounded-t-2xl"
                />

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEditOpen(item)}
                    className="bg-gray-800 hover:bg-gray-700 !p-2 rounded-full cursor-pointer"
                  >
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(item._id)}
                    className="bg-red-600 hover:bg-red-500 !p-2 rounded-full cursor-pointer"
                  >
                    <MdDelete size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="!p-4">
                <p className="text-sm text-gray-400">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                </p>
                <h2 className="!mt-2 text-xl font-bold">{item.title}</h2>
                <p className="!mt-1 text-gray-300 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* ==================== adding a blog ======================== */}
        {blogModal && (
          <div className="bg-black/80 fixed inset-0 flex items-center justify-center">
            <div className="flex flex-col min-w-5xl bg-gray-800 rounded-2xl !p-5">
              <h1 className="font-semibold text-2xl text-center !mb-8">
                Add a Blog
              </h1>
              <label className="!mb-1">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              />
              <label className="!mb-1">Title</label>
              <input
                placeholder="Blog Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              />
              <label className="!mb-1">description</label>
              <textarea
                placeholder="Blog Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setBlogModal(false)}
                  className="bg-gray-600 hover:bg-gray-500 !px-4 !py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddBlog}
                  className="bg-blue-600 hover:bg-blue-500 !px-4 !py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================= edit blog =================================  */}
        {editBlog && (
          <div className="bg-black/80 fixed inset-0 flex items-center justify-center">
            <div className="flex flex-col min-w-5xl bg-gray-800 rounded-2xl !p-5">
              <h1 className="font-semibold text-2xl text-center !mb-8">
                edit a Blog
              </h1>
              <label className="!mb-1">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              />
              <label className="!mb-1">Title</label>
              <input
                placeholder="Blog Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              />
              <label className="!mb-1">description</label>
              <textarea
                placeholder="Blog Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditBlog(false)}
                  className="bg-gray-600 hover:bg-gray-500 !px-4 !py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditBlog}
                  className="bg-blue-600 hover:bg-blue-500 !px-4 !py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddBlog;
