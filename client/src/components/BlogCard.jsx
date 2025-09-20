import React, { useContext, useState } from 'react'
import cardData from '../lib/data.js'
import { BlogContext } from '@/BlogContext.jsx'

const BlogCard = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const { blogs, fetchBlogs } = useContext(BlogContext)

  const handleOpen = (card) => {
    setSelectedCard(card)
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  return (
    <div className="!p-10 md:!px-20 !px-6">
      <h1 className="md:text-4xl text-2xl !pb-12">Latest Blog</h1>

      {/* Card container */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:gap-12">
        {blogs.map((item, index) => (
          <div
            className="md:w-[100%] md:h-[500px] flex flex-col"
            key={index}
          >
            {/* Image */}
            <div className="w-full md:h-[260px] h-[200px] rounded-3xl overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt={item.title}
              />
            </div>

            {/* Content */}
            <div className="!mt-4 flex flex-col flex-1">
              <p className="!text-[#ddd] md:text-sm text-xs !mb-2">
                {item.date}
              </p>
              <h2 className="md:text-2xl text-lg font-semibold !mb-3">
                {item.title}
              </h2>
              <p className="md:text-sm text-xs !text-[#ddd] line-clamp-2 !mb-3">
                {item.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(item);
                }}
                className="self-start !text-blue-400 md:text-sm text-xs hover:!text-white transition duration-300 active:scale-90 ease-in cursor-pointer"
              >
                See more ...
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 !p-4">
          <div className="bg-gray-950 dark:bg-neutral-900 rounded-2xl max-w-2xl w-full !p-6 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute !top-6 !right-6 !text-white hover:!text-black text-sm bg-black hover:bg-white !px-3 !py-1 cursor-pointer rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-64 object-cover rounded-lg !mb-4"
            />
            <p className="!text-sm !text-gray-400 !mb-2">{selectedCard.date}</p>
            <h2 className="!text-2xl font-bold !mb-4">{selectedCard.title}</h2>
            <p className="!text-base !text-gray-600 dark:!text-gray-300">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </div>

  )
}

export default BlogCard