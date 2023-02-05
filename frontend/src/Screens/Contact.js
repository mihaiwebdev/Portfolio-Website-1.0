import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')


    useEffect(() => {

        const section = window.location.hash.substr(1);
        const targetSection = document.getElementById(section);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

      }, []);


      const handleSubmit = async (e) => {
        e.preventDefault()

        if (name.length > 1 && email.length > 3 && text.length > 0) {

            try {
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }

                const formData = {
                    'name': name,
                    'email': email,
                    'text': text
                }
    
                const { data } = await axios.post('/contact',formData, config)
    
                setName('')
                setEmail('')
                setText('')
    
                toast.success(data.message)
                
            } catch (error) {
                toast.error(error.message)
            }
            
        } else {
            toast.error('Please fill in all fields')
        } 
        

      }

    return (
        <>
            <ToastContainer />
            <div id='contact' className='contact'>
                <motion.div className="contact-text"
                 initial={{ opacity: 0, x: -200}}
                 whileInView={{ opacity:1, x: 0}}
                 transition={{ duration: 0.7}}
                >
                    <h1 className='heading-h1'>
                        Contact Me
                    </h1>
                    <p className='p-font text-white'>
                        Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line. 
                    </p>
                </motion.div>
                
                <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309"/></svg>
                
                <motion.form onSubmit={handleSubmit} className="contact-form"
                  initial={{ opacity: 0, x: 200}}
                  whileInView={{ opacity:1, x: 0}}
                  transition={{ duration: 0.7}}
                >
                    <input type="text" placeholder="Name" value={name}
                    onChange={(e) => setName(e.target.value)} required/>
                    <input type="email" placeholder="Email Address" value={email} 
                     onChange={(e) => setEmail(e.target.value)} required/>
                    <textarea rows={4} placeholder="Your message"
                     value={text} onChange={(e) => setText(e.target.value)} />
                    
                    <button type="submit" className='btn-white'>Submit</button>
                    
                </motion.form>

            </div>

            <svg id='leaf' className='contact-leaf' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502"/></svg>
        </>
    )
}

export default Contact
