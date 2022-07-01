import React, {forwardRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimatedButton, HelloDiv } from '../../styles';
import sun from '../../assets/img/sun.svg'
import Wave from 'react-wavify'


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
    <div  id="first-div" ref={ref} style={{background:"#000331"}}>
    <ParallaxBanner style={{height:'100vh'}}  layers={[
      {image:sun,speed:-40,style:{backgroundPosition: 'right center', backgroundSize: '700px',backgroundRepeat:'no-repeat'}},
      {speed:20,style:{height:"300px",background:"#000331",top:"100%"}},
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
     } ,
          {speed:0,style:{top:'60%'},children:(
            <Wave
            fill="#c62368"
            paused={false}
            opacity="1"
            options={{
              height: 20,
              amplitude: 45,
              speed: 0.2,
              points: 4,
            }}
          />
          )},
       {speed:10,style:{top:'70%'},children:(
        <Wave
        fill="#84006d"
        paused={false}
        opacity="1"
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 6,
        }}
      />
      )},
      {speed:20,style:{top:'80%'},children:(
        <Wave
        fill="#5d006b"
        paused={false}
        opacity="1"
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.2,
          points: 4,
        }}
      />
      )},
      {speed:20,style:{top:'85%'},children:(
        <Wave
        fill="#001843"
        paused={false}
        opacity="1"
        options={{
          height: 40,
          amplitude: 20,
          speed: 0.2,
          points: 5,
        }}
      />
      )},
      // {image:waves,speed:10,style:{backgroundPosition: 'center bottom', backgroundSize: 'cover',backgroundRepeat:'no-repeat'}},
  
    ]}>  
    </ParallaxBanner>

    </div>
  )
})

export default Welcome;