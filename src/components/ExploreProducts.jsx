import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import RenderProducts from './RenderProducts'
import { ExploreSectionProducts } from '../store/Slices/productsSlice'

function ExploreProducts() {
    const products = useSelector(ExploreSectionProducts)

  return  (
    <div className='flex flex-col gap-8'>  
        <h2 className='text-center md:text-5xl text-4xl leading-relaxed font-bold m-4'>Explore Our Products</h2>
        <RenderProducts products={products}/>
        <div className='flex justify-center'>
            <Link to="/products/all" className=' bg-slate-200 text-black font-bold shadow-xl hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full text-2xl'>Explore More</Link>
        </div>
    </div>
  )
}

export default ExploreProducts