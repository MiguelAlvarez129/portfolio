import React from 'react'
import { Box, Grid, GridItem, Center, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Intro = () => {
  return (
    <Center h={'100vh'}>
        <Box>
            <Grid column={1} position={'relative'} top={-100}>
            <GridItem colStart={1} rowStart={1}> 
            <motion.div animate={{x:[0,0,0,0,0,0,20,0,-20,0],y:[0,0,0,0,0,20,0,20,0,0,],opacity:[0,1,0,1,0,1,1,1,1,1,1,0],}} transition={{duration: 5, ease:'easeInOut'}}>
                <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'} color={'#ce2858c2'} position={'relative'} zIndex={0}>
                Miguel Alvarez
                </Heading>
            </motion.div>
            </GridItem>
            <GridItem colStart={1} rowStart={1}>
            <motion.div animate={{x:[0,0,0,0,0,20,0,-20,0,-20],y:[0,0,0,0,0,0,20,0,-20,5],opacity:[0,1,0,1,0,1,1,1,1,1,1,0],}} transition={{duration: 5, ease:'easeInOut'}}>
                <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'}  color={'#ffffffc2'} position={'relative'} zIndex={10} left={'clamp(0.8rem,0.8vw,1rem);'} top={'clamp(0.2rem,0.2vw,0.4rem)'}>
                Miguel Alvarez
                </Heading>
            </motion.div>
            </GridItem>
            </Grid>
        </Box>
    </Center>
  )
}

export default Intro