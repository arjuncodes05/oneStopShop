import React from 'react'
import freeDelivery from "../assets/OurPromise/freeDelivery.svg"
import returnBox from "../assets/OurPromise/returnBox.svg"
import charity from "../assets/OurPromise/charity.svg"
import customerService from "../assets/OurPromise/customerService.svg"

function OurPromise() {

  return (
    <section>
        <div className='mb-10 mt-6'>
            <div className='text-center font-bold md:text-5xl text-4xl md:mb-20 mb-16'>
                <h1>Our Promise</h1>
            </div>
            <div className='
                grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                xl:lg:grid-cols-[repeat(4,minmax(200px,1fr))] 
                lg:gap-16 gap-12 font-bold text-lg xl:text-xl'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='xl:w-24 w-20 hover:scale-105' src={freeDelivery} alt="" />
                        <h3>Free Shipping over ₹1000</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='xl:w-24 w-20 hover:scale-105' src={returnBox} alt="" />
                        <h3>Easy return</h3>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center gap-4'>
                        <img className='xl:w-24 w-20 hover:scale-105' src={charity} alt="" />
                        <h3>1% Revenue to Charitable Initiatives</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='xl:w-24 w-20 hover:scale-105' src={customerService} alt="" />
                        <h3>24/7 Customer support</h3>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default OurPromise