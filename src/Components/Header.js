import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar className='mt-3'>
            
                <Link to="/" className='navbar-brand'>MW Solutions</Link>
                <Nav className="ms-auto">
                    <Link className='nav-link' to="/about">About</Link>
                    <Link className='nav-link' to="/projects">Portfolio</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </Nav>
            
            </Navbar>

            
        </>
    )
}

export default Header
