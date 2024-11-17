import React from 'react'
import './header.css'
import avatar1 from '../../assets/avatar1.jpg'

const CTA = () => {
  return (
    <div className='cta'>
      <a href="https://docs.google.com/document/d/196L6BDQnKZBwfcFXCd9doGYFuVLJ24X_UkxOVsKsebw/edit?usp=drive_link" target="_blank" className='btn'>Resume </a>
      <a href="#contact" className='btn btn-primary'>contact</a>
    </div>
  )
}

export default CTA
