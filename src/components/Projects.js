import React from 'react'
import '../styles/_Projects.scss'
import img1 from '../imgs/png/ballon.png';
function Projects() {
  return (
   <div className="projects">
    <div className="container">
    <div className="title">
    <div className='d-flex'>
           <img src={img1} alt="" />
            <h1>Projects</h1>
           </div>
    </div>
        <div className="boxes row ">
        <div className="box col col-lg-3 col-md-5 col-sm-12">
            <h3>Template 1</h3>
            <p>Description bla bla bla bla</p>
        </div>
        <div className="box col-lg-3 col-md-5 col-sm-12">
             <h3>Template 2</h3>
            <p>Description bla bla bla bla</p>
        </div>
        <div className="box col-lg-3 col-md-5 col-sm-12">
            <h3>Template 3</h3>
            <p>Description bla bla bla bla</p>
        </div>
        <div className="box col-lg-3 col-md-5 col-sm-12">
        <h3>Template 4</h3>
            <p>Description bla bla bla bla</p>
        </div>
        <div className="box col-lg-3 col-md-5 col-sm-12">
        <h3>Template 5</h3>
            <p>Description bla bla bla bla</p>
        </div>
        <div className="box  col-lg-3 col-md-5 col-sm-12">
        <h3>Template 6</h3>
            <p>Description bla bla bla bla</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Projects
