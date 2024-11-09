

import { Client, Account, ID, Databases } from "appwrite";
import conf from "../appwrite/conf";

export class AuthService{
    client = new Client()
    account;
    databases;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
        this.databases = new Databases(this.client)
    }

    async login(email, password){
        try {
            const res =  await this.account.createEmailPasswordSession(email, password)
            console.log(res);
        } catch (err) {
            console.log("Appwrite service :: login() :: ", err);
            return false 
        }
    }
}

const authService = new AuthService()
export default authService;