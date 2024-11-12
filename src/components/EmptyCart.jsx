import React from 'react'
import emptyCart from "../assets/emptyCart.svg"

function EmptyCart({page}) {
  return (
    <div className='bg-slate-200 w-full min-h-[550px] grid place-content-center text-2xl font-bold border-2 py-4 border-black rounded-md'>
        <img src={emptyCart} alt="" className='w-80 m-auto' />
        <h2 className='text-center'>No items in your {page.includes('wishlist') ? 'wishlist' : 'cart' }</h2>
    </div>
  )
}

export default EmptyCart