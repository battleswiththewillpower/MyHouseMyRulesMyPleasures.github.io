import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ashleybattles from '../../assets-copy/images/ashleybattles.jpg'
import axios from 'axios'
import { Link } from "react-router-dom";

const Sidebar = () => {
//   const [cats, setCats] = useState([]);

// useEffect(()=>{
//   const getCats = async ()=> {
//     const res = await axios.get(`http://localhost:8000/api/categories`);
//     setCats(res.data);
//   };
//   getCats();
// },[]);

  return (
    <div className='sidebar'>
        <div className='sidebar-Items'>
            <span className='sidebarTitle'>Ashley Battles</span>
                <img src={ashleybattles} alt="" />
                <p>Free spirited individual, who lives life on her own terms, while dancing around the world looking stylish and classy!</p>
        </div>
        {/* <div className='sidebar-Items'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
        {
        cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div> */}

        <div className='sidebar-Items'>
            <span className='sidebarTitle'>Follow Me: </span>
            <div className="sidebarSocial">
            <a className="link" href="https://www.instagram.com/dancewithsoul/">
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </a>
        <a className="link" href="https://www.facebook.com/femelvety">
        <i className="sidebarIcon fa-brands fa-facebook-f"></i>
        </a>
        <a className="link" href="https://www.pinterest.com/cutie_piegirl21/">
        <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
        </a>

            </div>
        </div>

    </div>
  )
}

export default Sidebar