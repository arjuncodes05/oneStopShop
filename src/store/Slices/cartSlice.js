import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push({...action.payload, quantity: 1})
        },
        increaseCartQuantity(state, action){
            return state.map((item) => {
                return item.id === action.payload ? ({...item, quantity: item.quantity + 1})  : item
            })
        },
        decreaseCartQuantity(state, action){
            return state.map((item) => {
                // return item.id === action.payload ? ({...item, quantity: item.quantity - 1})  : item
                if(item.id === action.payload){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1}
                    }
                }
                return item
            })
        },
        removeCartItem(state, action){
            return state.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
})

export const {addToCart, increaseCartQuantity, decreaseCartQuantity, removeCartItem} = cartSlice.actions

export default cartSlice.reducer