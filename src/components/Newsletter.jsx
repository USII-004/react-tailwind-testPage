import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
        <div className='px-4 md:col-span-2 my-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips &  tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4 px-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email' />
            <button className='bg-[#00df9a] hover:bg-[#058f63] w-[150px] rounded-md mx-2 py-3 my-6 font-bold text-black'>Notify Me</button>
          </div>
          <p>We care about the protection of your data. Read our <a className='text-[#00df9a]' href='#'>Privacy Policy</a> </p>
        </div>        
      </div>
    </div>
  )
}

export default Newsletter