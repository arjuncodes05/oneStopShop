import React from 'react'
import { Link } from 'react-router-dom'

function Discount({title, discount, bgColor='bg-black', textColor='text-white'}) {
  return (
    <section>
        <div className={`flex w-full h-full p-8 ${bgColor} ${textColor} gap-8 mb-4`}>
            <div className='w-2/5'>
                <h3 className='text-2xl'>{title}</h3>
                <h1 className='text-8xl font-bold my-8 tracking-wide leading-tight'>{discount}</h1>
                <div className='text-white bg-gray-700 w-fit px-4 py-2 rounded-full hover:bg-gray-800'>
                    <Link to="/"><span>Shop Now</span> <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
            <div className='w-6/12 flex items-center'>
                <img src="https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" alt={`${title} image`} width='100%'/>
            </div>
        </div>
    </section>
  )
}

export default Discount