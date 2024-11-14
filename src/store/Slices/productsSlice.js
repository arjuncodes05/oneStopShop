import { createSelector, createSlice } from "@reduxjs/toolkit";


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
    fetch('https://dummyjson.com/products?limit=0')
    .then(res => res.json())
    .then(data => {
        dispatch(getProductsFromAPI(data))
    })
}

// const productsForExploreSelctionInHomepage = state => state.products.slice(0, 10)
// export const ExploreSectionProducts = createSelector(productsForExploreSelctionInHomepage, (state) => state)

const productsForExploreSelctionInHomepage = state  => state.products
export const ExploreSectionProducts = createSelector(productsForExploreSelctionInHomepage, (products) => products.filter((product, i) => i < 10))


export default productsSlice.reducer


