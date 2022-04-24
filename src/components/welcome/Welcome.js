import React, {forwardRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimatedButton, HelloDiv } from '../../styles';
import polygon from '../../assets/img/polygon.svg'


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
    <div  id="first-div" ref={ref} >
    <ParallaxBanner style={{height:'100vh'}}  layers={[
      {image:polygon,speed:50,style:{backgroundPosition: 'center bottom',
  backgroundSize: 'cover',backgroundRepeat:'no-repeat'}},
  {
    speed:-20,children:(
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
  }  
    ]}>  
      {/* {array.map((props,index) => <AnimatedCircle key={index} {...props}/>)} */}
      {/* <WelcomeDiv/> */}
    </ParallaxBanner>

    </div>
  )
})

export default Welcome;