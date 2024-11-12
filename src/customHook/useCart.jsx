
import { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import { decreaseCartQuantity, increaseCartQuantity, cartProducts, removeCartItem } from '../store/Slices/cartSlice';

function useCart() {
        const [discount, setDiscount] = useState(0)
        const [coupon, setCoupon] = useState('')
        const [cartSubtotal, setCartSubtotal] = useState(0)

        const productsInCart = useSelector(cartProducts)

        useEffect(() => {
            setCartSubtotal(0)
            productsInCart.forEach((cartItem) => {
                setCartSubtotal(prev => prev + ((cartItem.price * 84) * cartItem.quantity))
            })
        }, [productsInCart])

        const handleCoupenCode = () => {
            if(coupon === 'arjunCodes'){
                setDiscount(100)
            } else if(coupon === ''){
                setDiscount(0)
            }
        }

  return {states: {discount, coupon, setCoupon, cartSubtotal}, productsInCart, handleCoupenCode, actions : {decreaseCartQuantity, increaseCartQuantity, removeCartItem}}
}

export default useCart