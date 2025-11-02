import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CartContents from '../Cart/CartContents';

const Cartdrawer = ({drawerOpen,toggleCartDrawer}) => {
 
    return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-30rem h-full
     bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
    ${drawerOpen?"translate-x-0":"translate-x-full"}`}>
        <div className='flex justify-end  p-4'>
            <button onClick={toggleCartDrawer}>
            <IoMdClose className='h-6 w-6 text-gray-600'/>
            </button>
        </div>
        <div className='flex flex-col grow overflow-y-auto p-4'>
            <h2 className='text-xl mb-4 font-semibold'>Your Cart</h2>
            <CartContents/>
        </div>
        {/*Check out button fixed at the bottom */}
        <div className='p-4 sticky bg-white bottom-0'>
            <button className='w-full bg-black text-white font-semibold rounded-lg py-3
            hover:bg-gray-800 transition'>Check Out</button>
            <p className='text-sm tracking-tight mt-2 text-center text-gray-500'>Shipping taxes , and discount codes calculated at check out</p>
        </div>
    </div>
  )
}

export default Cartdrawer
