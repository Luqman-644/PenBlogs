import React from 'react'
import DBService from "../appwrite/configuration"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, image, disc }) {

  return (
    <div className="overflow-hidden flex flex-row sm:flex-col h-[240px] sm:h-[455px] xl:h-[480px] rounded-lg bg-white border border-gray-200 shadow-[-4px_5px_16px_4px_rgba(59,_130,_246,_0.5)]">
      <img className='object-cover w-[40%] sm:w-full sm:h-39' src={DBService.getFilePrev(image)} alt={title} />
      <div className="text-center px-3 py-2 sm:p-4">
        <h3 className='mb-1 sm:mb-3 block text-[16px] font-semibold text-dark hover:text-primary sm:text-[20px] lg:text-[22px]'>
          {title}
        </h3>
        <p className="mb-1 text-justify sm:mb-4 h-[115px] sm:h-[135px] overflow-hidden text-[14px] sm:text-[14px] leading-relaxed text-body-color ">
          {disc}
        </p>
        <Link to={`/post/${$id}`}>
          <button className='inline-block rounded-full border border-gray-3 px-5 py-1 text-[14px] font-medium cursor-pointer'>
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}


export default PostCard