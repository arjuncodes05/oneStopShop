import React, { useEffect } from 'react'
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

        {/* filter and search */}
        <div className='flex justify-between  p-1 px-2'>
              <div className='flex items-center pr-8  pl-4 rounded-full bg-[#f5f5f5] w-80 shadow-lg'>
                  <input 
                      className='p-2 outline-none bg-inherit w-full' 
                      type="text" 
                      placeholder='What are you looking for today...' 
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            <div className='flex justify-between items-center w-40 shadow-lg border-2 rounded-full px-4	py-3'>
                <h2>Filter</h2>
                <span><i className="fa-solid fa-angle-down hover:scale-110"></i></span>
            </div>
        </div>


        <RenderProducts products={products} />
    </div>
  )
}

export default AllProducts