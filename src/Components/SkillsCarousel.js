import { useState, useEffect, useRef } from 'react'


const SkillsCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const [items, setItems] = useState(['htmlnewp.png', 'cssnewp.png', 'jsnewp1.png',
      'react.png', 'redux.jpg', 'django.jpg', 'postgres.jpg',
        'bootstrap.png', 'tailwindcss.png', 'sassgood.png', 'github.png', 'git.png'])

  // const carouselRef = useRef()

  useEffect(() => {

    // const interval = setInterval(() => {

    //   if (currentIndex === items.length -1) {
    //     setCurrentIndex(0)
    //     carouselRef.current.scrollLeft = 0;
    //   } else {
    //     setCurrentIndex((currentIndex + 1) % items.length)
    //     carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
    //   }
    // }, 1000)
    
    // console.log(carouselRef.current);

    // return () => clearInterval(interval)

  }, [currentIndex, items.length])
    
    
    return (

      <div id='tech' className='skill-carousel'>
        
        {items.map((logo, idx) => {
          
          return (
            <img id='logo' key={idx} className={logo}   
            src={require(`../assets/about/techs/${logo}`)} alt="" />
          )
        })}
  
      </div>
        
    );

}

export default SkillsCarousel
