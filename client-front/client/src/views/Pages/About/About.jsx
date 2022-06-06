import React from 'react'
import './About.css'
import topban from '../../../assets-copy/images/DSC_2089.jpeg'
import botban from '../../../assets-copy/images/Tiffany_x_Reed.png'

const About = () => {
  return (
    <div className='body'>
        <div className='about'>
          <h1>ABOUT THIS BLOG</h1>
        <img src={topban} alt="" />
        <p>A place for fashion, style choices, and overall fun. Fashion should be more about your personality and what catches your eye. Find those pieces that make you smile but also require you to step out of your comfort zone. Lets find these pieces and model walk across the world with life and love. MUAH</p>
        <img src={botban} alt="" />
</div>
    </div>
  )
}

export default About