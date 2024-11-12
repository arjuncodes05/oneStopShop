import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToWishlist } from '../store/Slices/wishlistSlice'

function RenderProducts({products}) {
   const dispatch =  useDispatch()
  return (
    
    <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-y-10 gap-x-10'>
    {
        products.map((product) => ( 
        <div key={product.id} className='bg-[#f8f5f58d] flex flex-col gap-4 p-4 hover:scale-[1.01] rounded-md h-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <div className='m-auto'>
                <img src={product.thumbnail} alt="" className='h-40'/>
            </div>
            <div className="flex flex-col justify-between text-sm gap-2 h-40">
                <h4 className='font-bold'>{ product.title.length > 50 ? product.title.slice(0, 40).concat("...") : product.title}</h4>
                <div className="flex font-semibold justify-between">
                    <p>{product.rating} 
                        <span className="text-yellow-500 ml-2">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                            ))}
                            {!Number.isInteger(product.rating) && (
                                <i className="fa-solid fa-star-half"></i>
                            )}
                        </span>
                    </p>
                    <p>₹{Math.floor(product.price) * 84}</p>
                </div>
                <div className="flex justify-between">
                     <Link to={`/product/${product.id}`} className='bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-full text-xs'>Shop Now</Link>
                    {/* <button className='bg-black hover:bg-gray-700 text-white py-1.5 px-4 rounded-full text-xs' value={product.id} >Shop Now</button> */}
                    <button 
                        onClick={() => dispatch(addItemToWishlist({
                            id: product.id,
                            title: product.title,
                            image: product.images[0],
                            price: Math.floor(product.price)
                        }))}
                        className='bg-black hover:bg-gray-700 text-white py-2 px-2.5 rounded-full text-xs' value={product.id} >Add to Wishlist</button>
                </div>
            </div>
        </div>
        ))
    }
</div>
  )
}

export default RenderProducts