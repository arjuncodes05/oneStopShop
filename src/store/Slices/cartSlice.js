import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartAndWishlistDB from "../../appwrite/CartAndWishlistDB";

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async() => {    
    try {
        const response = await cartAndWishlistDB.getCartItems()
        console.log(response);

        // sync with local storage
        const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
        if(cartItemsFromLocalStorage){
            return syncDBandLS(cartItemsFromLocalStorage, response.documents)
        } else {
            return response.documents
        }
    } catch (error) {
        throw err
    }
})


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        list : [],
        error: ''
    },
    reducers: {
        addToCart(state, action){  
            const alreadyExists = state.list.find((item) => item.id === action.payload.id)
            if(!alreadyExists){  
                state.list.push({...action.payload, quantity: 1})
            }
        },
        increaseCartQuantity(state, action){
            state.list = state.list.map((item) => {
                return item.id === action.payload.id ? ({...item, quantity: item.quantity + 1})  : item
            })
        },
        decreaseCartQuantity(state, action){
            state.list = state.list.map((item) => {
                if(item.id === action.payload.id){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1}
                    }
                }
                return item
            })
        },
        removeCartItem(state, action){
            console.log(action);
            
            state.list = state.list.filter((item) => {
                return item.id !== action.payload.id
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                console.log(action);
                
                state.loading = false;4
                state.list = action.payload
                state.error = ''
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.loading = false;
                state.error = 'Something went wrong'
            })
    }
})

export const {addToCart, increaseCartQuantity, decreaseCartQuantity, removeCartItem} = cartSlice.actions

// selectors
export const cartProducts = state => state.cart.list

export default cartSlice.reducer



function syncDBandLS(cartItemsFromLocalStorage, response){
    let filter = [...response]
    cartItemsFromLocalStorage.forEach((item) => {        
        if(!response.find((dbItem) => dbItem.id === item.id)){    
            cartAndWishlistDB.addCartItems(item)
            filter.push(item)        
        }                
    })
    localStorage.removeItem("cart");
    return filter
}