import React from 'react'
import './Post.css'
import diamond from "../../assets-copy/images/emeralddiamond.png"
import {Link} from "react-router-dom"

const Post = ({ post }) => {
  const PF = `http://localhost:8000/images/`;
  
  return (
    <div className='post'>
      {
      post.photo &&
        <img className='postImg' src={PF + post.photo} alt="" />
        
        }
      <div className="postInfo">
        <div className="postCats">
        {
        post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
          <span className='postTitle'>{post.title}</span>
          </Link>
        
          <span className='postDes'>{post.description}</span>
          <hr />
          <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>

      </div>
    </div>
  )
}

export default Post