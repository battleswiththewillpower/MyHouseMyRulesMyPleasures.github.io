import React, { useContext, useState } from 'react'
import "./PostIt.css"
import topban from '../../../assets-copy/images/Tiffany_x_Reed.png'
import { Context } from "../../../context/Context";
import axios from "axios";

const PostIt = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
        }
        if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await axios.post(`http://localhost:8000/api/upload`, data);
            } catch (err) {}
          }
          try {
            const res = await axios.post(`http://localhost:8000/api/posts`, newPost);
            window.location.replace("/post/" + res.data._id);
          } catch (err) {}
    }
  return (
      <div className='body'>

    <div className='postIt'>
    {file && (
        <img className="topimg" src={URL.createObjectURL(file)} alt="" />
      )}
        
        <form className='postForm' onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="fileInput">
                <i className="postIcon fa-regular fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} 
                onChange={(e)=>setFile(e.target.files[0])}
                />
                <input className='writeInput' type="text" placeholder='Title'  autoFocus={true} 
                onChange={e=>setTitle(e.target.value)}
                />

            </div>
            <div className="formGroup">
                <textarea placeholder='Tell your story....' type="text" autoFocus={true} className="writeInput postText"
                onChange={e=>setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type='submit' className='submit'>Publish</button>

        </form>

    </div>
    </div>
  )
}

export default PostIt