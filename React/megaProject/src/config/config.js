const config = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriterprojectID:String(import.meta.env.VITE_PROJECTID),
    appwritecollectionID:String(import.meta.env.VITE_COLLECTIONID),
    appwritebucketID:String(import.meta.env.VITE_APPWRITE_BUCKETID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASEID),
}

export default config