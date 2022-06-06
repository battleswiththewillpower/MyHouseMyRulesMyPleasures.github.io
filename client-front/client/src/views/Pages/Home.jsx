import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import ModelPictures from '../../components/ModelPictures/ModelPictures'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from "axios";
import './Home.css'
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  useEffect(()=>{
    const getPosts = async ()=>{
      const res = await axios.get(`http://localhost:8000/api/posts` + search);
      setPosts(res.data);
    };
    getPosts();
  }, [search]);
  return (
    <>
        <Header className='header' />
    <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
        
    </div>
    
    <ModelPictures />
    <Banner className='banner' />
    
    </>
  )
}

export default Home