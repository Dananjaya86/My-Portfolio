import React from 'react'
import './myskill.css';
import Cimage from '../../assets/C#img.jpg';
import Astnet from '../../assets/asp.netimg.png';


const Myskill = () => {
  return (
    <section id='myskills'>
<span className='skillTiitle'> What are my Skills </span>


            <div className='skillBar'>
                <img src={Cimage} alt="Cimage" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>C# Language</h2>
                <p>I have more then 2years experiance abount C# and i have on going project</p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Astnet} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>ASP.NET Language</h2>
                <p>i Have more then 1 year experiance about the ASP.NET </p>
                    </div>

            </div>
        
    </section>


    
  )
}

export default Myskill