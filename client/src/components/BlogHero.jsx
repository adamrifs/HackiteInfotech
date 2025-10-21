import { BlogContext } from "@/BlogContext";
import React, { useContext, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogHero = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [topBlogs, setTopBlogs] = useState([]);
  const { blogs, fetchBlogs, blogCount } = useContext(BlogContext)

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    if (blogs.length > 0 && topBlogs.length === 0) {
      const shuffled = [...blogs].sort(() => Math.random() - 0.5); // shuffle blogs
      setTopBlogs(shuffled.slice(0, 3)); // take top 3
    }
  }, [blogs, topBlogs]);


  return (
    <div className="md:!p-0 md:!px-20 !p-5 !py-0 overflow-x-hidden !pb-5">
      <h1 className="md:text-4xl text-2xl md:!pt-17 !pt-14 !pb-6 md:!pb-0 !mt-15">Top Blogs</h1>

      {topBlogs.length > 0 ? (
        <div className="flex items-start gap-6 !py-4 relative overflow-x-auto md:overflow-x-hidden">
          {/* First big blog */}
          <div
            className="min-w-[350px] md:min-w-[650px] cursor-pointer"
            onClick={() => setSelectedBlog(topBlogs[0])}
          >
            <div className="w-full">
              <img
                src={topBlogs[0].image}
                className="w-full h-[260px] md:h-[360px] object-cover rounded-3xl"
                alt={topBlogs[0].title}
              />
            </div>
            <p className="!py-4 !text-sm !text-gray-400">{topBlogs[0].date}</p>
            <h3 className="!text-2xl font-semibold !pb-4">{topBlogs[0].title}</h3>
            <p className="!text-[#ddd] !w-[350px] md:!w-[600px] !mb-2 line-clamp-3 md:line-clamp-none">
              {topBlogs[0].description}
            </p>
          </div>

          {/* Right side smaller blogs */}
          <div className="flex md:flex-col gap-6">
            {topBlogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col md:flex-row gap-4 cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover rounded-3xl h-[220px] md:h-[270px] w-[350px] md:w-[400px]"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <p className="!pb-2 !text-sm !text-gray-400">{blog.date}</p>
                  <h3 className="!text-2xl font-semibold !pb-3">{blog.title}</h3>
                  <p className="!w-[350px] md:!w-[300px] !text-sm !text-[#ddd] line-clamp-3 md:line-clamp-none">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Skeleton Loader while fetching
        <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center items-center gap-4 !pl-4 !pt-4">
          {[...Array(blogCount)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-md max-w-sm animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="w-full h-56 bg-gray-700"></div>

              <div className="!p-4 !space-y-3">
                {/* Title Skeleton */}
                <div className="h-5 bg-gray-700 rounded w-3/4"></div>

                {/* Content Skeleton */}
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 !p-4">
          <div className="bg-gray-950 dark:bg-neutral-900 rounded-2xl max-w-2xl w-full !p-6 !py-10 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute !top-12 !right-7 !text-white hover:!text-black text-sm bg-black hover:bg-white !px-2 !py-1 cursor-pointer rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-lg !mb-4"
            />
            <p className="!text-sm !text-gray-400 !mb-2">{selectedBlog.date}</p>
            <h2 className="!text-2xl font-bold !mb-4">{selectedBlog.title}</h2>
            <p className="!text-base !text-gray-600 dark:!text-gray-300">
              {selectedBlog.description}
            </p>
          </div>
        </div>
      )}
    </div>

  );
};

export default BlogHero;
