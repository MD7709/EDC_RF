// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Menu from '../../assets/Menu.svg'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setmobileMenu(false) :setmobileMenu(true)
  }
  return (
   <nav className='contaienr'>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} className='bor'>Home</Link></li>

            <li><Link to='progarma' smooth={true} offset={-260} duration={400}  className='bor'>Progrm </Link></li>

            <li><Link to='About' smooth={true} offset={-230} duration={500}  className='bor'>About </Link></li>

            <li><Link to='Campus' smooth={true} offset={-260} duration={400}  className='bor'>Campus </Link></li>

            <li><Link to='Testimia' smooth={true} offset={-240} duration={400}  className='bor'>Testimonia</Link></li>

            <li><Link to='Contact' smooth={true} offset={-20} duration={400}  className='btn'>Contact</Link></li>
        </ul>
        <img src={Menu} alt="" className='Menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}


export default Navbar