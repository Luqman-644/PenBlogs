import React, {useEffect, useState} from 'react'
import PostForm from '../components/post-form/PostForm';
import DBService from "../appwrite/configuration";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            DBService.getDocument(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <div className='w-full max-w-7xl mx-auto px-4'>
            <PostForm post={post} />
        </div>
    </div>
  ) : null
}

export default EditPost