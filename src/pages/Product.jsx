import React from 'react'

function Product() {
  return (
    <div className='flex items-center gap-2'>
        <div className='w-[40%]'>
            <img src="https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg" alt="" />
        </div>
        <div className='w-[60%]'>
            <h1 className='font-bold text-2xl mb-4 border-b-2 pb-2'>2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight</h1>
            <div className='flex justify-between text-center'>
                <div>
                    <h2 className='text-2xl bg-gray-300 w-48 rounded-full px-4 py-2'>Price: $100</h2>
                    <p>Inclusive of all taxes</p>
                </div>
                <div>
                    <button className='text-2xl bg-black w-48 hover:bg-gray-700 text-white px-4 py-2 rounded-full'>Add to Cart</button>
                    <p>Free Delivery</p>
                </div>
            </div>
            <div className='flex gap-4 text-center justify-between mb-6 mt-4 text-green-500 border-b-2 border-t-2 py-4'>
                <div>
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Free Delivery</p>
                </div>
                <div>
                    <i className="fa-solid fa-crown"></i>
                    <p>Top Brand</p>
                </div>
                <div>
                    <i className="fa-solid fa-shield"></i>
                    <p>Warranty Policy</p>
                </div>
                <div>
                    <i className="fa-solid fa-lock"></i>
                    <p>Secure transaction</p>
                </div>
            </div>

            {/* features */}
            <div>
                <h2 className='text-2xl font-bold mb-4 underline'>Features</h2>
                <ul className='leading-6 grid grid-cols-2 gap-4'>
                    <li><b>Brand:</b>	Apple</li>
                    <li><b>Model Name:</b>	MacBook Air</li>
                    <li><b>Screen Size:</b>	13.6</li>
                    <li><b>Colour:</b>	Midnight</li>
                    <li><b>Hard Disk Size:</b>	256 GB</li>
                    <li><b>CPU Model:</b>	Others</li>
                    <li><b>RAM Memory Installed Size:</b>	8 GB</li>
                    <li><b>Operating System:</b>	Mac OS</li>
                    <li><b>Special Feature:</b>	Portable, Backlit Keyboard, Thin</li>
                    <li><b>Graphics Card Description:</b> Integrated</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Product