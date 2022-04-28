import React from 'react'
import { IoStar } from "react-icons/io5"
import Logo from "./images/Logo.jpg"
import { VscAccount } from "react-icons/vsc"
import { GoMail } from "react-icons/go"
import { BsInfoCircleFill } from "react-icons/bs"

const Navbar = () => {
  return (
    <div>
        <ul className='Navbar'>
        <img className='Logo' src={Logo} alt='Logo' />       
        <button className="About" alt='Get To Know Us'><BsInfoCircleFill /></button>
        <button className="Contact" alt='Get In Touch'><GoMail /></button>
        <button className="Profile"><VscAccount /></button>
        <button className="Favourites"><IoStar /></button>
        </ul>
    </div>
  )
}

export default Navbar;