import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag , HiBars3BottomRight} from "react-icons/hi2";
import Searchbar from './Searchbar';
import Cartdrawer from '../Layout/Cartdrawer';
import { useState } from 'react';
import CartContents from '../Cart/CartContents';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen]=useState(false);
    const [mobileNavDrawerOpen, setMobileNavDrawerOpen] = useState(false);
    const toggleCartDrawer=()=>{
        console.log("drawer clicked")
        setDrawerOpen(!drawerOpen);
    }
    const toggleMobileNavDrawer=()=>{
        console.log("Mobile drawer opened")
        setMobileNavDrawerOpen(!mobileNavDrawerOpen)
    }
  return (
   <>
    <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/*Left Logo*/}
        <div>
            <Link to="/" className='text-2xl font-medium'>Rabbit</Link>    
        </div>
        {/*Center Navigation Link*/}
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className='text-gray-600 hover:text-black'>Men</Link>
            <Link to="#" className='text-gray-600 hover:text-black'>Women</Link>
            <Link to="#" className='text-gray-600 hover:text-black'>Top Wear</Link>
            <Link to="#" className='text-gray-600 hover:text-black'>Bottom Wear</Link>
        </div>
         <div className='flex items-center space-x-4 '>
            <Link to="/profile" className='hover:text-black'><HiOutlineUser className='h-6 w-6 text-gray-600'/></Link>
            <button className='relative hover:text-black ' onClick={toggleCartDrawer}><HiOutlineShoppingBag className='h-6 w-6 text-gray-600' />
            <span className='absolute -top-2 rounded-full bg-[#ea2e0e] text-white text-xs px-2 py-0.5'> 4 </span>
            </button>
            {/*Search Bar icon will come here */}
            <div className='overflow-hidden'>
                <Searchbar/>
            </div>
            <button onClick={toggleMobileNavDrawer} className='md:hidden relative hover:text-black h-6 w-6'><HiBars3BottomRight className='h-6 w-6 text-gray-600'/></button>
        </div>
    </nav>
        <Cartdrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
        {/*Mobile Navigation*/}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform 
        duration-300 z-50 ${mobileNavDrawerOpen?"translate-x-0":"-translate-x-full"}`}>
            <div className='flex justify-end px-3 py-3'>
                <button onClick={toggleMobileNavDrawer}><IoMdClose className='h-6 w-6'/></button>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                    <Link to="#" onClick={toggleMobileNavDrawer}
                    className='block text-gray-700 hover:text-black'>Men</Link>
                    <Link to="#" onClick={toggleMobileNavDrawer}
                    className='block text-gray-700 hover:text-black'>Women</Link>
                    <Link to="#" onClick={toggleMobileNavDrawer}
                    className='block text-gray-700 hover:text-black'>Top Wear</Link>
                    <Link to="#" onClick={toggleMobileNavDrawer}
                    className='block text-gray-700 hover:text-black'>Bottom Wear</Link>
                </nav>
            </div>
        </div>


    </>
  )
}

export default Navbar
