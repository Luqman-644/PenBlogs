import React, { useState, useEffect } from 'react'
import DBService from "../appwrite/configuration";
import PostCard from '../components/PostCard';
import { BeatLoader } from 'react-spinners';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')

    useEffect(() => {
        seterror('');
        DBService.listDocuments()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
            .catch((error) => {
                seterror(error);
            })
            .finally(() => {
                setloading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 min-h-80 flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    <BeatLoader color="#1447e6" />
                </h1>
            </div>

        )
    }
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 min-h-80 flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    No Posts Available.
                </h1>
            </div>

        )
    }
    return (
        <>
            <div className='flex flex-col items-center gap-y-2 mt-8'>
                <h1 className='text-4xl font-bold text-gray-900'>All Blogs</h1>
            </div>
            <div className="grid gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllPosts