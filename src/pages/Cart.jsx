import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeCartItem } from '../store/Slices/cartSlice';

function Cart() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const dispatch = useDispatch()
  
      const [discount, setDiscount] = useState(0)
      const [coupon, setCoupon] = useState('')
      const [subtotal, setsubtotal] = useState(0)

    const productsInCart = useSelector(state => state.cart)
    console.log(productsInCart);

    useEffect(() => {
        setsubtotal(0)
        productsInCart.forEach((cartItem) => {
            setsubtotal(prev => prev + ((cartItem.price * 84) * cartItem.quantity))
        })
    }, [productsInCart])

    const handleCoupenCode = () => {
        if(coupon === 'arjunCodes'){
            setDiscount(100)
        } else if(coupon === ''){
            setDiscount(0)
        }
    }

  return productsInCart && (
    <div>
        <div>
            <h1 className='text-3xl font-extrabold mb-4'>Items in your cart</h1>
        </div>

        <div className='flex gap-4' >
            <div className='w-[60%]'>
                            <div className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-4'>
                                    <h2 className='w-[60%] text-start ml-5 font-bold text-xl'>Item</h2>
                                <div className='w-[40%] flex'>
                                    <h3 className='w-[50%] font-bold text-xl'>Price</h3>
                                    <h3 className='w-[50%] font-bold text-xl'>total</h3>
                                </div>
                            </div>
                {
                    productsInCart.map((product) => {
                        {/* items */}
                        return (
                            <div className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-2 relative'>
                                <div onClick={() => dispatch(removeCartItem(product.id))} className='absolute top-[-15%] right-[-1%] text-lg hover:text-gray-700 '>
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </div>

                                <div className='w-[60%] flex items-center'>
                                    <div className='w-[75px] p-1 mr-8'>
                                        <img width='100%' src={product.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-md font-semibold mb-2'>{product.title}</h2>
                                        <div >
                                            <button 
                                                onClick={() => dispatch(decreaseCartQuantity(product.id))} 
                                                className=' bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>-</button>
                                            <span className='mx-2 px-2 bg-slate-200 py-1 rounded font-semibold text-sm'>{product.quantity}</span>
                                            <button
                                                onClick={() => dispatch(increaseCartQuantity(product.id))}  
                                                className='bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[40%] flex'>
                                    <div className='w-[50%]'>
                                        <h3>₹{Math.floor(product.price * 84)}</h3>
                                    </div>
                                    <div className='w-[50%]'>
                                        <h3>₹{Math.floor(+product.quantity * (product.price * 84))}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* checkout */}
            <div className='w-[40%] border-2 bg-slate-100 p-2 rounded-sm min-h-[100px]'>
                <h3 className='text-2xl font-bold pb-4 px-4'>Cart Total</h3>
                <hr />
                <h4 className='font-semibold py-4 flex justify-between px-4'>Deliver Charges: <span>₹{subtotal > 1000 ? 0 : 49}</span></h4>
                <hr />
                <div className='my-4 font-semibold px-4'>
                    <p className='pl-4 mb-4 text-gray-500 text-xs'>Enter 'arjunCodes' to get ₹100 off*</p>
                    <input value={coupon} type="text" onChange={(e) => setCoupon(e.target.value)} placeholder='Have a coupon?' className='py-2 pl-4 rounded-l-full' />
                    <button 
                        onClick={handleCoupenCode}
                        className='bg-black text-white py-2 px-4 rounded-r-full'>Apply</button>
                </div>
                <hr />
                <h4 className='font-semibold flex justify-between py-2 px-4'>Subtotal: <span>{subtotal > discount ? Math.floor(subtotal - discount).toFixed(2) : Math.floor(subtotal).toFixed(2)}</span></h4>
                <hr />
                <div className='text-center'>
                    <button className='bg-yellow-400 hover:bg-yellow-500 px-8 py-2 rounded-full mt-2 font-bold'>Checkout</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart
