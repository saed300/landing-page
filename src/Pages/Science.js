import React from 'react'
// import {motion, useAnimation} from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
import Mountain from '../Images/mountain.jpeg'

const Science = () => {

//     // Intersection observer 
//     const {ref, inView, entry} = useInView({
//       root: null,
//       threshold: 1,
//       // triggerOnce: 'true'
//     })
  
//     //Framer
//     const control = useAnimation();
  
//     useEffect(() => {
//       if(inView) {
//         control.start({scale: 1.2})
//       }
//       if(!inView) {
//         control.start({scale: 1})
//       }
//     }, [inView, control])
  
    

  return (
    <div className='section-3'>
      <div className='grid-container'>
        <img src={Mountain} alt='A Mountain' className='image' />
        <div className='science-text-container'>
          <h1 className='section-2-3-heading'>Innovation and Experience design agency</h1>
          <p className='section-2-3-paragraph'>Apps is an innovation and experience design agency</p>
          <p className='section-2-3-paragraph'>We exist to create a better future with you</p>
          <div className='btn-align'><button className='btn btn-blue'>Products</button></div>
        </div>
      </div>
    </div>
  )
}

export default Science
