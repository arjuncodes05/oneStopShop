import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams } from 'react-router-dom'
import { addToCart } from '../store/Slices/cartSlice'

function Product() {
    const param = useParams()    
    const products = useSelector(state => state.products)
    let item = products.find((product) => product.id === +param.id)
    
    const [addToCartBtnText, setAddToCartBtnText] = useState('Add to Cart')

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return item && (
    <div className='flex flex-col lg:flex-row items-center gap-2 bg-slate-100 p-8 lg:pl-0 rounded-md relative'>
        <button 
        onClick={() => history.back()}
            className='absolute top-4 left-4 bg-black hover:bg-gray-700 rounded-full text-white md:px-4 px-2 py-1 sm:text-lg text-sm'
            ><i className="fa-regular fa-circle-left mr-1 sm:text-lg text-sm "></i> <span>Back</span></button>

        <div className='md:w-[40%] sm:w-11/12 w-8/12'>
            <img src={item.images[0]} alt="" />
        </div>
        <div className='lg:w-[60%] w-full'>
            <h1 className='font-bold text-xl sm:text-2xl mb-4 border-b-2 pb-2'>{item.title}</h1>
            <div className='flex flex-wrap items-center gap-5 my-4 flex-row justify-between'>
                <div className='m-auto md:m-0'>
                    <h2 className='text-md md:text-lg xl:text-2xl font-semibold bg-gray-300 xl:w-48 md:w-36 w-32 rounded-full md:px-4 px-2 text-center py-2 cursor-default'>Price: ₹{Math.floor(item.price * 84)}</h2>
                    <p className='text-sm text-center md:text-md font-semibold' >Inclusive of all taxes</p>
                </div>
                <div className='m-auto md:m-0'>
                    <button 
                        onClick={() => {
                            setAddToCartBtnText(<i className="text-yellow-300 fa-solid fa-circle-check"></i>)
                            setTimeout(() => {
                                setAddToCartBtnText('Add to Cart')
                            }, 2000)
                            dispatch(addToCart({
                                id: item.id,
                                title: item.title,
                                image: item.images[0],
                                price: Math.floor(item.price),
                                quantity: 1
                            }))} }
                        className='text-md md:text-lg xl:text-2xl font-semibold bg-black xl:w-48 md:w-36 w-32 hover:bg-gray-700 text-white text-center py-2 rounded-full'>{addToCartBtnText}</button>
                    <p className='text-sm text-center md:text-md font-semibold' >{(item.price * 84) > 1000 ? 'Free Delivery' : '+₹140 for delivery'}</p>
                </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 text-center justify-between mb-6 mt-4 text-green-500 border-b-2 border-t-2 py-4'>
                <div>
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Free Delivery on above ₹1000</p>
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
                <h2 className='text-2xl font-bold mb-4 underline'>Details</h2>
                <ul className='leading-5 md:leading-6 grid sm:grid-cols-2 min-w-[200px] gap-4 mb-6'>
                    <li><b>Brand:</b> {item.brand}</li>
                    <li><b>Category </b>{item.category}</li>
                    <li><b>Availability Status: </b>{item.availabilityStatus}</li>
                    <li><b>Return Policy: </b>{item.returnPolicy}</li>
                    <li><b>Ratings: </b>{item.rating}/5</li>
                    <li><b>Shipping Information: </b>{item.shippingInformation}</li>
                </ul>
                <div>
                    <h4 className=' text-xl font-bold mb-2 underline'>Description</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product