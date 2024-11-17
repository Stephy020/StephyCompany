import React from 'react'
import './nav.css'
import { AiTwotoneHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiTwotoneHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaRegUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
      <a href='#service' onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
      <a href='#contact'  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>
      <a href='#portfolio'  onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaNetworkWired/></a>
    </nav>
  )
}

export default Nav