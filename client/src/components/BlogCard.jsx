import React, { useContext, useState } from 'react'
import cardData from '../lib/data.js'
import { BlogContext } from '@/BlogContext.jsx'

const BlogCard = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const {blogs, fetchBlogs} = useContext(BlogContext)

  const handleOpen = (card) => {
    setSelectedCard(card)
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  return (
    <div className="!p-10 !px-20">
      <h1 className="md:text-5xl text-2xl !pb-10">Latest Blog</h1>

      {/* card container */}
      <div className="grid xl:grid-cols-3 md:grid-cols-1 md:w-[100%] grid-cols-1 justify-between gap-10 xl:gap-x-18 items-center ">
        {blogs.map((item, index) => (
          <div
            className="md:w-[100%] md:h-[500px]"
            key={index}

          >
            <div className="md:w-[100%] md:h-[300px] rounded-3xl overflow-hidden">
              <img
                src={item.image}
                className="w-[100%] md:h-[100%] object-cover"
              />
            </div>
            <div className="">
              <p className="!text-[#ddd] md:text-sm text-xs !px-1 !py-4">
                {item.date}
              </p>
            </div>
            <div>
              <h2 className="md:text-2xl text-lg font-[600] !pb-3">
                {item.title}
              </h2>
            </div>
            <div>
              <p className="md:text-sm text-xs !text-[#ddd] line-clamp-2 ">
                {item.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpen(item)
                }}
                className="!text-blue-400 md:text-sm text-xs hover:!text-[white] transition duration-300 active:scale-90 ease-in cursor-pointer"
              >
                See more ...
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-950 dark:bg-neutral-900 rounded-2xl max-w-2xl w-full !p-6 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute !top-8 !right-8 !text-white hover:!text-black text-sm bg-black hover:bg-white !px-2 !py-1 cursor-pointer rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-64 object-cover rounded-lg !mb-4"
            />
            <p className="text-sm text-gray-400">{selectedCard.date}</p>
            <h2 className="text-2xl font-bold !mb-3">{selectedCard.title}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogCard