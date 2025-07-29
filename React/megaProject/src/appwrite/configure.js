import { Client, Databases, ID, Query, } from "appwrite";
import config from "../config/config";

export class Secure{
    client = new Client()
    database
    bucket

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriterprojectID)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
       }
       async createPost({title,slug,content,featuredImage,status,userId}){
      try {
        return await this.database.createDocument(
            config.appwriteDatabaseId,
            config.appwritecollectionID,
            slug,
            {
                title,
                content
                ,featuredImage,
                status,
                userId
            }

        )
      } catch (error) {
        console.error("we got an error in the createpost",error);  
    }
     }
    async UpdatePost(slug,{title,content,featuredImage,status}){
      try {
        return await this.database.UpdateDocument(
            config.appwriteDatabaseId,
            config.appwritecollectionID,
            slug,
            {
                title,
                content
                ,featuredImage,
                status
            }

        )
      } catch (error) {
        console.error("we got an error in the Updatepost",error);  
    }
}
    async DeletePost(slug){
      try {
        return await this.database.deleteDocument(
            config.appwriteDatabaseId,
            config.appwritecollectionID,
            slug
        )
      } catch (error) {
        console.error("we got an error in the deletepost",error);  
    }
} 
        async getPost(slug){
      try {
        return await this.database.getDocument(
            config.appwriteDatabaseId,
            config.appwritecollectionID,
            slug
        )
      } catch (error) {
        console.error("we got an error in the getpost",error);  
    }
        }
    async getPosts(queries=[Query.equal("status","active")]){
      try {
        return await this.database.listDocuments(
            config.appwriteDatabaseId,
            config.appwritecollectionID,
            queries,
            100,
            0
        )
      } catch (error) {
        console.error("we got an error in the getposts",error);  
    }
}
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            config.appwritebucketID,
            ID.unique(),
            file
        )
    } catch (error) {
     console.error("we got an error in the UploadFile",error);  
    }
}
async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            config.appwritebucketID,
            fileId
        )
    } catch (error) {
     console.error("we got an error in the UploadFile",error);  
    }
}
   async getFilePreview(fileId){
        return await this.bucket.getFilePreview(
            config.appwritebucketID,
            fileId
        )
    }

}
const secure = new Secure()
export default secure