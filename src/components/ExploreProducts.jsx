import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import authService from '../appwrite/AuthService'
import { useSelector } from 'react-redux'
import RenderProducts from './RenderProducts'

function ExploreProducts() {
    const products = useSelector(state => state.products.slice(0, 10))
    console.log(products);

  return  (
    <div className='flex flex-col gap-4'>  
        <h2 className='text-center text-5xl font-bold m-4'>Explore Our Products</h2>
        <RenderProducts products={products}/>
        <div className='flex justify-center mt-4'>
            <Link to="/products/all" className=' bg-slate-200 text-black font-bold shadow-xl hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full text-2xl'>Explore More</Link>
        </div>
    </div>
  )
}

export default ExploreProducts