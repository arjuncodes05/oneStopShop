import React from 'react'
import { Link } from 'react-router-dom'

function Discount({title, discount, bgColor='bg-black', textColor='text-white'}) {
  return (
    <section>
        <div 
            style={{
                backgroundImage: `url(${`https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg`})`,
                backgroundPosition: 'center',
            }}
            className={`flex w-full 2xl:h-[600px] h-[550px] sm:px-8 px-4 py-4 items-end ${bgColor} ${textColor} gap-8 mb-4`}>
            <div className='px-10 py-4 backdrop-blur-2xl backdrop-opacity-70 hover:backdrop-opacity-90'>
                <h3 className='lg:text-4xl md:text-2xl'>{title}</h3>
                <h1 className='2xl:text-6xl md:text-6xl text-4xl font-extrabold lg:py-10 py-6'>{discount}</h1>
                <div className='text-white text-base lg:text-2xl bg-gray-700 w-fit md:px-4 md:py-2 mt-2 py-1 px-2 rounded-full hover:bg-gray-800'>
                    <Link to="/"><span>Shop Now</span> <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount