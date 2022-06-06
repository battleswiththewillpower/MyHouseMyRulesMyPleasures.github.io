import React from 'react'
import './Header.css'
import headerVideo from '../../assets-copy/Photos_for_video/frontPage_video.mp4'
const Header = () => {
  return (
    <div className='header'>

        <div className="headerTitle">
            <span className='top-header'>Welcome</span>
            <span className='bot-header'>For Style Fashion & Fun</span>
        </div>
        <video className='headerVideo' src={headerVideo} autoPlay loop muted />

        </div>
  )
}

export default Header