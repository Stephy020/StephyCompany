import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/stephen-abudu' target ="_blank"><FaLinkedin /></a>
      <a href='https://github.com' target ="_blank"><FaGithub />
</a>
      <a href='https://instagram.com' target ="_blank"><BsInstagram />
</a>
    </div>
  )
}

export default HeaderSocials
