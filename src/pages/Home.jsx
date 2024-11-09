import React from 'react'
import Discount from '../components/Discount'
import ExploreProducts from '../components/ExploreProducts'
import NewArrivals from '../components/NewArrivals'
import OurPromise from '../components/OurPromise'
import BrowseByCategory from '../components/BrowseByCategory'

function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <Discount 
        title="iPhone 15"
        discount="Up to 10% off Voucher"
      />
      {/* <BrowseByCategory/> */}
      <ExploreProducts/>
      {/* <NewArrivals/> */}
      <OurPromise/>
    </div>
  )
}

export default Home