import React from 'react'
import { Box, Grid, GridItem, Center, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import blueGrid from '../../assets/img/blue-grid.svg'
const Intro = () => {

  const variants = {
    visible:{ 
      x:['-33%','0%','-33%'],
      textShadow:['0 0px 0px rgba(255,255,255,255)','0 15px 40px rgb(255,255,255)','0 0px 0px rgba(0,0,0,255)'],
      transition:{
        
 
      }
    },
  
  }
  const parent = {
    visible:{
      transition:{staggerChildren:.5, delayChildren:.5, repeat:'Infinity',ease:'easeInOut',duration: 3}
    }
  }

  const letter = 'Miguel'
  return (
    <Center h={'100vh'} bg='blue'>

     <motion.div  variants={parent} animate={'visible'} >
        {letter.split('').map((e,i)=>(
          <motion.div variants={variants} style={{color:'#000331',fontSize:'10rem', textShadow:'0 15px 40px rgb(0,0,0)',fontWeight:"bolder",display:'inline-block'}}> 
            {e}
          </motion.div>
        ))}
      </motion.div>

      </Center>
      

  )
}

export default Intro