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
    <div className='flex items-center gap-2 bg-slate-100 p-8 pl-0 rounded-md relative'>
        <button 
        onClick={() => history.back()}
            className='absolute top-4 left-4 bg-black hover:bg-gray-700 rounded-full text-white px-4 py-1'
            ><i className="fa-regular fa-circle-left mr-1"></i> <span>Back</span></button>
        <div className='w-[40%]'>
            <img src={item.images[0]} alt="" />
        </div>
        <div className='w-[60%]'>
            <h1 className='font-bold text-2xl mb-4 border-b-2 pb-2'>{item.title}</h1>
            <div className='flex justify-between text-center'>
                <div>
                    <h2 className='text-2xl bg-gray-300 w-48 rounded-full px-4 py-2 cursor-default'>Price: ₹{Math.floor(item.price * 84)}</h2>
                    <p>Inclusive of all taxes</p>
                </div>
                <div>
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
                                price: Math.floor(item.price)
                            }))} }
                        className='text-2xl bg-black w-48 hover:bg-gray-700 text-white px-4 py-2 rounded-full'>{addToCartBtnText}</button>
                    <p>{(item.price * 84) > 1000 ? 'Free Delivery' : '+₹140 for delivery'}</p>
                </div>
            </div>
            <div className='flex gap-4 text-center justify-between mb-6 mt-4 text-green-500 border-b-2 border-t-2 py-4'>
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
                <ul className='leading-6 grid grid-cols-2 gap-4 mb-6'>
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