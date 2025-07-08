import React, { useEffect, useState } from 'react';
import DBService from '../appwrite/configuration';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState('');
  
  const authStatus = useSelector((state) => state.authen.status);

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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 min-h-[20rem] flex items-center justify-center">
        <BeatLoader color="#1447e6" />
      </div>
    );
  }

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 min-h-[20rem] flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Login to see Posts.
        </h1>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 min-h-[20rem] flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          No Posts Available.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-y-2 mt-4 sm:mt-8 px-4">
        <p className="text-blue-700 text-lg sm:text-xl font-bold">Our Blogs</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Our Recent News
        </h1>
        <p className="font-medium text-base sm:text-lg text-gray-500 text-center">
          There are many variations of Tech Blogs available
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;