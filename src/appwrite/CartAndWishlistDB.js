import {Client, Databases, ID} from "appwrite"
import conf from "./conf"

export class CartAndWishlistDB{
    client = new Client()
    database;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
    }

    async getCartItems(){
        try{
           return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCartCollectionId)
        }catch(error){
            console.log("Appwrite service :: getProducts() :: ", error);
            return false
        }
    }

    async addCartItems({id, title, image, price}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartCollectionId,
                ID.unique(),
                {
                    id, title, image, price
                }
            );
        } catch (error) {
            console.log("Appwrite service :: addProduct() :: ", error);
            return false
        }
    }

    async increaseCartItemQuantity(data, documentId){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartCollectionId,
                documentId,
                {quantity: data}
            )
        } catch (error) {
            console.log("Appwrite service :: addProduct() :: ", error);
            return false
        }
    }

    async decreaseCartItemQuantity(data, documentId){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartCollectionId,
                documentId,
                {quantity: data}
            )
        } catch (error) {
            console.log("Appwrite service :: addProduct() :: ", error);
            return false
        }
    }

    async removeCartItem(docId){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartCollectionId,
                docId
            )
        } catch (error) {
            console.log("Appwrite service :: addProduct() :: ", error);
            return false
        }
    }
}

const cartAndWishlistDB = new CartAndWishlistDB()
export default cartAndWishlistDB

