import React, { useState } from 'react'
import "./Navbar.css"
import profilepic from '../../assets-copy/images/pro-pic.jpeg'
import logo from '../../assets-copy/images/nav-logo.png'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = `http://localhost:8000/images/`;

  const handleLogout = () => {
    dispatch({ type:"LOGOUT" })
  }

  return (
    <div className='top'>
      <div className="topLeft">
        <a className="link" href="https://www.instagram.com/dancewithsoul/">
        <i className="topIcon fa-brands fa-instagram"></i>
        </a>
        <a className="link" href="https://www.facebook.com/femelvety">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        </a>
        <a className="link" href="https://www.pinterest.com/cutie_piegirl21/">
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        </a>
        <i className="topIcon fa-solid fa-bag-shopping"></i>
      </div>
      <div className="topCenter">
        <Link className="link" to="/">
        <img className='logo' src={logo} alt="" />
        </Link>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className="link" to="/">
              HOME
            </Link></li>
          <li className='topListItem'><Link className="link" to="/about">
            ABOUT
          </Link></li>
          <li className='topListItem'><Link className="link" to="/styleboard">
            STYLE BOARD
          </Link></li>
          <li className='topListItem'><Link className="link" to="/moodboard">
            MOOD BOARD
          </Link></li>
          <li className='topListItem'><Link className="link" to="/allpost">
            ALL POSTS
          </Link></li>
          <li className='topListItem'><Link className="link" to="/post">
            POST
          </Link></li>
          <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"} 
            
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/profilesettings">
              <img className='topImg' src={ PF+ user.profilePic} alt="" />
            </Link>

          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        <i className=" searchIcon fa-brands fa-searchengin"></i>
      </div>

    </div>
  )
}

export default Navbar