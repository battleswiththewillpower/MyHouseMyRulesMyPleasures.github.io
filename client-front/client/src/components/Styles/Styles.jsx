import React from 'react'
import './styles.css'
import styled from 'styled-components';

import banpicone from '../../assets-copy/images/bannerpicone.jpeg'
import banpictwo from '../../assets-copy/images/bannerpictwo.jpeg'
import banpicthree from '../../assets-copy/images/bannerpicthree.jpeg'
import banpicfour from '../../assets-copy/images/bannerpicfour.jpeg'
import banpicfive from '../../assets-copy/images/bannerpicfive.jpeg'
import banpicsix from '../../assets-copy/images/bannerpicsix.jpeg'

import diamondone from '../../assets-copy/images/glasses.png'
import diamondtwo from '../../assets-copy/images/bnecklace.png'
import diamondthree from '../../assets-copy/images/dress.png'
import diamondfour from '../../assets-copy/images/bracelet.png'
import diamondfive from '../../assets-copy/images/lvmules.png'
import diamondsix from '../../assets-copy/images/snakeskinskirt.png'

import daylook from '../../assets-copy/images/daylookcopy.png'
import nightlook from '../../assets-copy/images/nightLookcopy.png'
import guccishades from '../../assets-copy/images/guccishadescopy.png'

import daylooktwo from '../../assets-copy/images/dayLooksnakecopy.png'
import nightlooktwo from '../../assets-copy/images/nightLooksnkecopy.png'
import snakenecklace from '../../assets-copy/images/necklace.png'

import daylookthree from '../../assets-copy/images/daybookdress.png'
import nightlookthree from '../../assets-copy/images/nightlookdress.png'
import pinkguccidress from '../../assets-copy/images/gucciDresscopy.PNG'

import daylookfour from '../../assets-copy/images/braceletdayoutfit.png'
import nightlookfour from '../../assets-copy/images/braceletnightoutfit.png'

import daylookfive from '../../assets-copy/images/lvmulesdaylook.png'
import nightlookfive from '../../assets-copy/images/lvmulesnightoutfit.png'

import daylooksix from '../../assets-copy/images/yslskirtdaylook.png'
import nightlooksix from '../../assets-copy/images/yslskirtnightlook.png'

const Styles = () => {
    return (
        <div className='style'>
            <Products className='bannerstyle'>


                <div className='bannerrow'>
                    <img src={banpicone} alt="" />
                    <img src={banpictwo} alt="" />
                    <img src={banpicthree} alt="" />
                    <img src={banpicfour} alt="" />
                    <img src={banpicfive} alt="" />
                    <img src={banpicsix} alt="" />


                </div>
            </Products>

            <Products className='productstyle'>


                <>


                    <div className='one'>

                        <div className='diamondOne'>
                            {/* <img className='lvmules' src={imgUrlThree} alt="" /> */}
                            <a href="https://www.gucci.com/us/en/pr/women/accessories-for-women/eyewear-for-women/cat-eye-sunglasses-for-women/cat-eye-frame-sunglasses-p-691304J07401060">
                            <img src={diamondone} alt="" />
                            </a>
                        </div>

                        <div className='box-one'>
                            <img className='dayone' src={daylook} alt="" />
                            <img className='nightone' src={nightlook} alt="" />
                        </div>


                        {/* <img className='guccishades' src={guccishades} alt="" /> */}

                    </div>


                    <div className='two'>

                        <div className='box-one'>
                            <img src={daylooktwo} alt="" />
                            <img src={nightlooktwo} alt="" />

                        </div>

                        <div className='diamondtwo'>
                            {/* <img className='lvmules' src={imgUrlTwo} alt="" /> */}
                            <a href="https://www.bulgari.com/en-us/jewelry/serpenti/serpenti-viper-necklace-yellow-gold-yellow-359144">
                            <img src={diamondtwo} alt="" />
                            </a>

                            {/* <img className='necklace' src={snakenecklace} alt="" /> */}
                        </div>

                    </div>


                    <div className='three'>
                        <div className='diamondthree'>
                            {/* <img className='lvmules' src={imgUrlTwo} alt="" /> */}
                            <a href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/long-dresses-midi-dresses-for-women/silk-duchesse-midi-length-dress-p-691494ZHS845736">
                            <img src={diamondthree} alt="" />
                            </a>
                        </div>

                        <div className='box-one'>
                            <img className='dayone' src={daylookthree} alt="" />
                            <img className='nightone' src={nightlookthree} alt="" />

                        </div>
                        {/* <img className='guccidress' src={pinkguccidress} alt="" /> */}

                    </div>


                    <div className='four'>

                        <div className='box-one'>
                            <img className='dayone' src={daylookfour} alt="" />
                            <img className='nightone' src={nightlookfour} alt="" />

                        </div>


                        <div className='diamondfour'>
                            {/* <img className='lvmules' src={imgUrlThree} alt="" /> */}
                            <a href="https://www.pomellato.com/en_us/jewelry/bracelets/bracelet-nudo-rose-gold-18kt-white-topaz-mother-of-pearl-diamond?childSku=PBC1006_O7WHR_BTBMP_S">
                            <img src={diamondfour} alt="" />
                            </a>
                        </div>

                    </div>


                    <div className='five'>
                        <div className='diamondfive'>
                            {/* <img className='yslskirt' src={imgUrlOne} alt="" /> */}
                            <a href="https://us.louisvuitton.com/eng-us/products/revival-flat-mule-nvprod3250041v/1A9P7D">
                            <img src={diamondfive} alt="" />
                            </a>
                        </div>

                        <div className='box-one'>
                        <img className='dayone' src={daylookfive} alt="" />
                            <img className='nightone' src={nightlookfive} alt="" />

                        </div>

                    </div>


                    <div className='six'>

                    <div className='box-one'>
                            <img className='dayone' src={daylooksix} alt="" />
                            <img className='nightone' src={nightlooksix} alt="" />

                        </div>

                        <div className='diamondsix'>
                            {/* <img className='lvmules' src={imgUrlTwo} alt="" /> */}
                            <a href="https://www.ysl.com/en-us/leather/pencil-skirt-in-crocodile-embossed-leather-695357Y5SU21000.html">
                            <img src={diamondsix} alt="" />
                            </a>
                        </div>

                    </div>

                </>


            </Products>


        </div>
    )
}

const Products = styled.div`
justify-content: space-evenly;
// display: flex;  
//   flex-wrap: wrap;
// margin-top: 1rem;
// background-color: #50c878;
// .dress, .three {
//    display: flex;
//    flex-direction: column;
// }
// .lvmules {
//   z-index: 1;
//   position: absolute;
//   width: 20%;
//   margin-left:8rem;
//   margin-top:7rem;
// }

// .yslskirt {
//   z-index: 1;
//   position: absolute;
//   width: 20%;
//   clip: rect(120px,340px,500px,-0px);
//   margin-left: 8rem;
// }

.bannerrow {
  display:flex;
}

.bannerrow img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}


 .one, .three, .five {
   display: flex;
   align-items: center;
  //  flex-direction: row;
  
 }

//  .guccishades {
//    margin-top: 40rem;
//    margin-right: 30rem;

//  }

 .box-one {
   position: relative;
   width: 100vw;
   height: 100vh;
   transform-style: preserve-3d;
//    margin-top: 5rem;
//    perspective: 1000px;
 }

 .box-one img {
   position: absolute;
   backface-visibility: hidden;
   transition: 1s;
  //  margin-top: 4rem;
 }

 .box-one img:nth-child(2) {
   transform: rotateY(180deg)
 }

 .box-one:hover img:nth-child(2) {
   transform: rotateY(0deg);
 }
 
 .box-one:hover img:nth-child(1) {
   transform: rotateY(-180deg);
 }

 .dayone, .nightone {
     margin-top: 6rem;
 }

//  .necklace {
//    margin-right: 15rem;
//  }


//  .guccidress {
//   margin-top: 25rem;
//   margin-right:38rem;
//  }


.two, .four, .six {
  display: flex;
  align-items: center;
  justify-content: flex-end;

}
`

export default Styles