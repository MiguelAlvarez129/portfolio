import React, {forwardRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimatedButton, HelloDiv, TextShadow } from '../../styles';
import sun from '../../assets/img/sun.svg'
import Wave from 'react-wavify'
import {Box,Grid, GridItem} from '@chakra-ui/react'
import bg from '../../assets/img/bg.svg'
import zigzag from '../../assets/img/zig-zag.svg'


const Welcome = forwardRef((props,ref) =>{
  const Text = (
    <HelloDiv>
        <h1>
          Hello!,
        </h1>
        <h2>
          My name is Miguel, <br /> 
          I'm a web developer and this is my portfolio <b> ;) </b>
        </h2>

        <a href="#second-div"> 
          <AnimatedButton size='lg' color='white'  colorScheme='blackAlpha' border="white 2px solid" background="#000331">
            Find out more
          </AnimatedButton>
        </a>
      </HelloDiv>
  )
  return (
    <div  id="first-div" ref={ref} style={{backgroundImage:`url(${bg})`}} >
    <ParallaxBanner style={{height:'100vh'}}  ref={ref}  layers={[
      {
       speed:-50,children:(
         <HelloDiv>
           <h1>
            <TextShadow content="Hello !">
              Hello !,
            </TextShadow>
           </h1> 
           <h1>
             My name is Miguel Alvarez, <br /> 
             I'm a web developer
           </h1>
           <a href="#second-div"> 
             <AnimatedButton size='lg'  colorScheme='red' border="white 2px solid" >
               Find out more
             </AnimatedButton>
           </a>
         </HelloDiv>
       ),
     },
    ]}>  
    </ParallaxBanner>
    </div>
  )
})

export default Welcome;