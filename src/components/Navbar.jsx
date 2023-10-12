import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <div className='text-white flex justify-between items-center h-24 px-4 mx-auto md:hidden'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
        <div onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
          <ul className=' p-2 uppercase'>
            <li className='p-4 border-b border-gray-600'>
              <a href='#'>Home</a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a href='#'>Company</a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a href='#'>Resources</a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a href='#'>About</a>
            </li>
            <li className='p-4'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='text-white hidden justify-between items-center h-24 px-4 mx-auto max-w-[1240px] md:flex'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
        <div className=''>
          <ul className='flex uppercase'>
            <li className='p-4'>
              <a href='#'>Home</a>
            </li>
            <li className='p-4'>
              <a href='#'>Company</a>
            </li>
            <li className='p-4'>
              <a href='#'>Resources</a>
            </li>
            <li className='p-4'>
              <a href='#'>About</a>
            </li>
            <li className='p-4'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar