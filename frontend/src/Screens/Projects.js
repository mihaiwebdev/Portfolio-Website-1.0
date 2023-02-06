import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import UpArrow from '../Components/UpArrow'

const Projects = () => {

    const projectImages = [
        ['audiophilesm', 'Audio shopping e-commerce website', 'AUDIOPHILE',
        'https://audio-shop.vercel.app/'], 
        ['kanbansm', 'Web apllication for users to manage their tasks', 'KANBAN',
        'https://task-management.up.railway.app/'],
        ['proshopsm','Full stack electronics ecommerce website', 'PRO-SHOP',
        'https://pro-shop.up.railway.app/'], 
        ['shoppingsm','Brochure website for a shopping app', 'SHOPPING',
        'https://mihaiwebdev.github.io/Shopping-website/'],
        ['githubfindersm','Web application to find github users and see their profile', 'GITHUB FINDER',
        'https://github-searchusers.vercel.app/'],
        ['managesm','Landing page website for a business', 'MANAGE',
        'https://mihaiwebdev.github.io/Manage-Landing-Page-/']]

        useEffect(() => {

            const section = window.location.hash.substr(1);
            const targetSection = document.getElementById(section);
        
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
    
          }, []);


    return (
        <>
            <div id='projects' className="footer-cta projects">
                <motion.div
                 initial={{ opacity:0, y: 100}}
                 whileInView={{ opacity:1, y: 0}}
                 transition={{ duration:0.4, delay: 0.3 }}
                >
                    <h2 className="heading-h2">
                        Web Development
                    </h2>
                    <p className="p-font text-white">
                        I build websites that are not only beautiful but also scalable, secure
                        and easy to navigate using the latest technologies.
                    </p>
                </motion.div>

                <motion.svg initial={{ right: 400, opacity:0}}
                whileInView={{right: 0, opacity:1}}
                transition={{duration: 0.5, type:'spring', stiffness:200, dumping: 20}}
                width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(1 0 0 -1 0 584)" fill="url(#a)" fillRule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 1168 1168)" cx="730" cy="438" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="438" r="146"/><circle transform="matrix(0 1 1 0 -292 292)" cx="146" cy="438" r="146"/><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></motion.svg>
            </div>

            <svg id='leaf' className='projects-leaf' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>

            <div className="projects-grid">

                {projectImages.map((proj, idx) => (

                    <motion.div key={idx}
                     initial={{opacity: 0, y:80, scale: 0.6}}
                     whileInView={{opacity: 1, y:0, scale: 1}}
                     transition={{duration: 0.5}}
                    >
                    <Link to={proj[3]} className="project-card" target='_blank'>
                        <img className={`project-img ${proj[0]}`} 
                        src={require(`../assets/web-design/desktop/${proj[0]}.jpg`)} alt="" />
                        <div className="project-card-body">
                            <h3 className="heading-h3">{proj[2]}</h3>

                            <p className="p-font">{proj[1]}</p>
                        </div>
                    </Link>
                    </motion.div>
                ))}

            </div>

            <div className="projects-other">

                <motion.div
                 initial={{rotate: 90, scale: 0}}
                 whileInView={{ rotate: 0, scale: 1 }}
                 whileHover={{ scale: 0.99 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
                 className='section-1-card home-certificates'
                >
                    <Link to='/about#certificates' >
                        <h2 className='heading-h2'>CERTIFICATES</h2>
                        <p>VIEW CERTIFICATES
                            <svg className='ms-3' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </p>
                    </Link>
                </motion.div>
        
                <motion.div
                 initial={{rotate: 90, scale: 0}}
                 whileInView={{ rotate: 0, scale: 1 }}
                 whileHover={{ scale: 0.99 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
                 className='section-1-card home-technologies'
                >
                    <Link to='/about#tech'>
                        <h2 className='heading-h2'>TECH STACK</h2>
                        <p>VIEW TECHNOLOGIES
                            <svg className='ms-3' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                        </p>
                    </Link>
                </motion.div>
            </div>

            <UpArrow/>

        </>
    )
}

export default Projects
