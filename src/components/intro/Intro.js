import React from 'react'
import { Box, Grid, GridItem, Center, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import blueGrid from '../../assets/img/blue-grid.svg'
const Intro = () => {
  return (
    <Center h={'100vh'}>

          <motion.div animate={{backgroundColor:['#ce285800','#ce2858'],height:[150,150,150],width:[1000,150,150],rotate:[0,0,360],borderRadius:['5px','5px','50%']}} transition={{delay:2,duration:2}} >
            <Grid column={1} position={'relative'} top={[0,-100]} maxW={['fit-content','fit-content','none']}>
              <GridItem colStart={1} rowStart={1}> 
              <motion.div animate={{opacity:[0,1,0,1,0,1,0]}} transition={{duration: 2, ease:'easeInOut'}}>
                  <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'} color={'#ce2858c2'} position={'relative'} zIndex={0}>
                  Miguel Alvarez
                  </Heading>
              </motion.div>
              </GridItem>
              <GridItem colStart={1} rowStart={1}>
              <motion.div animate={{opacity:[0,1,0,1,0,1,0]}} transition={{duration: 2, ease:'easeInOut'}}>
                  <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'}  color={'#ffffffc2'} position={'relative'} zIndex={10} left={'clamp(0.8rem,0.8vw,1rem);'} top={'clamp(0.2rem,0.2vw,0.4rem)'}>
                  Miguel Alvarez
                </Heading>
              </motion.div>
              </GridItem>
            </Grid>
            <Box>
            <Heading  fontSize={'clamp(4rem,6vw,7rem)'} backgroundClip={'text'} bgImage={`url(${blueGrid})`} color={'transparent'} position={'absolute'} top={'75px'}>
              M
              </Heading>
            </Box>
          </motion.div>
 
    </Center>
  )
}

export default Intro