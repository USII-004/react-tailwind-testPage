import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-4 w-full'>
      <div className='max-w-[1240px] mx-auto py-16 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
          <p>couple of random text here since for some reason I cannot have the lorem text just display wthout having to manually type it in, So here  you have it.</p>
          <div className='flex py-2 md:w-[75%]'>
            <a href='#'><FaFacebookSquare size={30} className='mx-2' /></a>
            <a href='#'><FaInstagramSquare size={30} className='mx-2' /></a>
            <a href='#'><FaTwitterSquare size={30} className='mx-2' /></a>
            <a href='#'><FaGithubSquare size={30} className='mx-2' /></a>
            <a href='#'><FaDribbbleSquare size={30} className='mx-2' /></a>
          </div>
        </div>
        <div className='md:col-span-2 md:flex grid grid-cols-2 justify-between mt-6'>
          <div>
            <h6 className='font-medium py-4 text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'><a>Analytics</a></li>
              <li className='py-2 text-sm'><a>Marketing</a></li>
              <li className='py-2 text-sm'><a>Commerce</a></li>
              <li className='py-2 text-sm'><a>Insights</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium py-4 text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'><a>Pricing</a></li>
              <li className='py-2 text-sm'><a>Documentations</a></li>
              <li className='py-2 text-sm'><a>Guides</a></li>
              <li className='py-2 text-sm'><a>API Status</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium py-4 text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'><a>About</a></li>
              <li className='py-2 text-sm'><a>Blog</a></li>
              <li className='py-2 text-sm'><a>Jobs</a></li>
              <li className='py-2 text-sm'><a>Careers</a></li>
              <li className='py-2 text-sm'><a>Press</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium py-4 text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'><a>Claim</a></li>
              <li className='py-2 text-sm'><a>Policy</a></li>
              <li className='py-2 text-sm'><a>Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer