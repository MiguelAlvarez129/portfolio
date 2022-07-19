import React, {forwardRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimatedButton, WaveDiv} from '../../styles';
import sun from '../../assets/img/sun.svg'
import Wave from 'react-wavify'
import {VStack, Spacer , Grid, GridItem, Heading} from '@chakra-ui/react'
import bg from '../../assets/img/bg.svg'
import zigzag from '../../assets/img/zig-zag.svg'


const Welcome = forwardRef((props,ref) =>{

  return (
    <WaveDiv id="first-div" ref={ref} reverse={false} >
       <VStack justify={'center'} align={'start'} h="100vh" pl={'12vw'}>
          <Grid column={1}>
            <GridItem colStart={1} rowStart={1}> 
              <Heading fontSize={'clamp(4rem,6vw,7rem)'} color={'white'} position={'relative'} zIndex={6}>
              Hello!
              </Heading>
            </GridItem>
            <GridItem colStart={1} rowStart={1}>
              <Heading fontSize={'clamp(4rem,6vw,7rem)'} backgroundClip={'text'} bgImage={`url(${zigzag})`} color={'transparent'} position={'relative'} zIndex={5} left={'clamp(.25rem,.5vw,.5rem)'} top={'clamp(0.1rem,0.1vw,0.2rem)'}>
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
          <a href="#second-div">
            <AnimatedButton  size='lg' color='white' colorScheme='blackAlpha' border="white 2px solid" background="#000331">
              Find out more!
            </AnimatedButton>
          </a>
 
        </VStack>
    </WaveDiv>
  )
})

export default Welcome;