import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contacts/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'

const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </>
  )
}
export default App