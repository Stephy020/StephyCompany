
import React from 'react'
import './about.css'
import  met from '../../assets/me-about.jpg'
import { LoremIpsum , Avatar } from 'react-lorem-ipsum';
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";



const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About me</h1>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={met} alt='about me'/>
        </div>
      </div>

      <div className='about__content'>
        <div className="about__cards">

          <article className='about__card'>
            <FaAward  className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ working  </small>
          </article>

          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Clients</small>
          </article>

          <article className='about__card'>
            <FaFolderOpen  className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>
         
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa asperiores quam dicta illum eaque modi cupiditate, tempora omnis. Qui ea tenetur ab minus quidem consequuntur sapiente soluta molestias aliquam?
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   
    </section>
  )
}

export default About