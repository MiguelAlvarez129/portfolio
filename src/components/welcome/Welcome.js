import React, {forwardRef} from 'react'
import { AnimatedButton, WaveDiv} from '../../styles';
import {VStack, Grid, GridItem, Heading} from '@chakra-ui/react'
import bg from '../../assets/img/bg.svg'
import {motion} from 'framer-motion'
import zigzag from '../../assets/img/zig-zag.svg'
import wave from '../../assets/img/wave2.svg'
import waveSmall from '../../assets/img/wave-small.svg'


const Welcome = forwardRef((props,ref) =>{
  
  return (
    <WaveDiv id="welcome" ref={ref} svg={wave} smallSvg={waveSmall} >
       <VStack justify={'center'} align={'start'} h="100vh" pl={'12vw'}>
       <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'welcome' &&  {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
          <Grid column={1}>
            <GridItem colStart={1} rowStart={1}> 
              <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'} color={'white'} position={'relative'} zIndex={6}>
              Hello!
              </Heading>
            </GridItem>
            <GridItem colStart={1} rowStart={1}>
              <Heading letterSpacing={'5px'} fontSize={'clamp(4rem,6vw,7rem)'} backgroundClip={'text'} bgImage={`url(${zigzag})`} color={'transparent'} position={'relative'} zIndex={5} left={'clamp(0.5rem,0.7vw,1rem);'} top={'clamp(0.1rem,0.1vw,0.2rem)'}>
              Hello! 
              </Heading>
            </GridItem>
          </Grid>
          
          <Heading fontSize={'clamp(2rem,4vw,5rem)'} color={'#add0ff96'}>
          My name is Miguel Alvarez,
          </Heading>
          <Heading fontSize={'clamp(2rem,4vw,5rem)'} color={'#4ba3ef99'} >
            I'm a web developer.
          </Heading>
          <a href="#about">
            <AnimatedButton  size='lg' color='white' colorScheme='blackAlpha' border="white 2px solid" >
              Find out more!
            </AnimatedButton>
          </a>
  
        </motion.div>
        </VStack>
    </WaveDiv>
  )
})

export default Welcome;