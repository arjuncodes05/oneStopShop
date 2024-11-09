import {Client, Databases, ID} from "appwrite"
import conf from "../appwrite/conf"

export class ProductsService{
    client = new Client()
    database;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
    }

    async getProducts(){
        try{
            
           return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteProductsCollectionId)
           
        }catch(error){
            console.log("Appwrite service :: getProducts() :: ", error);
            return false
        }
    }

    async addProduct(){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsCollectionId,
                ID.unique(),
                product
            );
        } catch (error) {
            console.log("Appwrite service :: addProduct() :: ", error);
            return false
        }
    }
}

const productsService = new ProductsService()


const product = {
    title: "Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    price: 73990,
    brand: "Apple",
    details: JSON.stringify({
        "Model": "MacBook Air",
        "Screen Size":"13 Inches",
        "Colour":	"Space Grey",
        "Hard Disk Size":	"256 GB",
        "CPU Model":	"Core M Family",
        "RAM Memory Installed Size":"8 GB",
        "Operating System":	"macOS 10.14 Mojave",
        "Special Feature":	"Portable",
        "Graphics Card": "Integrated",
    }),
    ratings: 3.6
}


// const pro = productsService.addProduct()

// export default productsService;
