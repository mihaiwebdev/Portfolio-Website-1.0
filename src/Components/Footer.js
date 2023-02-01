import { Nav } from 'react-bootstrap'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className='footer'>
            <div className="content-container">
                <div className="footer-cta">
                    <div>
                        <h2 className="heading-h2">
                            Let's talk about your project
                        </h2>
                        <p className="p-font text-white">
                            Ready to take it to the next level? Contact me today and find out 
                            how my expertise can help your business grow.
                        </p>
                    </div>

                    <button onClick={() => navigate('/contact#contact')}
                    className="btn-white">GET IN TOUCH</button>
                    <svg className="cta-circles" width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(-1 0 0 1 876 0)" fill="url(#a)" fillRule="evenodd" opacity=".309"><g transform="translate(0 292)"><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/><circle transform="matrix(0 1 1 0 584 -584)" cx="730" cy="146" r="146"/></g><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></svg>
                </div>
            </div>

            <div className="main-footer">
                <div className="content-container">
                    <div className='footer-nav'>
                    
                        <Link to="/" className='navbar-brand'>MW Solutions</Link>
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/about#about">About</Link>
                            <Link className='nav-link' to="/projects#projects">Portfolio</Link>
                            <Link className='nav-link' to="/contact#contact">Contact</Link>
                        </Nav>
                
                    </div>

                    <div className="footer-info">
                        <div>
                            <p>Contact Me</p>
                            <p><FontAwesomeIcon icon={faEnvelope} size='xl'
                             color='#fff' className='me-2 mt-2 pointer'/>
                             1mihaisava1@gmail.com</p>
                            
                        </div>

                        <p>Copyright 2023 &copy;. All Rights Reserved</p>

                        <div className='brands'>
                            <FontAwesomeIcon icon={faInstagram} size='xl'
                             color='#E7816B' className='mx-2 pointer'/>
                            <FontAwesomeIcon icon={faTwitter} size='xl'
                             color='#E7816B' className='mx-2'/>
                            <FontAwesomeIcon icon={faLinkedin} size='xl'
                             color='#E7816B' className='ms-2'/>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
