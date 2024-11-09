import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import authService from '../appwrite/AuthService'


function AllProducts() {

  const [products, setProducts] = useState([])
    
  useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
          console.log(data.products[0]);
          setProducts(data.products)
      })
      .catch(err => console.log(err))
  }, []) 

  return (
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


        <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-y-20 gap-x-10'>
            {
                products.map((product) => ( 
                <div key={product.id} className='flex flex-col gap-4 p-4 hover:scale-[1.01] rounded-md h-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                    <div className='m-auto'>
                        <img src={product.images[0]} alt="" className='h-40'/>
                    </div>
                    <div className="flex flex-col justify-between text-sm gap-2 h-40">
                        <h4 className='font-bold'>{ product.title.length > 50 ? product.title.slice(0, 40).concat("...") : product.title}</h4>
                        <div className="flex font-semibold justify-between">
                            <p className="rating">{product.rating} <span className='text-yellow-500'>{"★".repeat(Math.round(product.rating.rate))}</span> </p>
                            <p className="price">${product.price}</p>
                        </div>
                        <div className="flex justify-between">
                            <NavLink to="/product" className='bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-full text-xs'>Shop Now</NavLink>
                            {/* <button className='bg-black hover:bg-gray-700 text-white py-1.5 px-4 rounded-full text-xs' value={product.id} >Shop Now</button> */}
                            <button className='bg-black hover:bg-gray-700 text-white py-2 px-2.5 rounded-full text-xs' value={product.id} >Add to Wishlist</button>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts