import React, { useState } from "react";
import Image from "../assets/avatar.jpg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const AddBlog = () => {
  const [blogModal, setBlogModal] = useState(false);

  return (
    <div>
      <div className="bg-gray-800 w-full !px-4 !py-2 flex justify-between items-center">
        <p className="text-2xl">Blog</p>
        <button onClick={() => setBlogModal(true)} className="bg-gray-700 !py-2 !px-4 rounded-md cursor-pointer hover:bg-gray-600">
          <p className="font-semibold">Add Blog</p>
        </button>
      </div>

      <div className="!p-3">
        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-md max-w-sm">
          {/* Image Wrapper */}
          <div className="relative">
            <img
              src={Image}
              alt="image"
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-gray-800 hover:bg-gray-700 !p-2 rounded-full cursor-pointer">
                <FiEdit size={18} />
              </button>
              <button className="bg-red-600 hover:bg-red-500 !p-2 rounded-full cursor-pointer">
                <MdDelete size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="!p-4">
            <p className="text-sm text-gray-400">9 Min</p>
            <h2 className="!mt-2 text-xl font-bold">
              Housing Price On Up Again
            </h2>
            <p className="!mt-1 text-gray-300 text-sm line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              quae omnis, quibusdam illo totam aut doloremque, incidunt corporis
              est consequatur voluptatibus dolorum, ipsa odit. Adipisci hic
              asperiores assumenda nemo necessitatibus!
            </p>
          </div>
        </div>
      </div>

      {blogModal && (
        <div className="bg-black/80 fixed inset-0 flex items-center justify-center">
          <div className="flex flex-col min-w-5xl bg-gray-800 rounded-2xl !p-5">
            <h1 className="font-semibold text-2xl text-center !mb-8">Add a Blog</h1>
            <label className="!mb-1">Image</label>
            <input
              type="file"
              className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
            />
            <label className="!mb-1">Title</label>
            <input
              placeholder="Blog Title"
              type="text"
              className="w-full !p-2 !mb-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2"
            />
            <label className="!mb-1">description</label>
            <textarea
              placeholder="Blog Description"
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
                // onClick={handleAddBlog}
                className="bg-blue-600 hover:bg-blue-500 !px-4 !py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
