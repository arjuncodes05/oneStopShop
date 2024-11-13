
import {useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartOrWishlist from '../components/CartOrWishlist';

function Wishlist() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const productsInWishlist = useSelector(state => state.wishlist)      

  return <CartOrWishlist data={productsInWishlist} />
}

export default Wishlist
