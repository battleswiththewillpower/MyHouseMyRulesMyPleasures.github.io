import React from 'react'
import './ModelPictures.css'

import modelPictureone from '../../assets-copy/images/yellowdress.jpeg'
import modelPicturetwo from '../../assets-copy/images/floral.jpeg'
import modelPicturethree from '../../assets-copy/images/naturalHair-yellow.jpg'
import modelPicturefour from '../../assets-copy/images/modelWlongbraids.jpeg'
import modelPicturefive from '../../assets-copy/images/naturalCurls.png'
import modelPicturesix from '../../assets-copy/images/Jadore2.jpeg'
import modelPictureseven from '../../assets-copy/images/3d-jourdan.jpg'
// import styled from 'styled-components';

const ModelPictures = () => {
  return (
    <div className='modelbody'>
    
  <div className='toppic'>
    <div className='yellow'>
    <img src={modelPictureone} alt='Yellow satin dress with cover' />

    </div>
    <div className='floral'>
    <img src={modelPicturetwo} alt='Model with floral outfit' />

    </div>
  </div>

    <div className='mid'>
    <div className='froYellow'>
    <img src={modelPicturethree} alt='Model with natural hair' />

    </div>

    <div className='braids'>
    <img src={modelPicturefour} alt='Model with long braids like a crown' />

    </div>

     <div className='curls'>
    <img src={modelPicturefive} alt='Model with curls' />

    </div>

    </div>


    <div className='bot'>
    <div className='dior'>
    <img src={modelPicturesix} alt='Dior Fragrance' />

    </div>

    <div className='goldRobot'>
    <img src={modelPictureseven } alt='Model with floral outfit' />

    </div>
    </div>
    
      </div>
    )
  }



export default ModelPictures