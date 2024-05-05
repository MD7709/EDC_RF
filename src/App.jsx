// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/hero/Hero'
import Program from './Componets/progarma/Program'
import Title from './Componets/Title/TItle'
import About from './Componets/About/About'
import Campus from './Componets/Campus/Campus'
import Testimia from './Componets/Testimosia/Testimia'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='contaienr'>
      <Title SubTitle='OUR PROGRAM' Title='What We Offer'/>
    <Program/>
      <Title SubTitle='About' Title='Lets Do The Section'/>
    <About/>
      <Title SubTitle='Gallary' Title='Lets Goes To Campus '/>
      <Campus/>
      <Title SubTitle='TESTIMONISAL' Title='What Student Say'/>
      <Testimia/>
      <Title SubTitle='Contact' Title='Get in Touch'/>
      <Contact/>
    </div>
      <Footer/>
    </>
  )
}

export default App