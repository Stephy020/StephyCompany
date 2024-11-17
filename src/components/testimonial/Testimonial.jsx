import React from 'react'
import './testimonial.css'
import avat1 from '../../assets/avatar1.jpg'
import avat2 from '../../assets/avatar2.jpg'
import avat3 from '../../assets/avatar3.jpg'
import avat4 from '../../assets/avatar4.jpg'
import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'



// register Swiper custom elements
register();

const Testimonial = () => {
    const swiperElRef = useRef(null);
  
    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [ progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
    }, []);

  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <swiper-container className="container testimonial__container"
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true" >
        
        <swiper-slide className='testimonial'>
          <div className="clients__avatar">
            <img src={avat1} alt='profile'/>
          </div>
          <h5 className='client__name'>Emmanuel Asmah</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque quas ipsa expedita, voluptate voluptatem officiis eveniet animi earum ullam dignissimos, eos eius mollitia amet deleniti odio cupiditate dolor iste.
          </small>
        </swiper-slide>
        
        <swiper-slide className='testimonial'>

          <div className="clients__avatar">
            <img src={avat1} alt=''/>
          </div>
          <h5 className='client__name'>Emmanuel Asmah</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque quas ipsa expedita, voluptate voluptatem officiis eveniet animi earum ullam dignissimos, eos eius mollitia amet deleniti odio cupiditate dolor iste.
          </small>
        </swiper-slide>
        <swiper-slide className='testimonial'>

          <div className="clients__avatar">
            <img src={avat1} alt=''/>
          </div>
          <h5 className='client__name'>Emmanuel Asmah</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque quas ipsa expedita, voluptate voluptatem officiis eveniet animi earum ullam dignissimos, eos eius mollitia amet deleniti odio cupiditate dolor iste.
          </small>
        </swiper-slide>
        <swiper-slide className='testimonial'>

          <div className="clients__avatar">
            <img src={avat1} alt=''/>
          </div>
          <h5 className='client__name'>Emmanuel Asmah</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque quas ipsa expedita, voluptate voluptatem officiis eveniet animi earum ullam dignissimos, eos eius mollitia amet deleniti odio cupiditate dolor iste.
          </small>
        </swiper-slide>
        <swiper-slide className='testimonial'>

          <div className="clients__avatar">
            <img src={avat1} alt=''/>
          </div>
          <h5 className='client__name'>Emmanuel Asmah</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque quas ipsa expedita, voluptate voluptatem officiis eveniet animi earum ullam dignissimos, eos eius mollitia amet deleniti odio cupiditate dolor iste.
          </small>
        </swiper-slide>
        ...
      </swiper-container>
    </section>
  )
}

export default Testimonial