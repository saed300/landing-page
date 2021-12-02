import React from 'react'
import Decor from '../Images/project-image.jpeg'
import {motion, useViewportScroll, useTransform, useAnimation} from 'framer-motion'

const Home = () => {

   //useViewportscroll hook
  const {scrollY, scrollYProgress} = useViewportScroll()

  const parallaxY1 = useTransform(scrollY, [0, 300], [0, 150])
  const parallaxY1COLOR = useTransform(scrollYProgress, [0, 0.3], ['#000', '#fff'])



  return (
    <div className='intro'>
      <div className='intro-container'>
        <img src={Decor} alt='black and white horses in a field' className='image' />
        <motion.h3 className='main-small-heading' style={{y: parallaxY1, color: parallaxY1COLOR}}>APPS unveils new studio</motion.h3>
        <motion.h1 className='main-large-heading' style={{y: parallaxY1, color: parallaxY1COLOR}}>Lagom</motion.h1>
      </div>
    </div>
  )
}

export default Home
