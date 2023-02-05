import { motion } from 'framer-motion'

const Ilustrations = () => {
    return (
        <section id="section-2" className='text-center d-flex position-relative justify-content-center'>
            <motion.div className='d-flex flex-column mx-3 align-items-center'
             initial={{scale: 0, opacity:0, y: 70}}
             whileInView={{scale: 1, opacity:1, y:0}}
             transition={{duration: 0.6, type: 'spring'}}
            >
                <div className='passionate-img mb-4'>
                    <svg className='small-circle' xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                </div>
                <div className="ilustration-text">
                    <h3 className='heading-h3 mb-4'>PASSIONATE</h3>
                    <p className='p-font'>Each project starts with an in-depth discussion to ensure we only create products that serve a purpose. I merge design and technology into exciting new solutions.</p>
                </div>
            </motion.div>

            <motion.div className='d-flex flex-column mx-3 align-items-center'
             initial={{scale: 0, opacity:0, y: 70}}
             whileInView={{scale: 1, opacity:1, y:0}}
             transition={{duration: 0.6, type: 'spring'}}
            >
                <div className='resourceful-img mb-4'>
                    <svg className='small-circle resourceful' xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                </div>
                <div className="ilustration-text">
                    <h3 className='heading-h3 mb-4'>RESOURCEFUL</h3>
                    <p className='p-font'>Everything that I do has a strategic purpose. I use an agile approach in all of my projects and value customer collaboration. It guarantees superior results that fulfill my clients needs.</p>
                </div>
            </motion.div>

            <motion.div className='d-flex flex-column mx-3 align-items-center'
             initial={{scale: 0, opacity:0, y: 70}}
             whileInView={{scale: 1, opacity:1, y:0}}
             transition={{duration: 0.6, type: 'spring'}} 
            >
                <div className='friendly-img mb-4'>
                    <svg className='small-circle friendly' xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
                </div>
                <div className="ilustration-text">
                    <h3 className='heading-h3 mb-4'>FRIENDLY</h3>
                    <p className='p-font'> I am an enthusiastic folk who know how to put people first. My success depends on my customers, and I strive to give them the best experience that I can provide.</p>
                </div>
            </motion.div>

        </section>
    )
}

export default Ilustrations
