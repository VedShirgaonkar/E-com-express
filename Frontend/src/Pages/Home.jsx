import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Product/GenderCollectionSection'
import NewArrivals from '../Components/Product/NewArrivals'
const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>
    </div>
  )
}

export default Home
