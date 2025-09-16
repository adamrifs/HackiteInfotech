import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const Service = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='flex items-center justify-center !mb-[500px] sm:!mb-38'>
        <Services />
      </div>
    </div>
  )
}

export default Service
