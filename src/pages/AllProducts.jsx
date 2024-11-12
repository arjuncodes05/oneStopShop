import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import { productsSelector } from '../store/Slices/productsSlice'
import RenderProducts from '../components/RenderProducts'

function AllProducts() {

    const products = useSelector(productsSelector)
    

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
     
  return products.length > 0 && (
    <div className='flex flex-col gap-4'>  
        <RenderProducts products={products} />
    </div>
  )
}

export default AllProducts