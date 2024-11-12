
import { useSelector } from 'react-redux';
import { removeFromWishlist } from '../store/Slices/wishlistSlice';
import { useEffect, useState } from 'react';
import { addToCart } from '../store/Slices/cartSlice';

function useWishlist() {

    const [wishlistSubtotal, setWishlistSubtotal] = useState(0)

    const productsInWishlist = useSelector(state => state.wishlist)

    useEffect(() => {
        setWishlistSubtotal(0)
        productsInWishlist.forEach((cartItem) => {
            setWishlistSubtotal(prev => prev + (cartItem.price * 84))
        })
    }, [productsInWishlist])

  return {removeFromWishlist, wishlistSubtotal, addToCart}
}

export default useWishlist