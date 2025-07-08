const config = {
    appwriteUrl: String(import.meta.env.VITE_API_ENDPOINT),
    ProjectId: String(import.meta.env.VITE_PROJECT_ID),
    DatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    CollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    StorageId: String(import.meta.env.VITE_STORAGE_ID),
}

export default config;