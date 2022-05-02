import React from 'react'
import { IoStar } from "react-icons/io5"
import Logo from "./images/Logo.jpg"
import { VscAccount } from "react-icons/vsc"
import { GoMail } from "react-icons/go"
import { BsInfoCircleFill } from "react-icons/bs"
import "../components/styles/Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar" >
      <Link to={`/`} className="link home" >
      <div className='buttons'>
       
        <img className='Logo' src={Logo} alt='Logo' />  
        


       </div>
       </Link>
       <Link to={`/`}>
        <div>
         
        <button className="About"><BsInfoCircleFill /></button>
        
        </div>
        </Link>
        <div>
        <button className="Contact"><GoMail /></button>
        </div>
        <div>
        <button className="Profile"><VscAccount /></button>
        </div>
        <div>
        <button className="Favourites"><IoStar /></button>
        </div>
    </div>
  )
}

export default Navbar;