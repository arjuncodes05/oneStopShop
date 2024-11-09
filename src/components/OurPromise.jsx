import React from 'react'
import freeDelivery from "../assets/OurPromise/freeDelivery.svg"
import returnBox from "../assets/OurPromise/returnBox.svg"
import charity from "../assets/OurPromise/charity.svg"
import customerService from "../assets/OurPromise/customerService.svg"

function OurPromise() {

  return (
    <section>
        <div className='mb-10 mt-6'>
            <div className='text-center font-bold text-5xl mb-20'>
                <h1>Our Promise</h1>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
                <div className='flex flex-col justify-center items-center gap-4 font-bold text-xl rounded-full'>
                    <img className='w-24 hover:scale-105' src={freeDelivery} alt="" />
                    <h3>Free Shipping over 75$</h3>
                </div>
                <div className='flex flex-col items-center gap-4 font-bold text-xl rounded-full'>
                    <img className='w-24 hover:scale-105' src={returnBox} alt="" />
                    <h3>Free Shipping over 75$</h3>
                </div>
                <div className='flex flex-col items-center gap-4 font-bold text-xl rounded-full'>
                    <img className='w-24 hover:scale-105' src={charity} alt="" />
                    <h3>Free Shipping over 75$</h3>
                </div>
                <div className='flex flex-col items-center gap-4 font-bold text-xl rounded-full'>
                    <img className='w-24 hover:scale-105' src={customerService} alt="" />
                    <h3>Free Shipping over 75$</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurPromise