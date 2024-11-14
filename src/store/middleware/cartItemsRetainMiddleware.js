
import cartAndWishlistDB from "../../appwrite/CartAndWishlistDB"

const cartRetainMiddleware = (store) => (next) => (action) => {
    const result = next(action)  

    const cartItemsList = store.getState().cart.list
    
    if(store.getState().authentication.status && (action.type.includes('cart/') && !action.type.includes('cart/f'))){
        // since to perform tasks on db data, we need document id of the document we need to manipulate, 
        // thus we first get the document itself so that we get get the document id from it
        const getTheDocument = async () => {
            const response = await cartAndWishlistDB.getCartItems()
            const result = response.documents.find((item) => item.id === action.payload.id)  

            if(action.type === 'cart/addToCart'){                
                    if(!result) {
                        cartAndWishlistDB.addCartItems(cartItemsList[cartItemsList.length - 1])
                    }

            } else if(action.type === 'cart/removeCartItem'){
                if(action.payload.documentId){
                    cartAndWishlistDB.removeCartItem(action?.payload?.documentId)
                } else {
                    cartAndWishlistDB.removeCartItem(result.$id)  
                }          
        
            } else if(action.type === 'cart/increaseCartQuantity'){
                const {quantity} = cartItemsList.find((item) => item.id === action.payload.id)
                cartAndWishlistDB.increaseCartItemQuantity(quantity, result.$id )
        
            } else if(action.type === 'cart/decreaseCartQuantity'){
                const {quantity} = cartItemsList.find((item) => item.id === action.payload.id) 
                cartAndWishlistDB.decreaseCartItemQuantity(quantity, result.$id)
            }
        }

        getTheDocument()
    }
        // reflection to to local storage
        const cartInLocal = JSON.parse(localStorage.getItem('cart'))

        if(action.type === 'cart/addToCart'){
            const lastItem = cartItemsList[cartItemsList.length - 1]
            if(cartInLocal){
                const res = cartInLocal.find((item) => item.id === action.payload.id)
                if(!res){
                    localStorage.setItem('cart', JSON.stringify([...cartInLocal, lastItem]))
                }
            } else {
                if(lastItem !== null){
                    localStorage.setItem('cart', JSON.stringify([lastItem]))
                }
            }     

        } else if(action.type === 'cart/removeCartItem'){
            const removed = cartInLocal.filter((item) => item.id != action.payload.id )
            localStorage.setItem('cart', JSON.stringify(removed))
    
        } else if(action.type === 'cart/increaseCartQuantity'){
            const increased = cartInLocal.map((item) => {
                if(item.id === action.payload.id){
                    return {...item, quantity: item.quantity + 1}
                } 
                return item
            } )
            localStorage.setItem('cart', JSON.stringify(increased))
    
        } else if(action.type === 'cart/decreaseCartQuantity'){
            const decreased = cartInLocal.map((item) => {
                if(item.id === action.payload.id){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1}
                    }
                } 
                return item
            } )
            localStorage.setItem('cart', JSON.stringify(decreased))
        }


    return result
}

export default cartRetainMiddleware;