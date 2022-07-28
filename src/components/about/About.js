import React, {forwardRef} from 'react'
import {Text, Heading, VStack, SimpleGrid, GridItem, Divider} from '@chakra-ui/react'
import {BsCircle, BsFillCircleFill} from 'react-icons/bs'
import { WaveDiv } from '../../styles'
import waveReverse from '../../assets/img/wave-reverse.svg'
import waveSmallReverse from '../../assets/img/wave-small-reverse.svg'
import {motion} from 'framer-motion'
const About = forwardRef((props,ref) => {
  return (
  <WaveDiv svg={waveReverse} smallSvg={waveSmallReverse} reverse={true}  ref={ref} id="about">
     <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'about' &&  {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
        <VStack  p={{base:'5px 10px',sm:'100px 10vw'}} m={'auto'} alignItems={'center'} color={'#c6cfff'} justifyContent={'center'} minH={'100vh'} >
          {/* <Divider borderColor={'#add0ff96'} w='80vw' /> */}
          <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
            About me
          </Heading>  
          <br />
          <Text fontSize={"clamp(1rem,1vw,1.5rem)"} >
            Hi! my name is Miguel Alvarez, i'm a systems engineer currently working as a web developer. 
            I began in the world of web dev back in 2018 with freecodecamp.org where i learned the basics of 
            HTML, CSS, Javascript and a bit of React. Later i decided to take my learning into a more self-taught path
            and began learning React and ExpressJS on my own. 
            Here you can see the technlogies i have worked with:
          </Text> 
          <br />
          <Text fontSize={"clamp(1rem,1vw,1.5rem)"}   >
            Currently i work with technologies such as Angular, React, and Expressjs and db platforms such as MongoDB and 
            PostgreSQL. I always look forward to broaden my spectrum regarding web development and learning new things
            that would make me a better developer.
          </Text>
          <br />
          <Text fontSize={{base:"md",lg:"xl"}}  >
          Here you can see the technlogies i have worked with:
          </Text>
            <SimpleGrid columns={2} maxW={"300px"} gap={3} m={5} fontSize={'lg'}>
              <GridItem colSpan={1} d={'flex'} alignItems={'center'} >
                <BsFillCircleFill size={'10px'} color={'#ce2858'} style={{display:'inline-block',margin:"0 10px"}}/>
                Angular
              </GridItem>
              <GridItem colSpan={1} d={'flex'} alignItems={'center'}>
              <BsFillCircleFill size={'10px'} color={'#ce2858'} style={{display:'inline-block',margin:"0 10px"}}/>
                React
              </GridItem>
              <GridItem colSpan={1}>
                NodeJS
              </GridItem>
              <GridItem colSpan={1}>
                ExpressJS
              </GridItem>
              <GridItem colSpan={1}>
                PostgreSQL
              </GridItem>
              <GridItem colSpan={1}>
                MongoDB
              </GridItem>
            </SimpleGrid>
        </VStack>
     </motion.div>
     <br />
     <br />
  </WaveDiv>
  )
})

export default About