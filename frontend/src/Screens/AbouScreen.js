import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faMedal } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SkillsCarousel from '../Components/SkillsCarousel';
import UpArrow from '../Components/UpArrow'


const AbouScreen = () => {


    useEffect(() => {

        const section = window.location.hash.substr(8);
        const targetSection = document.getElementById(section);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

      }, []);
    

    return (
        <>

            <div id='about' className="about-hero">
                <div className="about-info">
                    <div>
                        <h1 className="heading-h1 text-start text-white">About Me</h1>
                        <p className="p-font text-white">
                            I'm an experienced and motivated Website Developer that prioritize your success. Graduate of Harvard University CS50's Web Programming and Computer Science courses.
                            I develop websites that are not only beautiful but also scalable, secure and easy to navigate
                            using the latest technologies.  
                        </p>
                    </div>
                  
                    <motion.svg initial={{ bottom: 400, opacity:0}}
                    animate={{bottom: 0, opacity:1}}
                    transition={{duration: 0.5, type:'spring', stiffness:200, dumping: 20}}
                     width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(1 0 0 -1 0 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309"/></motion.svg>
                    
                </div>

                <motion.div className="about-img"
                 initial={{x: 200, opacity: 0}}
                 whileInView={{x:0 ,opacity: 1}}
                 transition={{ duration: 0.7}}
                >
                </motion.div>
            </div>    

            <svg id='about-leaf' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>

        
            <motion.div className="about-card"
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration: 0.3}}
            >
                <motion.div className="about-card-img"
                 initial={{x: -200, opacity: 0}}
                 whileInView={{x:0 ,opacity: 1}}
                 transition={{ duration: 0.7}}
                >
                </motion.div>

                <div className="about-card-info">
                    <div>
                        <h2 className="heading-h2 text-start">Trusted talent</h2>
                        <p className="p-font">
                            I'm a strategist and analytical person with problem solving skills,
                            dedicated to delivering high-quality websites that meet your goals
                            and exceed your expectations. Constantly updating my skills in 
                            a myriad of platforms.

                            <span className='d-block mt-4'>
                            Whether you're looking for a simple brochure website or a complex
                            e-commerce platform, my experience can bring your vision to life.
                            Let me help you reach your target audience and achieve your business goals.
                            </span>
                        </p>
                    </div>
    
                </div>
                <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle transform="matrix(1 0 0 -1 0 292)" cx="146" cy="146" r="146"/><circle transform="matrix(0 1 1 0 292 -292)" cx="438" cy="146" r="146"/></g></svg>
            </motion.div>


            <h2 id='certificates' className='heading-h2 certificate-title'>
                <motion.div initial={{opacit: 0, y:80, scale: 0}}
                 whileInView={{opacity: 1, y:0, scale: 1}}
                 transition={{duration: 0.5}}
                >
                    <FontAwesomeIcon icon={faAward}
                    color='#E7816B' className='me-3 opacity-1'/> 
                 </motion.div>

                <motion.span initial={{opacity: 0}}
                whileInView={{ opacity:1}}                
                transition={{duration: 0.4, delay:0.5}}
                >
                    Certificates 
                </motion.span>

                <motion.div initial={{opacit: 0, y:-80, scale: 0}}
                 whileInView={{opacity: 1, y:0, scale: 1}}
                 transition={{duration: 0.5}}
                >
                <FontAwesomeIcon icon={faMedal}
                 color='#E7816B' className='ms-2'/> 
                </motion.div>
            </h2>

            
            <div className="certificates">

                <motion.div className="d-flex flex-column align-items-center"
                 initial={{y:80, scale: 0}}
                 whileInView={{y:0, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
                >
                    <div className='harvard-img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    </div>
                    
                    <Link to='https://courses.edx.org/certificates/fff2d731b74249df92e7fdc5e75c4565' target='_blank'  className='body-font-bold certificate-link'>Harvard CS50x - <span> Computer Science </span></Link>

                </motion.div>

                <motion.div className="d-flex flex-column align-items-center"
                 initial={{ y: 80, scale: 0}}
                 whileInView={{ y:0, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
                >
                    <div className='fcc-img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    </div>

                    <Link className='body-font-bold certificate-link fcc' target='_blank' to='https://www.freecodecamp.org/certification/mihaiwebdev/javascript-algorithms-and-data-structures'>FCC - JavaScript Algorithms <span> and Data Strctures </span></Link>
                </motion.div>

                <motion.div className="d-flex flex-column align-items-center"
                 initial={{ y: 80, scale: 0}}
                 whileInView={{ y:0, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
                >
                    <div className='harvard-img'>
                        <svg className='harvard-up' xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                    </div>

                    <Link className='body-font-bold certificate-link' to='/' target='_blank'>Harvard CS50w - <span> Web Programming </span></Link>
                </motion.div>

            </div>

            <svg id='about-leaf-second' width="620" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>


            <div className="about-card second">

                <div className="about-card-info">
                    <div>
                        <h2 className="heading-h2 text-start">The real deal</h2>
                        <p className="p-font">
                            As a strategic partner in my clients businesses, I am ready to take on any
                            challenge as my own. Solving real problems require empathy and collaboration,
                            you can expect an efficient and hassle-free website development process that meets your
                            unique needs and budget.

                            <span className='d-block mt-4'>
                            I understand the importance of having a strong online presence in today's digital
                            world. That's why I offer end-to-end web development solutions that help
                            businesses like yours succeed online.
                            </span>
                        </p>
                    </div>
                </div>

                <motion.div className="about-card-img"
                 initial={{x: 150, opacity: 0}}
                 whileInView={{x:0 ,opacity: 1}}
                 transition={{ duration: 0.7}}
                >
                </motion.div>

                <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle transform="matrix(1 0 0 -1 0 292)" cx="146" cy="146" r="146"/><circle transform="matrix(0 1 1 0 292 -292)" cx="438" cy="146" r="146"/></g></svg>
            </div>

            <SkillsCarousel />

            <UpArrow/>
        </>
    )
}

export default AbouScreen
