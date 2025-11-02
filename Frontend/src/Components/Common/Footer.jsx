import React from 'react'
import { Link } from 'react-router-dom'
import {TbBrandMeta} from 'react-icons/tb'
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t py-12'>
      <div className='container mx-auto  grid grid-cols-1  md:grid-cols-4 gap-8 px-4 lg:px-0 '>
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>News</h3>
          <p className='text-gray-500 mb-4'>Be the First to hear about new products exclusive events and online offers</p>
          <p className='font-medium text-gray-600 mb-6'>Sign-up and get 10% of on your first order</p>
          <form className='flex '>
            <input type='email' 
            className='p-3 w-full border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500'
            placeholder='Enter your email'/>
            <button
            type="submit"
            className='bg-black text-white transition-all px-6 py-3 text-sm hover:bg-gray-800 rounded-r-md'>Subscribe</button>
          </form>
        </div>
        {/*Shop Links*/}
        <div>
          <h3 className='text-gray-800 mb-4'>Shop</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>
                <Link to="#"  className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>  
              </li>
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Top Wear</Link>  
              </li>  
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>  
              </li>
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>  
              </li>                     
            </ul>
        </div>
        {/*Support Link*/}
        <div>
          <h3 className='text-gray-800 mb-4'>Support</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>
                <Link to="#"  className='hover:text-gray-500 transition-colors'>Contact Us</Link>  
              </li>
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>About Us</Link>  
              </li>  
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>  
              </li>
              <li>
                <Link to="#" className='hover:text-gray-500 transition-colors'>Features</Link>  
              </li>                     
            </ul>
        </div>
        {/*Follow Us*/}
        <div>
          <h3 className=' text-lg text-gray-800 mb-4'>Follow Us</h3>
          <div className='flex space-x-4 mb-6'>
            <a href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferer'
            className='hover:text-gray-100'><TbBrandMeta className='h-5 w-5 text-gray-800'/></a>
            <a href='#'
            target='_blank'
            rel='noopener noreferer'
            className='hover:text-gray-100'
            ><IoLogoInstagram className='h-5 w-5 text-gray-800'/></a>
            <a href='#'
            target='_blank'
            rel='noopener noreferer'
            className='hover:text-gray-100'><RiTwitterXLine className='h-5 w-5 text-gray-800'/></a>       
          </div>
          <p className='text-gray-500 mb-1'> Call Us</p> 
          <p ><FiPhoneCall className='inline-block mr-2'/>0123-456-789</p>
        </div>
      </div>
      {/*Footer Copyright section*/}
      <div className='container mx-auto mt-12 px-4 lg:px-0 border-t  border-gray-200'>
        <p className='flex justify-center text-gray-500'>© 2025 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
