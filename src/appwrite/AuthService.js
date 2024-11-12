

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
            return await this.account.createEmailPasswordSession(email, password)
        } catch (err) {
            console.log("Appwrite service :: login() :: ", err);
            return false 
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: login() :: ", err);
            return false 
        }
    }

    async signout(){
        try{
            return await this.account.deleteSessions()
        } catch(err) {
            console.log("Appwrite service :: signout() :: ", err);
            return false 
        }
    }

    async signup(name, email, password){
        try {
            return await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
        } catch (err) {
            console.log("Appwrite service :: signup() :: ", err);
            return false 
        }
    }
}

const authService = new AuthService()
export default authService;