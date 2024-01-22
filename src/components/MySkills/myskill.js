import React from 'react'
import './myskill.css';
import Cimage from '../../assets/C#img.jpg';
import Astnet from '../../assets/asp.netimg.png';
import Figma from '../../assets/figmaimg.png';
import Sql from '../../assets/sqlimg.jpg';
import HTML from '../../assets/htmlimg.png';
import CSS from '../../assets/cssimg.png';
import PHP from '../../assets/phpimg.jpg';
import Mysql from '../../assets/mysqlimg.jpg';
import Python from '../../assets/pythonimg.jpg';
import Reactlan from '../../assets/rectimg.png';
import Wordpress from '../../assets/wordpressimg.jpg';
import Blender from '../../assets/blenderimg.png';



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

            <div className='skillBar'>
                <img src={Figma} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Figma UI/UX Design</h2>
                <p>i Have more then 1 year experiance about the Figma UI/UX Design </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Sql} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>SQL Dat base</h2>
                <p>i Have more then 2 year experiance about the SQL data base design </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={HTML} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>HTML5/XML Language</h2>
                <p>i Have more then 2 year experiance and fimiliar with HTML5 Language </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={CSS} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>CSS3 Language</h2>
                <p>i Have more then 2 year experiance and fimiliar with CSS3 Language </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={PHP} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>PHP Language</h2>
                <p>i Have less then 1year experiance about the PHP Language but i still learning about that </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Mysql} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>MySql database</h2>
                <p>i Have less then 1year experiance about the MySQL Language but i still learning about that </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Python} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Python Language</h2>
                <p>Now i am learning about this Language and doing some sample project fro get more experiance </p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Reactlan} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>React Language</h2>
                <p>Now i am started desing with react and i have less then one year experiance. this web site also design with react.js</p>
                    </div>

            </div>

            <div className='skillBar'>
                <img src={Wordpress} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Wordpress CMS (Content Management Systems) </h2>
                <p>i Have mre then One year experiance with Wordpress and newly plugging</p>
                    </div>

            </div>
            <div className='skillBar'>
                <img src={Blender} alt="Astnet" className='skillBarImg'/>
                <div className='skillBarText'> 
                <h2>Blender Animation </h2>
                <p>I have one year experiance about low poly , 3D Animation, Game Assets,</p>
                    </div>

            </div>
        
    </section>


    
  )
}

export default Myskill