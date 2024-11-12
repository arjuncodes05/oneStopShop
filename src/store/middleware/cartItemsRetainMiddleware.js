
import cartAndWishlistDB from "../../appwrite/CartAndWishlistDB"

const cartRetainMiddleware = (store) => (next) => (action) => {
    const result = next(action)  
    
    if(store.getState().authentication.status){
        const cartItemsList = store.getState().cart.list
        if(action.type === 'cart/addToCart'){
            const alreadyExists = cartItemsList.includes((item) => item.id === action.payload.id)
            if(!alreadyExists){
                cartAndWishlistDB.addCartItems(cartItemsList[cartItemsList.length - 1])
            }
        } else if(action.type === 'cart/removeCartItem'){
            cartAndWishlistDB.removeCartItem(action.payload.documentId)
    
        } else if(action.type === 'cart/increaseCartQuantity'){
            const {quantity} = cartItemsList.find((item) => item.id === action.payload.id)
            cartAndWishlistDB.increaseCartItemQuantity(quantity, action.payload.documentId )
    
        } else if(action.type === 'cart/decreaseCartQuantity'){
            const {quantity} = cartItemsList.find((item) => item.id === action.payload.id) 
            cartAndWishlistDB.decreaseCartItemQuantity(quantity, action.payload.documentId )
        }
    } else {
        // adding to local storage
        const cartItemsList = store.getState().cart.list

        if(action.type === 'cart/addToCart'){
            const lastItem = cartItemsList[cartItemsList.length - 1]
            const cartInLocal = JSON.parse(localStorage.getItem('cart'))
            if(cartInLocal){
                const res = cartInLocal.find((item) => item.id === action.payload.id)
                if(!res){
                    localStorage.setItem('cart', JSON.stringify([...cartInLocal, lastItem]))
                }
            } else {
                localStorage.setItem('cart', JSON.stringify([lastItem]))
            }
            

        } else if(action.type === 'cart/removeCartItem'){
            cartAndWishlistDB.removeCartItem(action.payload.documentId)
    
        } else if(action.type === 'cart/increaseCartQuantity'){
            const {quantity} = cartItemsList.find((item) => item.id === action.payload.id)
            cartAndWishlistDB.increaseCartItemQuantity(quantity, action.payload.documentId )
    
        } else if(action.type === 'cart/decreaseCartQuantity'){
            const {quantity} = cartItemsList.find((item) => item.id === action.payload.id) 
            cartAndWishlistDB.decreaseCartItemQuantity(quantity, action.payload.documentId )
        }
    }
        
    //     action.type === 'cart/increaseCartQuantity' ||
    //     action.type === 'cart/decreaseCartQuantity' ||
    //     action.type === 'cart/removeCartItem'

    return result
}

export default cartRetainMiddleware;