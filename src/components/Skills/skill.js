import React from 'react';
import './skill.css';
import UIDesign from '../../assets/Image1.jpg';
import WebDesign from '../../assets/Image2.jpg';
import AppDesign from '../../assets/image4.jpg';

const skill = () => {
  return (
    <section id='skills'>
        <span className='skillTiitle'> What I do </span>
        <span className='skillDesc'> fcjgacgavcgg  khcvkgzv jhgkgkhdcvh jvkhvkkhsdv </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>UI/UX Design</h2>
                <p>I am design my all projects consider with UI/UX</p>
                    </div>

            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Web design</h2>
                <p>I am ready to design any kind of web as your wish</p>
                    </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2> App Design</h2>
                <p>ffsrth dfjdj rtdtj ss</p>
                    </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>3D Amination</h2>
                <p>I am ready to design any kind of 3D animation and Sculping as your wish</p>
                    </div>

            </div>
        </div>

        </section>
  )
}

export default skill