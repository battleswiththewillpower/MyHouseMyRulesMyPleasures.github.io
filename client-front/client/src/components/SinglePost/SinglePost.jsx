import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css'
import { Link } from "react-router-dom";
import bannerpicture from "../../assets-copy/images/DSC_2089.jpeg"
import { useLocation } from "react-router";
import axios from 'axios';
import { Context } from "../../context/Context";


const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = `http://localhost:8000/images/`;
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:8000/api/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)

        }
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {

            await axios.delete(`http://localhost:8000/api/posts/${post._id}`, { data: { username: user.username }, })
            window.location.replace("/");
        } catch (err) { }

    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8000/api/posts/${post._id}`, {
                username: user.username,
                title,
                description,
            })
            setUpdateMode(false)

        } catch(err){}
    }

    return (
        <div className='singlebody'>
            <div className='singlePost'>
                <div className="singlePostWrapper">
                    {
                        post.photo && (
                            <img
                                className="singlePostImg"
                                src={PF + post.photo}
                                alt=""
                            />
                        )}
                    {updateMode ? (
                        <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
                    ) : (

                        <h1 className="singlePostTitle">
                            {title}
                            {
                                post.username === user?.username && (

                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                    </div>
                                )}
                        </h1>
                    )}
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">
                            Author:
                            <Link className="link" to={`/?user=${post.username}`}>
                                <b > {post.username}</b>
                            </Link>
                        </span>
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    {updateMode ? (
                        <textarea className='singlePostDescInput' value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                    ) : (

                        <p className="singlePostDesc">
                            {description}
                        </p>
                    )}
                    {updateMode && (
                        <button className="singlePostButton" onClick={handleUpdate}>
                            Update
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SinglePost