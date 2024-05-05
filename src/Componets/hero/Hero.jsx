// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import arrow from '../../assets/arrow.svg'

const Hero = () => {
  return (
    <div className='row'>
      <div className='col1'>
        <div className="hero-text">
          <h1>We Ensure The Better Eduction</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, neque laudantium. Temporibus recusandae pariatur molestiae expedita, magnam nihil accusantium nisi ad rem repellat, animi a enim. Amet id aliquam nihil.</p>
          <button className='btn1'>Exlpore More <img src={arrow} className='arrow' /></button>
        </div>
      </div>
      <div className='col2'>
        <img src={hero} alt="" className='hero' />
      </div>
    </div>
  )
}

export default Hero