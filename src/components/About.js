import React from 'react'
import '../styles/_About.scss'
import img1 from '../imgs/gifs/output-onlinegiftools (2).gif';
import img3 from '../imgs/png/ballon.png';
import img4 from '../imgs/png/ana.jpg';
function About() {
  return (
    <div className="about position-relative overflow-hidden">
        <div className="title">
           <div className='d-flex'>
           <img src={img3} alt="" />
            <h1>About</h1>
           </div>
            <p>an enthusiastic self learner frontend developer that is looking for an intern</p> 
        </div>
       
        <div className="content row">
          <div className="me col  ">
            <img src={img4} alt="" className='slide-bck-center d-block mx-auto' />
          </div>
          <div className="info col  ">
            <ul className='p-0'>
              <li className='d-flex'> <span className='text-center d-block'>Degree</span>  Nile University (Computer Science )</li>
              <li className='d-flex'><span className='text-center d-block'>Phone</span>  01096371364</li>
              <li className='d-flex'><span className='text-center d-block'>City </span>  Giza, October</li>
              <li className='d-flex'> <span className='text-center d-block'>Email </span>  ma.ebrahim@nu.edu.eg</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About
