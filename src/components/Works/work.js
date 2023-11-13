import React from 'react';
import './works.css';
import portfolio1 from '../../assets/ERP System.jpg'
import portfolio2 from '../../assets/Ecommerce.png'
import portfolio3 from '../../assets/Responsive Web.jpg'
import portfolio4 from '../../assets/Resturant Web.jpg'
import portfolio5 from '../../assets/Travel Web.jpg'
import portfolio6 from '../../assets/WEB Design.png'

function Work() {
  return (
    <section id='works'> 

    <h2 className='worktitle'>My Portfolio</h2>
    <span className='workdesc'> fjgftyfty ufyvtyft hygfyt kgkvkhgfyg kgvkkgkv hkgkyfh hgyhvgf  uguvfgy</span>
    <div className='workimgs'>
    <img src={portfolio1} alt='erpSystem' className='workimg'></img>
    <img src={portfolio2} alt='Ecommerce' className='workimg'></img>
    <img src={portfolio3} alt='Responsive' className='workimg'></img>
    <img src={portfolio4} alt='Resturant' className='workimg'></img>
    <img src={portfolio5} alt='Travel' className='workimg'></img>
    <img src={portfolio6} alt='WebDesign' className='workimg'></img>

    </div>
    <button className='workbtn'>See More</button>

    </section>
  )
}

export default Work;