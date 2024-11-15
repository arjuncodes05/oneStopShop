import React from 'react'
import { Link } from 'react-router-dom'

function Discount({url, title, discount, bgColor='bg-black', textColor='text-white'}) {
  return (
    <section>
        <div 
            style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
            }}
            className={`flex flex-col w-full 2xl:h-[600px] h-[550px] sm:px-8 px-4 py-4 justify-between items-end md:items-start ${bgColor} ${textColor} gap-8 mb-4`}>
            <div className='tracking-wide text-xs rounded-md backdrop-blur-2xl backdrop-opacity-80 hover:backdrop-opacity-90 px-2 flex flex-col items-center'>
                <div className="h-auto sm:w-[100px] w-[80px] overflow-hidden">
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/013/928/936/non_2x/isolate-new-year-sale-circle-price-tag-with-red-ribbon-free-png.png"
                    alt=""
                    className="h-full w-full object-contain" // Ensures the image fills within 250x250
                    />
                </div>                
                <p className='mt-2 leading-relaxed'>Starting 25th Dec 2024 <br /> to 3rd Jan 2025</p>
            </div>
            <div className='px-10 sm:h-[300px] md:h-[250px] leading-relaxed w-full lg:w-[75%] xl:w-full  ml-2 py-4 bg-black sm:bg-transparent sm:backdrop-blur-2xl backdrop-opacity-70 hover:backdrop-opacity-90'>
                <h3 className='lg:text-2xl md:text-2xl'>{title}</h3>
                <h1 className=' 2xl:text-6xl md:text-4xl sm:text-4xl text-xl font-extrabold py-4'>{discount}</h1>
                <div className='text-white text-base lg:text-2xl bg-gray-700 w-fit md:px-4 md:py-2 mt-2 py-1 px-2 rounded-full hover:bg-gray-800'>
                    <Link to="/products/all"><span>Live Soon</span> <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount