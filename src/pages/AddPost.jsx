import React from 'react'
import PostForm from '../components/post-form/PostForm'
import { BeatLoader } from 'react-spinners';



function AddPost() {

  setTimeout(() => {
    return (
      <div className="w-full py-8 mt-4 min-h-80 flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          <BeatLoader color="#1447e6" />
        </h1>
      </div>

    )

  }, 1000);

  return (
    
    <div className='py-8'>
      <div className=''>
        <PostForm />
      </div>
    </div>
  )
}

export default AddPost