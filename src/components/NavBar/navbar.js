import React, {useState} from 'react';
import './navbar.css';
import logo from'../../assets/Dananjya logo.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';



const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo"className='logo'/>
        <div className="desktopMenu">
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="DesktopMenulistItem" >Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="DesktopMenulistItem" >About</Link>
<Link activeClass='active' to='myskills' spy={true} smooth={true} offset={-30} duration={500} className="DesktopMenulistItem" >Skills</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-0} duration={500} className="DesktopMenulistItem" >Portfolio</Link>
<Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-0} duration={500} className="DesktopMenulistItem" >Cantact</Link>
        
        </div>

        

        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contactpage').scrollIntoView({behavior: 'smooth'});
        }}>  
        Contact Me
        </button>

        <img src={menu} alt="Menu"className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex' :'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
<Link activeClass='active' to='myskills' spy={true} smooth={true} offset={-30} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Skills</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-0} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
<Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-0} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Cantact</Link>
</div>
    </nav>

  )
}

export default Navbar;