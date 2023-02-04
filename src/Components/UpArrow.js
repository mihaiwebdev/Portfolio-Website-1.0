import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const UpArrow = () => {

    const [showBtn, setShowBtn] = useState(false)


    useEffect(() => {

        document.addEventListener('scroll', () => {

            if (window.pageYOffset >= 1000) {
                setShowBtn(true)
    
            } else {
                setShowBtn(false)
            }

        })
        
    }, [setShowBtn, showBtn])
 

    return (
        <div className={showBtn ? 'up-arrow active' : 'up-arrow'}
         onClick={() => window.scrollTo(0,0)}>
            <FontAwesomeIcon icon={faChevronUp} />
        </div>
    )
}

export default UpArrow
