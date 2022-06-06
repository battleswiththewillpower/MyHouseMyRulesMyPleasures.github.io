import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AllPosts from '../../../components/AllPosts/AllPosts'
import './Allpost.css'
import axios from "axios";

const AllPost = () => {
    const [allPosts, setAllPosts] = useState([])
    const { search } = useLocation();

    useEffect(()=>{
        const getAllPosts = async ()=>{
            const res = await axios.get(`http://localhost:8000/api/posts` + search);
            setAllPosts(res.data);
          };
          getAllPosts();
    },[search]);


  return (
    <>
    <AllPosts allPosts={allPosts}/>
    

    </>
  )
}

export default AllPost