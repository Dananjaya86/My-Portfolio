import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook.png';
import GithubIcon from '../../assets/github.jpg';
import LinkInIcon from '../../assets/linkin.png';
import TwiterIcon from '../../assets/twiter.png';
import emailjs from '@emailjs/browser';

const Facebook = 'https://www.facebook.com/daham.dasanayake';
const Github = 'https://github.com/Dananjaya86';
const Linkin = 'https://www.linkedin.com/in/dananjaya-daham-dasanayaka-66317ab6/';
const Twiter = 'https://twitter.com/DananjayaDu';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c06z288', 'template_ox5gx3v', form.current, 'V1N1-fj1Fjn_msNJZ_BeM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactpage'>
        
        <div className='contact'>
<h2 className='contactpageTitle'>Please contact Me</h2>
<span className='contactdesc'> sjkjhg hjvhgvhg gvhgvhg jhgdtyhk jgdfhjh gytgkn</span>
<form className='contactform' ref={form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='Your Name' name="your_name"></input>
    <input type='text' className='email' placeholder='Your Email' name="your_email"></input>
    <textarea  className='msg' name='messagr' rows="5" placeholder="your Message"></textarea>
    <button type="submit" value="Send" className='submitbtn'> Submit</button>
    <div className='links'>
    
    <a href={Facebook} target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt='facebook' className='link'></img> </a>
        <a href={Github} target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt='github'  className='link'></img></a>
        <a href={Linkin} target="_blank" rel="noopener noreferrer">
        <img src={LinkInIcon} alt='linkin' className='link'></img></a>
        <a href={Twiter} target="_blank" rel="noopener noreferrer">
        <img src={TwiterIcon} alt='twiter' className='link'></img></a>
    </div>
</form>
        </div>
    </section>
  )
}

export default Contact;