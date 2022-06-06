import React from 'react'
import Post from '../Post/Post'
import './allposts.css'

const AllPosts = ({ allPosts }) => {
  return (
    <div className='postss'>
    <h1>ALL STYLES</h1>
    <div className='allposts'>
    {
        allPosts.map((pts) => (

          <Post post={pts} />
        )
        
        )}
    

    </div>
    </div>
  )
}

export default AllPosts