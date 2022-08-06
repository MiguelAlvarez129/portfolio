import React from 'react'
import {Center} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Intro = () => {
  const color1 = "#002468"
  const color2 = "#000331"

  const variants = {
    visible:{ 
      x:['-33%','0%','33%'],
      color: [color2, '#ce2858',color2],

      textShadow:['0 0px 0px rgba(0,0,0,0)','0 15px 40px rgba(0,0,0,255)','0 0px 0px rgba(0,0,0,0)'],
      transition:{
        duration: .8, 
        ease:'linear',
        repeat: 1,
        repeatDelay:1.2,
      }
    },
  }
  const parent = {
    visible:{
      transition:{staggerChildren:.1,}
    }
  }
 
  const letter = 'Miguel Alvarez'
  return (
    <Center h={'100vh'} bg={color2}>
      <motion.div  variants={parent} animate={'visible'} > 
        {letter.split('').map((e)=>(
          <motion.div variants={variants} style={{fontSize:'clamp(1rem,5vw,10rem)',letterSpacing:'1rem' ,fontWeight:"bolder",display:'inline-block'}}> 
          {e} 
          </motion.div>
        ))}
      </motion.div>
    </Center>
      

  )
}

export default Intro