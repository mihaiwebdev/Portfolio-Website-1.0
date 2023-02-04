import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            
            <Navbar id='navbar' className='mt-3'>
            
                <Link to="/" className='navbar-brand'>MW Solutions</Link>
                <Nav className="ms-auto">
                    <Link className='nav-link' to="/about">About</Link>
                    <Link className='nav-link' to="/projects">Portfolio</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </Nav>

                <div className={showNav ? `hamburger opened` : 'hamburger'}
                 onClick={toggleNavbar}>
                    <div></div>
                    <ul className="hamburger-nav">
                        <div>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/projects">Portfolio</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </div>
                    </ul>
                </div>
            
            </Navbar>

            
        </>
    )
}

export default Header
