import { useEffect } from 'react'
import { motion } from 'framer-motion'


const Services = () => {

    const serviceInfo = [
        {'name': 'Customized Design',
         'description': 'I will work with you to create a unique and visually appealing design that reflects your brand identity and appeals to your target audience.',
         'png': 'design'

        },
        {'name': 'Responsive and mobile-friendly',
         'description': ' Your website will be optimized for all devices, ensuring an excellent user experience on desktop, tablet, and mobile.',
         'png': 'mobile-friendly'    
        },
        {'name': ' Content Management System (CMS)',
         'description': 'I can integrate a CMS that allows you to manage the content of your website easily and efficiently.',
         'png': 'Website-builder'    
        },
        {'name': 'E-commerce functionality',
         'description': 'If you are looking to sell products or services online, I can add e-commerce functionality to your website to make the process seamless for both you and your customers.',
         'png': 'ecommerce'    
        },
        {'name': 'Search Engine Optimization (SEO)',
         'description': ' I will ensure that your website is optimized for search engines, helping you to improve your search engine rankings and reach more potential customers.',
         'png': 'seo'    
        },
        {'name': 'Custom Domain and Website Hosting',
         'description': 'I will set up a custom domain name for your website url so the users can access it more easly, and also hosting it online so everyone can navigate it',
         'png': 'Domain-registration'    
        },
    ]

    useEffect(() => {

        const section = window.location.hash.substr(11);
        const targetSection = document.getElementById(section);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        }, []);


    return (
        <>  
            <div id='services' className="footer-cta projects">
                <motion.div
                initial={{ opacity:0, y: 100}}
                whileInView={{ opacity:1, y: 0}}
                transition={{ duration:0.4, delay: 0.3 }}
                >
                    <h2 className="heading-h2">
                    Services
                    </h2>
                    <p className="p-font text-white">
                        I understand the importance of having a strong online presence in today's digital world. That's why I offer end-to-end solutions that help business like yours succeed online.
                    </p>
                </motion.div>

                <motion.svg initial={{ right: 400, opacity:0}}
                whileInView={{right: 0, opacity:1}}
                transition={{duration: 0.5, type:'spring', stiffness:200, dumping: 20}}
                width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(1 0 0 -1 0 584)" fill="url(#a)" fillRule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 1168 1168)" cx="730" cy="438" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="438" r="146"/><circle transform="matrix(0 1 1 0 -292 292)" cx="146" cy="438" r="146"/><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></motion.svg>
            </div>

            <svg id='leaf' className='services-leaf' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>

            <div className="services">

                {serviceInfo.map((service, index) => (

                    
                    <motion.div key={index} initial={index % 2 === 0 ? {opacity: 0, x:-270} 
                        : {opacity: 0, x: 270}}
                     whileInView={{opacity:1, x:0}}
                     transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                     className={index % 2 === 0 ? 'service-box' : 'service-box reverse'}>
                        <div>
                            <h2 className='body-font-bold'>
                            {service.name}:
                            </h2>
                            <p className='p-font'>{service.description}</p>
                        </div>

                        <img className='service-img' width={500} src={require(`../assets/services/${service.png}.png`)} alt="" />
                        
                    </motion.div>

                ))}
                
            </div>

            <svg className='services-leaf-bottom' id='leaf-rotate' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>
        </>
    )
}

export default Services
