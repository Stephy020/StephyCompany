import React from 'react'
import './service.css'
import { FaCheck } from "react-icons/fa";


const Service = () => {
  return (
    <section id='service'>
      <h5>What I  Offer</h5>
      <h2> Services </h2>

      <div className="container service__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='services'>
          <div className="service__head">
            <h3>Web Devlopment</h3>
          </div>
          <ul>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
         {/*END OF WEB DEVELOPMENT*/}

        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaCheck  className='service__list-icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
         {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Service