import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addItemToWishlist(state, action){
            const alreadyExists = state.find((item) => item.id === action.payload.id)
            if(!alreadyExists){
                state.push(action.payload)
            }
        },
        removeFromWishlist(state, action){
            return state.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
})

export const {addItemToWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;