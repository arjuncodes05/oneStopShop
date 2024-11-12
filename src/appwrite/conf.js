

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteCartCollectionId: String(import.meta.env.VITE_APP_APPWRITE_CART_COLLECTION_ID),
}


export default conf