import React from 'react'

const Cards = () => {
  return (
    <div className='bg-white px-4 w-full py-[10rem]'>
      <div className='mx-auto grid md:grid-cols-3 gap-7 max-w-[1240px]'>
        {/* first card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold py-7 text-center'>Single User</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] hover:bg-[#058f63] w-[200px] rounded-md mx-auto py-3 my-6 font-bold text-black'>Start trial</button>
        </div>
        {/* second card */}
        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold py-7 text-center'>Single User</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
          </div>
          <button className='text-[#00df9a] hover:text-[#058f63] w-[200px] rounded-md mx-auto py-3 my-6 font-bold bg-black'>Start trial</button>
        </div>
        {/* third card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold py-7 text-center'>Single User</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted User</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] hover:bg-[#058f63] w-[200px] rounded-md mx-auto py-3 my-6 font-bold text-black'>Start trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards