import React from 'react'
import heroImg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
          <img src={heroImg} alt=""
           className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'/>
          <div className='absolute inset-0  bg-opacity-5 flex items-center justify-center'>
            <div className='text-center text-white'>
              <h1 className='text-4xl tracking-tighter md:text-9xl font-bold uppercase mb-4'>
                Vacation <br/>Ready
              </h1>
              <p>
                Explore our vacation-ready outfits with fast world-wide shipping.
              </p>
              <Link to="#" className='bg-white text-gray-950  px-6 py-2 rounded-sm text-lg'>
              Shop Now</Link>
            </div>
          </div>
    </section>
  )
}

export default Hero
