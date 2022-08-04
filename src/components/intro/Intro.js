import React from 'react'
import { Box, Grid, GridItem, Center, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import blueGrid from '../../assets/img/blue-grid.svg'
const Intro = () => {
  const color1 = "#002468"
  const color2 = "#000331"
  //#ce2858" 
  const variants = {
    visible:{ 
      x:['-30%','0%','30%'],
      color: [color1, color1,color1],

      textShadow:['0 0px 0px rgba(0,0,0,0)','0 15px 40px rgba(0,0,0,255)','0 0px 0px rgba(0,0,0,0)'],
      transition:{
        duration: .9, 
        ease:'linear',
        repeat: 2,
        repeatDelay:1,

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
    <Center h={'100vh'} bg={color1}>
      <motion.div  variants={parent} animate={'visible'} >
        {letter.split('').map((e)=>(
          <motion.div variants={variants} style={{fontSize:'clamp(3rem,10vw,10rem)',letterSpacing:'1rem' , textShadow:'0 15px 40px rgb(0,0,0)',fontWeight:"bolder",display:'inline-block'}}> 
          {e} 
          </motion.div>
        ))}
      </motion.div>
    </Center>
      

  )
}

export default Intro