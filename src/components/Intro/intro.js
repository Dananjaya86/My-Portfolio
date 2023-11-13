import React from 'react';
import'./intro.css';
import bg from '../../assets/IMG_20210901_100531.jpg'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
<div className="introContent">
<span className="hello">Hello</span>
<span className="introText"> I am <span className="introName">Dananjaya Dasanayake</span><br/> Front End Desiger </span> 
<p className="intropara">I am a dedicated and innovative front-end designer with a passion for creating <br/>visually appealing and user-friendly digital experiences. 
With a strong foundation <br/>in web development and design principles, I bring a unique blend of technical expertise <br/> and creative flair to every project.
My journey in the field of front-end design has equipped <br/> me with a deep understanding of HTML, CSS, and JavaScript, enabling me to transform <br/> concepts 
into responsive and intuitive interfaces. I stay abreast of the latest design <br/> trends and technologies to ensure that my work not only meets but exceeds current <br/> industry standards.</p>
<Link> <button className="btn">Hire Me</button></Link>

</div>
<img src={bg} alt="profile" className="bg"/>
        </section>
  )
}

export default Intro