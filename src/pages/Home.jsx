import React from 'react'
import Discount from '../components/Discount'
import ExploreProducts from '../components/ExploreProducts'
import OurPromise from '../components/OurPromise'
import Carousel from '../components/Carousel '

function Home() {
  
  return (
    <div className='flex flex-col gap-20 justify-between'>
      <Carousel/>
      <ExploreProducts/>
      <OurPromise/>
    </div>
  )
}

export default Home