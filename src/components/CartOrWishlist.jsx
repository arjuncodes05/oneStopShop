
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useCart from '../customHook/useCart';
import useWishlist from '../customHook/useWishlist';
import EmptyCart from './EmptyCart';

function cartOrWishlist({data = []}) {
    const cartorWishlist = useLocation()
    const dispatch = useDispatch()

    // if cart
    const {states, handleCoupenCode, actions} = useCart()
    const {discount, coupon, setCoupon, cartSubtotal} = states
    const {decreaseCartQuantity, increaseCartQuantity, removeCartItem} = actions

    // if wishlist
    const {removeFromWishlist, wishlistSubtotal, addToCart} = useWishlist()

  return !data.length > 0 ? <EmptyCart page={cartorWishlist.pathname} /> : (
    <div className='min-h-[550px]'>
        <div>
            <h1 className='text-3xl font-extrabold mb-4'>Items in your {cartorWishlist.pathname.includes('wishlist') ? 'wishlist' : 'cart'}</h1>
            <img width='50px' src="" alt="" />
        </div>

        <div className='flex gap-4' >
            <div className='w-[60%]'>
                            <div className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-4'>
                                    <h2 className='w-[60%] text-start ml-5 font-bold text-xl'>Item</h2>
                                <div className='w-[40%] flex'>
                                    <h3 className='w-[50%] font-bold text-xl'>Price</h3>
                                    <h3 className='w-[50%] font-bold text-xl'>{cartorWishlist.pathname.includes('wishlist') ? 'Buy Now' : 'Total'}</h3>
                                </div>
                            </div>
                {
                    data.map((product) => {
                        {/* items */}
                        return (
                            <div key={product.id} className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-2 relative'>
                                <div onClick={() => {
                                    cartorWishlist.pathname.includes('wishlist') ? dispatch(removeFromWishlist(product.id, product.$id)) : dispatch(removeCartItem({id: product.id, documentId: product.$id}))
                                }} className='absolute top-[-15%] right-[-1%] text-lg hover:text-gray-700 '>
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </div>

                                <div className='w-[60%] h-20 overflow-hidden flex items-center'>
                                    <div className='w-[75px] p-1 mr-8'>
                                        <img width='100%' src={product.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-md font-semibold mb-2'>{product.title}</h2>

                                        {cartorWishlist.pathname.includes('cart')  && (
                                            <div >
                                                <button 
                                                    onClick={() => dispatch(decreaseCartQuantity({id: product.id, documentId: product.$id}))} 
                                                    className=' bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>-</button>
                                                    <span className='mx-2 px-2 bg-slate-200 py-1 rounded font-semibold text-sm'>{product.quantity}</span>
                                                <button
                                                    onClick={() => dispatch(increaseCartQuantity({id: product.id, documentId: product.$id}))}  
                                                    className='bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>+</button>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className='w-[40%] flex'>
                                    <div className='w-[50%]'>
                                        <h3>₹{Math.floor(product.price * 84)}</h3>
                                    </div>

                                    <div className='w-[50%]'>
                                        {
                                            cartorWishlist.pathname.includes('wishlist') ? (
                                                <button 
                                                    onClick={() => {
                                                        dispatch(addToCart({
                                                            id: product.id,
                                                            title: product.title,
                                                            image: product.image,
                                                            price: Math.floor(product.price)
                                                        }))
                                                        dispatch(removeFromWishlist(product.id))
                                                    }}
                                                    className='bg-green-600 hover:bg-green-700 rounded-full p-1 px-2 text-white text-md'>Move to Cart</button>
                                            ) : (
                                                <div className='w-[50%]'>
                                                    <h3>₹{Math.floor(+product.quantity * (product.price * 84))}</h3>
                                                </div>
                                            )
                                        }
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {cartorWishlist.pathname.includes('cart') && (
                <div className='w-[40%] border-2 bg-slate-100 p-2 rounded-sm min-h-[100px]'>
                    <h3 className='text-2xl font-bold pb-4 px-4'>Cart Total</h3>
                    <hr />
                    <h4 className='font-semibold py-4 flex justify-between px-4'>Deliver Charges: <span>₹{cartSubtotal > 1000 ? 0 : 49}</span></h4>
                    <hr />
                    <div className='my-4 font-semibold px-4'>
                        <p className='pl-4 mb-4 text-gray-500 text-xs'>Enter 'arjunCodes' to get ₹100 off*</p>
                        <input value={coupon} type="text" onChange={(e) => setCoupon(e.target.value)} placeholder='Have a coupon?' className='py-2 pl-4 rounded-l-full' />
                        <button 
                            onClick={handleCoupenCode}
                            className='bg-black text-white py-2 px-4 rounded-r-full'>Apply</button>
                    </div>
                    <hr />
                    <h4 className='font-semibold flex justify-between py-2 px-4'>Subtotal: <span>{cartSubtotal > discount ? Math.floor(cartSubtotal - discount).toFixed(2) : Math.floor(cartSubtotal).toFixed(2)}</span></h4>
                    <hr />
                    <div className='text-center'>
                        <button 
                            disabled={data.length < 1}
                            className='bg-yellow-400 hover:bg-yellow-500 px-8 py-2 rounded-full mt-2 font-bold'>Checkout</button>
                    </div>
                </div>
            )}
        </div>
            {
                cartorWishlist.pathname.includes('wishlist') && (
                    <div className='bg-red-50 border-2 text-end font-bold w-[60%] p-2 pr-4'>
                        <h2>Total: <span>{wishlistSubtotal}</span></h2>
                    </div>
                )
            }
    </div>
  )
}

export default cartOrWishlist
