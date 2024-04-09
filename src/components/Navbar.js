import React from 'react'
import '../styles/_Navbar.scss'
import Logo from '../imgs/gifs/wired-lineal-20-love-heart.gif';
function Navbar() {
  return (
   <>
   <nav>
    <div className="container d-flex">
        <div className="logo"><img src={Logo} alt="" /></div>
        <ul className='d-flex'>
           <li>Github </li>
           <li>Linkedin</li>
        </ul>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar
