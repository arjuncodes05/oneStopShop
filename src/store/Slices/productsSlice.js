import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProductsFromAPI(state, action){
            return action.payload.products
        }
    }
})

// selectors 
export const productsSelector = (state) => state.products

export const {getProductsFromAPI} = productsSlice.actions

export const fetchAllProducts = () => (dispatch) => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        dispatch(getProductsFromAPI(data))
    })
}

export default productsSlice.reducer


