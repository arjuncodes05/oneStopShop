import React from 'react'
import emptyCart from "../assets/emptyCart.svg"

function EmptyCart({page}) {
  return (
    <div className='bg-slate-200 w-full h-[550px] lg:h-[600px] grid place-content-center text-2xl font-bold border-2 py-4 border-black rounded-md'>
        <img src={emptyCart} alt="" className='md:w-80 w-52 m-auto' />
        <h2 className='text-center'>No items in your {page.includes('wishlist') ? 'wishlist' : 'cart' }</h2>
    </div>
  )
}

export default EmptyCart