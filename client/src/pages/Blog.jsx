import BlogCard from '@/components/BlogCard'
import BlogHero from '@/components/BlogHero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Blog = () => {
    return (
        <div>
            <Navbar/>
            {/* <BlogHero /> */}
            <BlogCard />
            <Footer/>
        </div>
    )
}

export default Blog