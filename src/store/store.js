
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productsSlice.js"
import cartReducer from "./Slices/cartSlice.js"
import wishlistReducer from "./Slices/wishlistSlice.js";
import authReducer from "./Slices/authSlice.js";
import authRetainMiddleware from "./middleware/authRetainMiddleware.js"
import cartRetainMiddleware from "./middleware/cartItemsRetainMiddleware.js";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        authentication: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authRetainMiddleware, cartRetainMiddleware)
    
})

export default store