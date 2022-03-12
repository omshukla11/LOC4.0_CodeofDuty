import React from 'react'
import img from '../Images/hero.jpg'
import './Basic.css'

const Hero = () => {
  return (
    <div style={{height:'100vh',backgroundImage:`url(${img})`,backgroundSize:'cover'}}>
      <span className='heroHeadMain' data-aos="zoom-in-down">Overpower. Overtake. Overcome</span>
    </div>
  )
}

export default Hero