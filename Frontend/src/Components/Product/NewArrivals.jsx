import React from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom'
const newArrivals = [
    {
        _id:1,
        name:"Stylish Suits",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=1",
                alttext:"Stylish Suits",
            } 
        ],
    },
    {
        _id:2,
        name:"Stylish Shoes",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=2",
                alttext:"Stylish Shoes",
            } 
        ],
    },
    {
        _id:3,
        name:"Stylish Trouasers",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=3",
                alttext:"Stylish Trouasers",
            } 
        ],
    },
    {
        _id:4,
        name:"Stylish jacket",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=4",
                alttext:"Stylish jacket",
            } 
        ],
    },
    {
        _id:5,
        name:"Stylish Pants",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=5",
                alttext:"Stylish Pants",
            } 
        ],
    },
    {
        _id:6,
        name:"Stylish Shorts",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=6",
                alttext:"Stylish Shorts",
            } 
        ],
    },
    {
        _id:7,
        name:"Stylish Jeans",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=7",
                alttext:"Stylish Jeans",
            } 
        ],
    },
    {
        _id:8,
        name:"Stylish Tshirts",
        price: 120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=8",
                alttext:"Stylish Tshirt",
            } 
        ],
    },
]
const NewArrivals = () => {
  return (
    <section>
        <div className='container mx-auto  text-center  mb-10 relative'>
            <h2 className='text-3xl font-bold text-gray-600 mb-4'>Explore New Arrivals</h2>
            <p className=' text-gray-600 mb-8'>Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fasion</p>
        {/*Scrollable button <>*/}
            <div className='absolute right-0 flex bottom-[-30px] space-x-2'>
                <button className='p-2 rounded-border bg-white'><FiChevronLeft className='text-2xl'/></button>
                <button className='p-2 rounded-border bg-white'><FiChevronRight className='text-2xl'/></button>
            </div>
        </div>
        {/*Scrollable Content Image Gallery */}
        <div className='container mx-auto  flex space-x-6 overflow-x-scroll relative'>
            {newArrivals.map((product)=>(
                <div key={product._id} className='relative mb-4 min-w-full sm:min-w-[50%] lg:min-w-[30%]'>
                    <img src={product.images[0]?.url }  alt={product.images[0]?.alttext || product.name} 
                    className='w-full h-[500px] object-cover rounded-lg'/>
                    <div className='absolute bottom-0 left-0 right-0  bg-opacity-50 backdrop-blur-md text-white rounded-b-lg p-4 '>
                        <Link to={`/product/${product._id}`} className='block'>
                        <h4 className='font-medium'>{product.name}</h4>
                        <p className='mt-1'>${product.price}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div> 
    </section>
  )
}

export default NewArrivals
