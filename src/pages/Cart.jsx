import React from 'react'
import useCart from '../customHook/useCart';
import CartOrWishlist from '../components/CartOrWishlist';

function Cart() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

     const {productsInCart} = useCart()

  return <CartOrWishlist data={productsInCart} />
}

export default Cart
