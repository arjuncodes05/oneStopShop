
import {useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartOrWishlist from '../components/CartOrWishlist';

function Wishlist() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const productsInWishlist = useSelector(state => state.wishlist)      

  return (
    // <div className='min-h-[215px]'>
    //     <div>
    //         <h1 className='text-3xl font-extrabold mb-4'>Items in your {cartorWishlist.pathname.includes('wishlist') ? 'wishlist' : 'cart'}</h1>
    //         <img width='50px' src="" alt="" />
    //     </div>

    //     <div className='flex gap-4' >
    //         <div className='w-[60%]'>
    //                         <div className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-4'>
    //                                 <h2 className='w-[60%] text-start ml-5 font-bold text-xl'>Item</h2>
    //                             <div className='w-[40%] flex'>
    //                                 <h3 className='w-[50%] font-bold text-xl'>Price</h3>
    //                                 <h3 className='w-[50%] font-bold text-xl'>{cartorWishlist.pathname.includes('wishlist') ? 'Buy Now' : 'Total'}</h3>
    //                             </div>
    //                         </div>
    //             {
    //                 productsInWishlist.map((product) => {
    //                     {/* items */}
    //                     return (
    //                         <div className='border-2 rounded-md flex px-4 items-center bg-red-50 mb-2 relative'>
    //                             <div onClick={() => dispatch(removeFromWishlist(product.id))} className='absolute top-[-15%] right-[-1%] text-lg hover:text-gray-700 '>
    //                                 <i className="fa-solid fa-circle-xmark"></i>
    //                             </div>

    //                             <div className='w-[60%] flex items-center'>
    //                                 <div className='w-[75px] p-1 mr-8'>
    //                                     <img width='100%' src={product.image} alt="" />
    //                                 </div>
    //                                 <div>
    //                                     <h2 className='text-md font-semibold mb-2'>{product.title}</h2>

    //                                     {cartorWishlist.pathname.includes('wishlist')  && (
    //                                         <div >
    //                                             <button 
    //                                                 onClick={() => dispatch(decreaseCartQuantity(product.id))} 
    //                                                 className=' bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>-</button>
    //                                                 <span className='mx-2 px-2 bg-slate-200 py-1 rounded font-semibold text-sm'>{product.quantity}</span>
    //                                             <button
    //                                                 onClick={() => dispatch(increaseCartQuantity(product.id))}  
    //                                                 className='bg-gray-200 px-2 py-1 rounded-md font-bold text-sm'>+</button>
    //                                         </div>
    //                                     )}

    //                                 </div>
    //                             </div>
    //                             <div className='w-[40%] flex'>
    //                                 <div className='w-[50%]'>
    //                                     <h3>₹{Math.floor(product.price * 84)}</h3>
    //                                 </div>

    //                                 <div className='w-[50%]'>
    //                                     {
    //                                         cartorWishlist.pathname.includes('wishlist') ? (
    //                                             <button className='bg-green-600 hover:bg-green-700 rounded-full p-1 px-2 text-white text-md'>Move to Cart</button>
    //                                         ) : (
    //                                             <div className='w-[50%]'>
    //                                                 <h3>₹{Math.floor(+product.quantity * (product.price * 84))}</h3>
    //                                             </div>
    //                                         )
    //                                     }
    //                                     </div>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>

    // </div>

    <CartOrWishlist data={productsInWishlist} />
  )
}

export default Wishlist
