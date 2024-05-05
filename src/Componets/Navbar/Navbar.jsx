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
              <li><Link to='hero' className='bor'>Home</Link></li>

              <li><Link to='progarma'  className='bor'>Progrm </Link></li>

              <li><Link to='About'  className='bor'>About </Link></li>

              <li><Link to='Campus'   className='bor'>Campus </Link></li>

              <li><Link to='Testimia'   className='bor'>Testimonia</Link></li>

              <li><Link to='Contact'  className='btn'>Contact</Link></li>
          </ul>
          <img src={Menu} alt="" className='Menu-icon' onClick={toggleMenu}/>
    </nav>
    )
  }


  export default Navbar
