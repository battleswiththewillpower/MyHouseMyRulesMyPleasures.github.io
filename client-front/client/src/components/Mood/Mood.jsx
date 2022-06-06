import React from 'react'
import './mood.css'
import cover from '../../assets-copy/moodboard/Solange.jpeg'
import covertwo from '../../assets-copy/moodboard/covertwo.png'

import blueone from '../../assets-copy/moodboard/blue1.jpeg'
import bluetwo from '../../assets-copy/moodboard/blue2.jpeg'
import bluethree from '../../assets-copy/moodboard/blue3.jpeg'
import bluefour from '../../assets-copy/moodboard/blue4.jpeg'
// import bluethree from '../../assets-copy/images/bannerpicthree.jpeg'
import greenone from '../../assets-copy/moodboard/green1.jpeg'
import greentwo from '../../assets-copy/moodboard/green2.jpeg'
import greenthree from '../../assets-copy/moodboard/green3.jpeg'
import greenfour from '../../assets-copy/moodboard/green4.jpeg'

import yellowone from '../../assets-copy/moodboard/yellow1.jpeg'
import yellowtwo from '../../assets-copy/moodboard/yellow2.jpeg'
import yellowthree from '../../assets-copy/moodboard/yellow3.jpeg'
import yellowfour from '../../assets-copy/moodboard/yellow4.jpeg'

import redone from '../../assets-copy/moodboard/red1.jpeg'
import redtwo from '../../assets-copy/moodboard/red2.jpeg'
import redthree from '../../assets-copy/moodboard/red3.jpeg'
import redfour from '../../assets-copy/moodboard/red4.jpeg'

import orangeone from '../../assets-copy/moodboard/orange1.jpeg'
import orangetwo from '../../assets-copy/moodboard/orange2.jpeg'
import orangethree from '../../assets-copy/moodboard/orange3.jpeg'
import orangefour from '../../assets-copy/moodboard/orange4.jpeg'

import purpleone from '../../assets-copy/moodboard/purple1.jpeg'
import purpletwo from '../../assets-copy/moodboard/purple2.jpeg'
import purplethree from '../../assets-copy/moodboard/purple3.jpeg'
import purplefour from '../../assets-copy/moodboard/purple4.jpeg'

import pinkone from '../../assets-copy/moodboard/pink1.jpeg'
import pinktwo from '../../assets-copy/moodboard/pink2.jpeg'
import pinkthree from '../../assets-copy/moodboard/pink3.jpeg'
import pinkfour from '../../assets-copy/moodboard/pink4.jpeg'

import back from '../../assets-copy/moodboard/thierrymugler.jpeg'



const Mood = () => {
  return (
    <div className='mood'>
        <input type="checkbox" id="c1"></input>
        <input type="checkbox" id="c2"></input>
        <input type="checkbox" id="c3"></input>
        <input type="checkbox" id="c4"></input>
        <input type="checkbox" id="c5"></input>
        <input type="checkbox" id="c6"></input>
        <input type="checkbox" id="c7"></input>
        <input type="checkbox" id="c8"></input>
        <input type="checkbox" id="c9"></input>
        <input type="checkbox" id="c10"></input>
        <input type="checkbox" id="c11"></input>
        <input type="checkbox" id="c12"></input>
        <input type="checkbox" id="c13"></input>
        <input type="checkbox" id="c14"></input>
        <input type="checkbox" id="c15"></input>
        <div id='cover'><img src={cover} alt="" /></div>
        <div className='flip-book'>
            <div className='flip' id='p1'>
                <div className='back'>
                        <img src={blueone} alt="" />
                        <label className='back-btn' for="c1">Back</label>
                </div>
                <div className='front'>
                    <img src={covertwo} alt="" />
                    <label className='next-btn' for="c1">Next</label>

                </div>

            </div>

            <div className='flip' id='p2'>
                <div className='back'>
                        <img src={bluethree} alt="" />
                        <label className='back-btn' for="c2">Back</label>
                </div>
                <div className='front'>
                    <img src={bluetwo} alt="" />
                    <label className='next-btn' for="c2">Next</label>

                </div>

            </div>

            <div className='flip' id='p3'>
                <div className='back'>
                        <img src={greenone} alt="" />
                        <label className='back-btn' for="c3">Back</label>
                </div>
                <div className='front'>
                    <img src={bluefour} alt="" />
                    <label className='next-btn' for="c3">Next</label>

                </div>

            </div>

            <div className='flip' id='p4'>
                <div className='back'>
                        <img src={greenthree} alt="" />
                        <label className='back-btn' for="c4">Back</label>
                </div>
                <div className='front'>
                    <img src={greentwo} alt="" />
                    <label className='next-btn' for="c4">Next</label>

                </div>

            </div>

            <div className='flip' id='p5'>
                <div className='back'>
                        <img src={yellowone} alt="" />
                        <label className='back-btn' for="c5">Back</label>
                </div>
                <div className='front'>
                    <img src={greenfour} alt="" />
                    <label className='next-btn' for="c5">Next</label>

                </div>

            </div>

            <div className='flip' id='p6'>
                <div className='back'>
                        <img src={yellowthree} alt="" />
                        <label className='back-btn' for="c6">Back</label>
                </div>
                <div className='front'>
                    <img src={yellowtwo} alt="" />
                    <label className='next-btn' for="c6">Next</label>

                </div>

            </div>

            <div className='flip' id='p7'>
                <div className='back'>
                        <img src={redone} alt="" />
                        <label className='back-btn' for="c7">Back</label>
                </div>
                <div className='front'>
                    <img src={yellowfour} alt="" />
                    <label className='next-btn' for="c7">Next</label>

                </div>

            </div>
            <div className='flip' id='p8'>
                <div className='back'>
                        <img src={redthree} alt="" />
                        <label className='back-btn' for="c8">Back</label>
                </div>
                <div className='front'>
                    <img src={redtwo} alt="" />
                    <label className='next-btn' for="c8">Next</label>

                </div>

            </div>
            <div className='flip' id='p9'>
                <div className='back'>
                        <img src={orangeone} alt="" />
                        <label className='back-btn' for="c9">Back</label>
                </div>
                <div className='front'>
                    <img src={redfour} alt="" />
                    <label className='next-btn' for="c9">Next</label>

                </div>

            </div>
            <div className='flip' id='p10'>
                <div className='back'>
                        <img src={orangethree} alt="" />
                        <label className='back-btn' for="c10">Back</label>
                </div>
                <div className='front'>
                    <img src={orangetwo} alt="" />
                    <label className='next-btn' for="c10">Next</label>

                </div>

            </div>
            <div className='flip' id='p11'>
                <div className='back'>
                        <img src={purpleone} alt="" />
                        <label className='back-btn' for="c11">Back</label>
                </div>
                <div className='front'>
                    <img src={orangefour} alt="" />
                    <label className='next-btn' for="c11">Next</label>

                </div>

            </div>
            <div className='flip' id='p12'>
                <div className='back'>
                        <img src={purplethree} alt="" />
                        <label className='back-btn' for="c12">Back</label>
                </div>
                <div className='front'>
                    <img src={purpletwo} alt="" />
                    <label className='next-btn' for="c12">Next</label>

                </div>

            </div>
            <div className='flip' id='p13'>
                <div className='back'>
                        <img src={pinkone} alt="" />
                        <label className='back-btn' for="c13">Back</label>
                </div>
                <div className='front'>
                    <img src={purplefour} alt="" />
                    <label className='next-btn' for="c13">Next</label>

                </div>

            </div>
            <div className='flip' id='p14'>
                <div className='back'>
                        <img src={pinktwo} alt="" />
                        <label className='back-btn' for="c14">Back</label>
                </div>
                <div className='front'>
                    <img src={pinkthree} alt="" />
                    <label className='next-btn' for="c14">Next</label>

                </div>

            </div>
            <div className='flip' id='p15'>
                <div className='back'>
                        <img src={back} alt="" />
                        <label className='back-btn' for="c15">Back</label>
                </div>
                <div className='front'>
                    <img src={pinkfour} alt="" />
                    <label className='next-btn' for="c15">Next</label>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Mood