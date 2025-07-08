import config from "../config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.ProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createDocument({ title, slug, body, image, status, userid, disc, author }) {
        try {
            return await this.databases.createDocument(
                config.DatabaseId,
                config.CollectionId,
                slug,
                {
                    title,
                    body,
                    image,
                    status,
                    userid,
                    disc,
                    author
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            throw error;
        }
    }

    async updateDocument(slug, { title, body, image, status, disc }) {
        try {
            return await this.databases.updateDocument(
                config.DatabaseId,
                config.CollectionId,
                slug,
                {
                    title,
                    body,
                    image,
                    status,
                    disc
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updateDoc :: error", error);
            throw error;
        }
    }

    async deleteDocument(slug) {
        try {
            await this.databases.deleteDocument(
                config.DatabaseId,
                config.CollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: deleteDocument :: error", error);
            throw error;
        }
    }

    async getDocument(slug) {
        try {
            return await this.databases.getDocument(
                config.DatabaseId,
                config.CollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getDocument :: error", error);
        }
    }

    async listDocuments(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.DatabaseId,
                config.CollectionId,
                queries,


            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.StorageId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            throw error;
        }
    }

    async deleteFile(Id) {
        try {
            await this.storage.deleteFile(
                config.StorageId,
                Id
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            throw error;
        }
    }

    getFilePrev(Id) {
        return this.storage.getFileView(
            config.StorageId,
            Id
        )
    }
}


const DBservice = new Service()
export default DBservice