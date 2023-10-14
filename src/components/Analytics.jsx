import React from 'react'
import Think from '../images/think.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Think} alt='/' className='w-[500px] mx-auto my-4' />
        <div className='flex flex-col justify-center'>
          <p className='font-bold text-[#00df9a] md:text-2xl sm:text-xl text-sm'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='text-lg md:text-4xl sm:text-2xl font-bold md:py-4 py-2'>Manage Data Analytics Centrally</h1>
          <p className='text-sm md:text-lg'>
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
          </p>
          <button className='bg-black hover:text-white w-[200px] rounded-md mx-auto md:mx-0 py-3 my-6 font-bold text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics