import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

const Posts = ({ posts }) => {
  return (
    <div>
    <h1>Style Picks</h1>
    <div className='posts'>
    {
        posts.slice(0,6).map((pts) => (

          <Post post={pts} />
        )
        
        )}
    

    </div>
    </div>
  )
}

export default Posts