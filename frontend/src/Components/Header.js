import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SvgLogo from './SvgLogo'


const Header = () => {

  const [showNav, setShowNav] = useState(false)
  
  const toggleNavbar = () => {
      
      if (showNav) {
          setShowNav(false)

      } else {
          setShowNav(true)
      }
  }

  
  return (
    <>
      <Navbar id='navbar'>
      
        <Link to="/" className='navbar-brand'>  
         <SvgLogo />
         
        </Link>

        <Nav className="ms-auto">
          <Link className={'nav-link desktop'} to="/about">About</Link>
          <Link className={'nav-link desktop'} to="/projects">Portfolio</Link>
          <Link className={'nav-link desktop'} to="/services">Services</Link>
          <Link className={'nav-link desktop'} to="/contact">Contact</Link>
        </Nav>

        <div className={showNav ? `hamburger opened` : 'hamburger'}
        onClick={toggleNavbar}
        >
          <div></div>
          <ul className="hamburger-nav">
            <div className='nav-links'>   

              <Link className='nav-link' to="/about">About</Link>

              <Link className='nav-link' to="/projects">Portfolio</Link>

              <Link className='nav-link' to="/services">Services</Link>

              <Link className='nav-link' to="/contact">Contact</Link>
      
            </div>
          </ul>
        </div>
      
      </Navbar>      
    </>
  )
}

export default Header
