import React, { useState } from "react";

const BlogHero = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Tech marvels for your Home",
      date: "27/06/2002",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam odit provident quasi, accusantium accusamus ab a odio, laboriosam suscipit ipsam cumque laudantium pariatur asperiores maxime deleniti quae architecto? Amet.",
      image:
        "https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg",
    },
    {
      id: 2,
      title: "Smart Kitchen Gadgets",
      date: "27/06/2002",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime, quos molestias asperiores quae repellendus dolorum eveniet provident quis!",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    },
    {
      id: 3,
      title: "Future of Smart Living",
      date: "27/06/2002",
      description:
        "Voluptatem earum accusantium id repellat accusamus, voluptates quasi natus doloribus, alias sint dicta. Fugiat facilis commodi ipsa neque.",
      image:
        "https://images.pexels.com/photos/16284696/pexels-photo-16284696.jpeg",
    },
  ];

  return (
    <div className="md:!p-0 md:!px-20 !p-5 !py-0 overflow-x-hidden">
      <h1 className="md:text-4xl text-2xl md:!pt-20 !pt-14">Top Blogs</h1>
      <div className="flex items-start gap-3 !py-4 relative overflow-x-auto md:overflow-x-hidden">
        {/* First big blog */}
        <div
          className="min-w-[300px] md:min-w-[650px] cursor-pointer"
          onClick={() => setSelectedBlog(blogs[0])}
        >
          <div className="w-[100%]">
            <img
              src={blogs[0].image}
              className="w-[100%] h-[260px] md:h-[360px] object-cover rounded-3xl"
              alt={blogs[0].title}
            />
          </div>
          <p className="!py-4 text-sm">{blogs[0].date}</p>
          <h3 className="text-2xl font-semibold !pb-4">{blogs[0].title}</h3>
          <p className="!text-[#ddd] w-[300px] md:w-[600px]">
            {blogs[0].description}
          </p>
        </div>

        {/* Right side smaller blogs */}
        <div className="flex md:flex-col gap-4">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row gap-2 cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover rounded-3xl h-[260px] md:h-[270px] w-[300px]"
                />
              </div>
              <div>
                <p className="!pb-4 text-sm">{blog.date}</p>
                <h3 className="text-2xl font-semibold !pb-4">{blog.title}</h3>
                <p className="w-[300px] md:w-[300px] text-sm !text-[#ddd]">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-950 dark:bg-neutral-900 rounded-2xl max-w-2xl w-full !p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute !top-8 !right-8 !text-white hover:!text-black text-sm bg-black hover:bg-white !px-2 !py-1 cursor-pointer rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-lg !mb-4"
            />
            <p className="text-sm text-gray-400">{selectedBlog.date}</p>
            <h2 className="text-2xl font-bold !mb-3">{selectedBlog.title}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {selectedBlog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogHero;
