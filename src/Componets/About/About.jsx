// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import About1 from '../../assets/About.jpg'
import view1 from '../../assets/view.svg'

function About() {
  return (
    <div className='About'>
        <div className='about-left'>
            <img src={About1} alt="" className='About-img' />
            <img src={view1} alt=""  className='About-svg'/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Natring Tomo Leder's You</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga laudantium porro aliquid voluptatem distinctio et nostrum rem, totam ea quo asperiores, repellat veniam dolores consequatur! Sed dolores impedit aut!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit libero maiores inventore voluptate quam, debitis iusto. Accusantium ex quibusdam nostrum sit aperiam neque, consequuntur nihil id tenetur quis, voluptatem autem.</p>
        </div>
    </div>
  )
}

export default About