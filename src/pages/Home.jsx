import React from 'react'
import Discount from '../components/Discount'
import ExploreProducts from '../components/ExploreProducts'
import OurPromise from '../components/OurPromise'

function Home() {
  
  return (
    <div className='flex flex-col gap-20 justify-between'>
      <Discount 
        title="iPhone 15"
        discount="Up to 10% off Voucher"
      />
      <ExploreProducts/>
      <OurPromise/>
    </div>
  )
}

export default Home