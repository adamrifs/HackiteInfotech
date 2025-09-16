import React from 'react'
import avatar from '../assets/avatar.jpg'

const BlogHero = () => {
    return (
        <div className='md:!p-10 md:!px-20 !p-5 !py-10'>
            <h1 className='md:text-5xl text-2xl md:!pt-20 !pt-10'>Top Blogs</h1>
            <div className='flex items-start gap-3 !py-8 relative overflow-x-auto  md:overflow-x-hidden '>
                <div className='min-w-[400px] md:min-w-[650px]'>
                    <div className='w-[100%]'>
                        <img src="https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg" className='w-[100%] h-[260px] md:h-[360px] object-cover rounded-3xl' />
                    </div>
                    <p className='!py-4 text-sm'>27/06/2002</p>
                    <h3 className='text-2xl font-semibold !pb-4'>Tech marvels for your Home</h3>
                    <p className='!text-[#ddd] w-[400px] md:w-[600px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam odit provident quasi, accusantium accusamus ab a odio, laboriosam suscipit ipsam cumque laudantium pariatur asperiores maxime deleniti quae architecto? Amet.</p>
                </div>
                {/* second box */}
                <div className='flex md:flex-col gap-4'>
                    <div className='flex flex-col md:flex-row md:min-w-[400px] min-w-[400px] gap-2'>
                        <div className=''>
                            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" className='object-cover rounded-3xl h-[260px] md:h-[300px] w-[400px]' />
                        </div>
                        <div>
                            <p className='!pb-4 text-sm'>27/06/2002</p>
                            <h3 className='text-2xl font-semibold !pb-4'>Tech marvels for your Home</h3>
                            <p className='w-[400px] md:w-[300px] text-sm !text-[#ddd]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam odit provident quasi, accusantium accusamus ab a odio, laboriosam suscipit ipsam cumque laudantium pariatur asperiores maxime deleniti quae architecto? Amet.</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md-min-w[650px] min-w-[400px] gap-4'>
                        <div className=''>
                            <img src="https://images.pexels.com/photos/16284696/pexels-photo-16284696.jpeg" className='object-cover rounded-3xl h-[260px] md:h-[300px] w-[400px]' />
                        </div>
                        <div>
                            <p className='!pb-4 text-sm'>27/06/2002</p>
                            <h3 className='text-2xl font-semibold !pb-4'>Tech marvels for your Home</h3>
                            <p className='w-[400px] md:w-[300px] text-sm !text-[#ddd]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam odit provident quasi, accusantium accusamus ab a odio, laboriosam suscipit ipsam cumque laudantium pariatur asperiores maxime deleniti quae architecto? Amet.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogHero