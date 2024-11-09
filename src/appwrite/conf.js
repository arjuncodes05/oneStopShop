

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteProductsCollectionId: String(import.meta.env.VITE_APP_APPWRITE_PRODUCTS_COLLECTION_ID),
}


export default conf