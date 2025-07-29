import { Client, Account, ID } from "appwrite"
import config from "../config/config"
export class Authenticate{
    client = new Client()
    account;



    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriterprojectID)
        this.account = new Account(this.client)
    }
    async createAccount({password,name,email}){
        try {
            const user = await this.account.create({email,password,name});
            if(user){
               return await this.login({password,email})
            }
            else{
                return user
            }
        } catch (error) {
         throw  Error("There is an error",error);
         
         
        }
    }
    async login({email,password}){
        try {
            const session = await this.account.createEmailPasswordSession(
            email, 
            password
)
            return session
        } catch (error) {
         throw  Error("There is an error",error);
        }
    }
  

    async logout(){
        try {
         return await this.account.deleteSession()
        } catch (error) {
         throw  Error("There is an error",error);
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
         throw  Error("There is an error",error);
        }
    }
}
const authenticate = new Authenticate(Client)
export default authenticate;