import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:text-3xl sm:text-2xl'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl md:text-7xl sm:text-6xl font-bold md:py-6'>Grow With Data.</h1>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold flex justify-center py-3'>
          <p>Fast, flexible financing for</p>
          <Typed className='text-gray-500 pl-2 md:pl-4' strings={['BTB', 'BTC', 'SASS']} typeSpeed={140} backSpeed={140} loop />
        </div>
        <p className='md:text-2xl sm:text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] hover:bg-[#058f63] w-[200px] rounded-md mx-auto py-3 my-6 font-bold text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero