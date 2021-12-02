import React, {useEffect} from 'react'
import {motion, useViewportScroll, useTransform, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const Innovation = () => {



  // Intersection observer 
  const {ref, inView, entry} = useInView({
    root: null,
    // rootMargin: '100px',
    threshold: 1,
    // triggerOnce: 'true'
  })

  //Framer
  const control = useAnimation();

  useEffect(() => {
    if(inView) {
      control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: [0.23, 0.43, 0.13, 0.96]
        }
      })
    }
    if(!inView) {
      control.start({
        opacity: 0,
        y: 50
      })
    }
  }, [inView, control])

  



  return (
    <div className='section-2'>
      <motion.div className='section-2-container' ref={ref} animate={control}>
        <h1 className='section-2-3-heading'>Innovation and Experience design agency</h1>
        <p className='section-2-3-paragraph'>Apps is an innovation and experience design agency</p>
        <p className='section-2-3-paragraph'>We exist to create a better future with you</p>
        <div className='btn-align'><button className='btn btn-blue'>Products</button></div>
      </motion.div>
    </div>
  )
}

export default Innovation
