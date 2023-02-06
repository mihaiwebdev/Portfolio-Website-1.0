import { Nav } from 'react-bootstrap'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Footer = () => {

    const navigate = useNavigate()

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(231, 129, 107, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(231, 129, 107, 1)"
        }
      }

    return (
        <footer className='footer'>
            <div className="content-container">
           
                <motion.div className="footer-cta"
                 initial={{x: '-50%', y: 100, opacity: 0}}
                 whileInView={{x: '-50%', y:0, opacity: 1}}
                 transition={{ duration: 0.7, type: 'spring', stiffness: 200, dumping:20}}
                >
                    <div>
                        <h2 className="heading-h2">
                            Let's talk about your project
                        </h2>
                        <p className="p-font text-white">
                            Ready to take it to the next level? Contact me today and find out 
                            how my expertise can help your business grow.
                        </p>
                    </div>

                    <button onClick={() => navigate('/contact')}
                    className="btn-white">GET IN TOUCH</button>
                    <svg className="cta-circles" width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(-1 0 0 1 876 0)" fill="url(#a)" fillRule="evenodd" opacity=".309"><g transform="translate(0 292)"><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/><circle transform="matrix(0 1 1 0 584 -584)" cx="730" cy="146" r="146"/></g><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></svg>
                </motion.div>
             
            </div>

            <div className="main-footer">
                <div className="content-container">
                    <div className='footer-nav'>
                    
                        <Link to="/#home" className='navbar-brand'>
                            <svg width="200" height="52.231579254623504" viewBox="0 0 398.36875670167217 52.231579254623504" className="css-1j8o68f"><defs id="SvgjsDefs25266"></defs><g id="SvgjsG25267" featurekey="nameLeftFeature-0" transform="matrix(0.9543296641615452,0,0,0.9543296641615452,-1.391123407029063,-1.4211894552266138)" fill="#E7816B">
                                <motion.path variants={icon} initial="hidden" animate="visible" transition={{default:
                                { duration: 2, ease: "easeInOut" },fill: { duration: 2, ease: [1, 0, 0.8, 1] }}} className='logo-item'
                                d="M45.8 17.485 l5.8113 0 l-18.034 24.047 l-7.0424 -9.3888 l-7.0412 9.3888 l-18.036 -24.047 l5.8116 0 l12.224 16.298 l4.1356 -5.5148 l-8.088 -10.784 l5.8116 0 l5.1824 6.9096 l5.1816 -6.9096 l5.811 0 l-8.0872 10.784 l4.1364 5.5148 z M88.334 21.902 l-27.18 0.000039062 l0 4.3726 l18.128 0.0675 l-0.017266 4.6956 l-18.111 -0.0675 l0 4.3564 l27.18 0 l0 4.6954 l-31.875 0 l0 -22.815 l31.875 0 l0 4.6951 z M126.81400000000001 24.085 c0 2.0163 -0.65756 3.518 -1.6228 4.5964 c0.97048 1.0675 1.6226 2.5284 1.6226 4.4636 c0 5.046 -4.1128 6.8776 -6.8776 6.8776 l-24.997 0 l0 -22.815 l24.474 0 c2.975 0 7.4008 1.8316 7.4008 6.8776 z M121.236 34.9636 c0.43632 -0.24144 0.88232 -0.64636 0.88204 -1.8193 c0 -0.94328 -0.31938 -1.4539 -1.1389 -1.8214 c-0.745 -0.33402 -1.5585 -0.36098 -1.5661 -0.36098 l-19.779 0 l0 4.3645 l20.281 0 c0.2048 -0.0067968 0.81664 -0.083944 1.3207 -0.36277 z M121.236 25.904 c0.43632 -0.24144 0.88232 -0.64608 0.88232 -1.8193 c0 -0.94328 -0.31938 -1.4539 -1.1389 -1.8214 c-0.745 -0.33402 -1.5585 -0.36098 -1.5661 -0.36098 l-19.779 0 l0 4.3645 l20.281 0 c0.2048 -0.0067968 0.81664 -0.083944 1.3207 -0.36277 z"></motion.path></g>
                                <g id="SvgjsG25268" featurekey="inlineSymbolFeature-0" transform="matrix(0.5803521597305438,0,0,0.5803521597305438,132.38403575639435,-2.901876473245103)" fill="#E7816B">
                                <g xmlns="http://www.w3.org/2000/svg" display="none"><rect x="-900.877" y="-637.172" display="inline" fill="#E7816B" width="1370.931" height="1263.231"></rect></g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <motion.path variants={icon} initial="hidden" animate="visible" transition={{default:
                                    { duration: 2, ease: "easeInOut" },fill: { duration: 2, ease: [1, 0, 0.8, 1] }}} className='logo-item emoji'
                                    d="M64.051,66.572c-0.481-0.078-0.973,0.077-1.319,0.423l-5.537,5.537c-1.922,1.922-4.476,2.981-7.194,2.981   s-5.273-1.059-7.195-2.981l-5.537-5.537c-0.346-0.347-0.841-0.504-1.319-0.423c-13.013,2.163-22.827,13.733-22.827,26.914   c0,0.836,0.678,1.514,1.514,1.514h70.727c0.836,0,1.514-0.678,1.514-1.514C86.878,80.305,77.064,68.735,64.051,66.572z    M16.199,91.971c0.697-10.823,8.794-20.135,19.489-22.273l4.975,4.975c2.494,2.495,5.81,3.868,9.336,3.868   c3.527,0,6.842-1.374,9.335-3.868l4.975-4.975c10.695,2.138,18.792,11.449,19.489,22.273H16.199z"></motion.path>
                                    <motion.path variants={icon} initial="hidden" animate="visible" transition={{default:
                                    { duration: 2, ease: "easeInOut" },fill: { duration: 2, ease: [1, 0, 0.8, 1] }}} className='logo-item emoji'
                                    d="M44.875,47.284L44.875,47.284c1.674,0.673,3.404,0.992,5.107,0.991c5.453,0,10.624-3.265,12.778-8.627   c2.826-7.036-0.599-15.059-7.636-17.884c-7.036-2.827-15.059,0.599-17.885,7.636c-1.369,3.408-1.328,7.146,0.113,10.524   C38.796,43.302,41.467,45.916,44.875,47.284z M40.05,30.529c1.68-4.181,5.712-6.727,9.965-6.727c1.327,0,2.677,0.248,3.982,0.772   c2.657,1.068,4.74,3.106,5.865,5.74c1.124,2.635,1.156,5.548,0.089,8.206c-2.205,5.488-8.457,8.159-13.947,5.954   c-2.657-1.068-4.74-3.106-5.865-5.74C39.014,36.1,38.983,33.187,40.05,30.529z"></motion.path>
                                    <motion.path variants={icon} initial="hidden" animate="visible" transition={{default:
                                    { duration: 2, ease: "easeInOut" },fill: { duration: 2, ease: [1, 0, 0.8, 1] }}} className='logo-item emoji'
                                    d="M22.227,29.854c-0.833-0.039-1.475,0.555-1.564,1.343c-0.275,2.421-0.247,4.874,0.082,7.29   c0.107,0.785,0.816,1.356,1.591,1.306c2.692-0.168,5.211,1.391,6.267,3.865c1.057,2.474,0.437,5.368-1.543,7.201   c-0.582,0.538-0.65,1.434-0.157,2.054c1.518,1.911,3.272,3.628,5.21,5.102c0.631,0.479,1.526,0.392,2.051-0.202   c1.789-2.019,4.666-2.702,7.166-1.7c2.498,1.003,4.104,3.488,3.998,6.184c-0.031,0.792,0.554,1.474,1.342,1.564   c1.102,0.126,2.211,0.188,3.321,0.188c1.326,0,2.654-0.09,3.972-0.269c0.785-0.107,1.355-0.802,1.306-1.592   c-0.163-2.692,1.39-5.211,3.865-6.267c2.477-1.056,5.369-0.436,7.2,1.543c0.537,0.582,1.433,0.651,2.054,0.157   c1.909-1.517,3.626-3.27,5.102-5.209c0.48-0.631,0.392-1.525-0.201-2.051c-2.02-1.789-2.704-4.668-1.701-7.166   c1.003-2.498,3.48-4.102,6.185-3.999c0.83,0.03,1.474-0.555,1.564-1.343c0.275-2.421,0.247-4.874-0.082-7.291   c-0.106-0.785-0.783-1.351-1.592-1.306c-2.672,0.163-5.21-1.389-6.266-3.865c-1.057-2.475-0.437-5.368,1.543-7.2   c0.582-0.537,0.651-1.433,0.158-2.053c-1.518-1.911-3.271-3.628-5.21-5.103c-0.631-0.48-1.526-0.393-2.051,0.201   c-1.789,2.02-4.673,2.702-7.166,1.701c-2.498-1.004-4.105-3.489-3.999-6.185c0.031-0.792-0.554-1.474-1.342-1.564   c-2.418-0.275-4.87-0.248-7.291,0.081c-0.785,0.106-1.356,0.801-1.307,1.592c0.163,2.692-1.39,5.211-3.864,6.267   c-2.475,1.058-5.369,0.437-7.201-1.543c-0.536-0.581-1.432-0.65-2.054-0.157c-1.91,1.518-3.627,3.271-5.101,5.209   c-0.48,0.631-0.392,1.525,0.201,2.051c2.019,1.789,2.703,4.669,1.7,7.166C27.409,28.351,24.891,29.942,22.227,29.854z    M31.222,26.984c1.298-3.229,0.684-6.89-1.494-9.521c0.852-1.013,1.782-1.961,2.778-2.836c2.675,2.12,6.351,2.652,9.549,1.288   c3.2-1.367,5.354-4.39,5.674-7.787c1.321-0.115,2.65-0.129,3.97-0.044c0.392,3.391,2.612,6.367,5.842,7.664   c3.228,1.296,6.889,0.682,9.521-1.495c1.013,0.853,1.961,1.782,2.836,2.779c-2.12,2.675-2.654,6.349-1.288,9.548   c1.366,3.201,4.388,5.355,7.786,5.675c0.114,1.319,0.13,2.647,0.045,3.969c-3.392,0.394-6.369,2.614-7.664,5.843   c-1.297,3.229-0.683,6.89,1.495,9.52c-0.853,1.013-1.783,1.961-2.779,2.836c-2.674-2.119-6.349-2.651-9.548-1.288   c-3.2,1.367-5.355,4.39-5.675,7.787c-1.32,0.114-2.647,0.13-3.97,0.044c-0.392-3.391-2.612-6.367-5.841-7.663   c-3.233-1.301-6.892-0.684-9.521,1.494c-1.013-0.852-1.962-1.782-2.837-2.778c2.12-2.677,2.653-6.35,1.288-9.549   s-4.388-5.354-7.786-5.674c-0.114-1.32-0.13-2.648-0.045-3.97C26.95,32.431,29.926,30.212,31.222,26.984z"></motion.path>
                                </g>
                                </g>
                                <g id="SvgjsG25269" featurekey="nameRightFeature-0" transform="matrix(0.8945677393265332,0,0,0.8945677393265332,184.12560316043107,1.204871314996165)" fill="#E7816B">
                                <motion.path variants={icon} initial="hidden" animate="visible" transition={{default:
                                    { duration: 2, ease: "easeInOut" },fill: { duration: 2, ease: [1, 0, 0.8, 1] }}} className='logo-item'
                                d="M26.676000000000002 22.009 c-0.43632 0.24117 -0.88236 0.64612 -0.88236 1.8193 c0 0.91448 0.29558 1.4144 1.0547 1.7822 c0.76772 0.37195 1.6239 0.39914 1.6671 0.4002 l17.067 0.06672 c2.9656 0 7.3912 1.8316 7.3912 6.8776 s-4.1128 6.8776 -6.8776 6.8776 l-24.997 0 l0 -4.6954 l24.977 0 c0.2048 -0.0070704 0.81636 -0.08422 1.3204 -0.36305 c0.43656 -0.24144 0.88256 -0.64636 0.88256 -1.8193 c0 -0.91448 -0.29558 -1.4144 -1.0547 -1.7822 c-0.7654 -0.37094 -1.6208 -0.39894 -1.6686 -0.40024 l-17.056 -0.07586 l0 0.0091406 c-2.975 0 -7.4008 -1.8316 -7.4008 -6.8776 s4.1128 -6.8776 6.8776 -6.8776 l24.997 0 l0 4.6954 l-24.976 0 c-0.20457 0.0070704 -0.81668 0.08422 -1.321 0.36305 z M75.99100000000001 15.421 l18.353 24.38 l-5.9015 0 l-5.132 -6.7948 l-14.639 0 l-5.0572 6.7948 l-5.8354 0 z M72.19200000000001 28.311 l7.5966 0 l-3.7984 -5.0644 z M117.557 17.324 l5.8113 0 l-18.034 24.047 l-18.036 -24.047 l5.8116 0 l12.224 16.298 z M134.471 15.421 l18.353 24.38 l-5.9015 0 l-5.132 -6.7948 l-14.639 0 l-5.0572 6.7948 l-5.8354 0 z M130.67200000000003 28.311 l7.5966 0 l-3.7984 -5.0644 z M162.354 39.18232 l-4.6956 0.000039062 l0 -4.7501 l4.6954 0 l0 4.75 z M196.23800000000003 17.185 l4.6952 0 l0 22.5 l-27.179 -14.196 l0 14.511 l-4.6954 0 l0 -22.5 l27.18 14.196 l0 -14.511 z M207.61850000000004 16.95 l31.875 0 l0 4.6954 l-13.591 0 l0 18.186 l-4.6951 0 l0 -18.186 l-13.589 0 l0 -4.6954 z"></motion.path>
                                </g>
                            </svg>
                        </Link>
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/about#about">About</Link>
                            <Link className='nav-link' to="/projects">Portfolio</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
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
                            <Link to='https://www.instagram.com/savamihai/' target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} size='xl'
                                color='#E7816B' className='mx-2 pointer'/>
                             </Link>

                             <Link to='https://twitter.com/MihaiSava98' target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} size='xl'
                                color='#E7816B' className='mx-2'/>
                            </Link>

                            <Link to='https://www.linkedin.com/in/mihai-sava-517534242/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} size='xl'
                                color='#E7816B' className='ms-2'/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
