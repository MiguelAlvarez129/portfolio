import React, {forwardRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimatedButton, HelloDiv, TextShadow } from '../../styles';
import sun from '../../assets/img/sun.svg'
import Wave from 'react-wavify'
import {VStack, Text, Grid, GridItem, Heading} from '@chakra-ui/react'
import bg from '../../assets/img/bg.svg'
import zigzag from '../../assets/img/zig-zag.svg'


const Welcome = forwardRef((props,ref) =>{

  return (
    <div  id="first-div" ref={ref} style={{bg:'#000331',height:'100vh'}} >
       <VStack justify={'center'} align={'start'} h="100vh" pl={'12vw'}>
          <Grid column={1}>
            <GridItem colStart={1} rowStart={1}> 
              <Heading fontSize={'clamp(3rem,6vw,7rem)'} color={'white'} position={'relative'} zIndex={6}>
              Hello! 
              </Heading>
            </GridItem>
            <GridItem colStart={1} rowStart={1}>
              <Heading fontSize={'clamp(3rem,6vw,7rem)'} backgroundClip={'text'} bgImage={`url(${zigzag})`} color={'transparent'} position={'relative'} zIndex={5} left={'clamp(.25rem,.5vw,.5rem)'} top={'clamp(0.1rem,0.1vw,0.2rem)'}>
              Hello! 
              </Heading>
            </GridItem>
          </Grid>
          
          <Heading fontSize={'clamp(2rem,3vw,3rem)'} color={'#70adff'}>
          My name is Miguel Alvarez
          </Heading>
          <Heading fontSize={'clamp(2rem,3vw,3rem)'} color={'#1191ff'} >
            I'm a web developer
          </Heading>
          
        </VStack>
    </div>
  )
})

export default Welcome;