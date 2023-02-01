import Ilustrations from '../Components/Ilustrations'
import { useNavigate, Link } from 'react-router-dom'

const HomeScreen = () => {

    const navigate =  useNavigate()

    return (
        <>  
            <header className='hero-home'>
                <h1 className='heading-h1'>
                    Elevate Your Business with a Stunning Custom Website
                </h1>
                <p className='p-font text-white'>
                    Attract more customers and leave a lasting impression with a visually appealing and functional website.
                    I combine creativity and technology to deliver websites that effectively communicate your brand and drive results.
                </p>
                <button onClick={() => navigate('/about')} className='btn-white'>Learn More</button>
                <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309"/></svg>
                <div className="img-hero-phone"></div>
            </header>

            <svg id='leaf' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>
            
            <section id='section-1'>
                
                <Link to='/projects#projects' className='section-1-card web-projects'>
                    <h2 className='heading-h2'>WEB DEVELOPMENT</h2>
                    <p>VIEW PROJECTS
                        <svg className='ms-3' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </p>
                </Link>
                 
                <Link to='/about#certificates' className='section-1-card home-certificates'>
                    <h2 className='heading-h2'>CERTIFICATES</h2>
                    <p>VIEW CERTIFICATES
                        <svg className='ms-3' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </p>
                </Link>
            
                <Link to='/about#tech' className='section-1-card home-technologies'>
                    <h2 className='heading-h2'>TECH STACK</h2>
                    <p>VIEW TECHNOLOGIES
                        <svg className='ms-3' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    </p>
                </Link>
            
            </section>

            <Ilustrations />

            <svg id='leaf-rotate' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>

        </>
    )
}

export default HomeScreen
