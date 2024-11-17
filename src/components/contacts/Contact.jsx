import React from 'react'
import './contacts.css'
import { MdAttachEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nm5m1gh', 'template_gmp6qf9', form.current, {
        publicKey: 'SZIMUhGMSbQIUtwFY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>
      <h5>Get in Tonch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="option">
            <MdAttachEmail className='contact__icon-option' />
            <h4>Email</h4>
            <h5>abudustephen72@gmail.com</h5>
            <a rel="noreferrer" href="mailto:abudustephen72@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="option">
            <BsMessenger className='contact__icon-option'/>
            <h4>Messenger</h4>
            <h5>Stephen Codes</h5>
            <a  rel="noreferrer" href="https://m.me/stephen.abudu.12" target='_blank'>Send a Message</a>
          </article>

          <article className="option">
            <FaWhatsapp className='contact__icon-option'/>
            <h4>WhatsApp</h4>
            <h5>+213797823100</h5>
            <a  rel="noreferrer" href="https://api.whatsapp.com/send?phone=+213797823100" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email'/>
          <textarea name="message" placeholder='your message' rows="7" required></textarea>
          <input className='btn btn-primary' type="submit" value='submit' />
        </form>
      </div>
    </section>
  )
}

export default Contact