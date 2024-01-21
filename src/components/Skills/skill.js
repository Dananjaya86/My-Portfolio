import React from 'react';
import './skill.css';
import UIDesign from '../../assets/UIUX.jpg';
import WebDesign from '../../assets/webDesign.jpg';
import AppDesign from '../../assets/appdesign.png';
import Amination from '../../assets/3danimation.jpg';


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
                <p>Welcome to the realm where creativity meets functionality! As a passionate UI/UX designer, I strive to craft digital experiences that seamlessly blend aesthetic appeal with user-centric design. My approach revolves around understanding the user journey, empathizing with their needs, and translating those insights into visually captivating and intuitive interfaces.</p>
                    </div>

            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Web design</h2>
                <p>In the digital realm, where pixels become poetry and code weaves stories, I bring visions to life through the art of web design. As a dedicated web designer, I strive to create not just websites but immersive digital experiences that leave a lasting impression.</p>
                    </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2> App Design</h2>
                <p>Welcome to the intersection of functionality and beauty—where apps are not just tools but experiences that resonate with users. As a dedicated app designer, I specialize in crafting immersive digital solutions that seamlessly blend aesthetics with intuitive functionality.</p>
                    </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Amination} alt="Amination" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>3D Amination</h2>
                <p>Step into a world where imagination takes shape, and pixels dance to tell stories. As a 3D animator, I embark on a journey of creating immersive visual experiences that transcend the boundaries of reality. From concept to execution, my passion lies in breathing life into the digital realm through captivating 3D animations.</p>
                    </div>

            </div>
        </div>

        </section>
  )
}

export default skill