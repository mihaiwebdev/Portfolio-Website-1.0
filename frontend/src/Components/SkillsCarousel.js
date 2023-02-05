import { useState, useEffect } from 'react'


const SkillsCarousel = () => {

  const [xPos, setXPos] = useState(-1)

  const [logos, setLogos] = useState([['htmlnewp.png', 80], ['cssnewp.png', 160], ['jsnewp1.png', 240],
      ['react.png', 320], ['redux.jpg', 400], ['django.jpg', 480], ['postgres.jpg', 560],
       ['github.png', 640], ['git.png', 720], ['sassgood.png', 800],  ['bootstrap.png', 880],
       ['tailwindcss.png', 960]])


  useEffect(() => {

    const interval = setInterval(() => {

      setXPos(prevState => { 
        let nextXPos = prevState - 1
        
        if (nextXPos % 80 === 0) {

          setLogos(prevLogos => {
            
            return [...prevLogos.filter(logo => logo !== prevLogos[0]), 
                    [prevLogos[0][0], prevLogos[prevLogos.length -1][1]  + 80]
            ]
          })

        } 

        return nextXPos
      })
    }, 25)  

  
    return () => clearInterval(interval);

  }, [logos])

 

  return (

    <div id='tech' className='skill-carousel'>

      {logos.map((logo, idx) => {
  
        return (
          <img id='logo' key={idx} className={logo[0].split('.')[0]}   
          src={require(`../assets/about/techs/${logo[0]}`)} alt=""
            style={{ left: xPos + logo[1] -80 }}/>
        )
      })}

    </div>
      
  );

}

export default SkillsCarousel
