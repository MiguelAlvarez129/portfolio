import React, {forwardRef} from 'react'
import {Text, Heading, VStack, SimpleGrid, GridItem, Divider} from '@chakra-ui/react'
import {BsCircle, BsFillCircleFill} from 'react-icons/bs'
import { WaveDiv } from '../../styles'
import waveReverse from '../../assets/img/wave-reverse.svg'
import waveSmallReverse from '../../assets/img/wave-small-reverse.svg'
const About = forwardRef((props,ref) => {
  return (
  <WaveDiv svg={waveReverse} smallSvg={waveSmallReverse} reverse={true}>
    <VStack  p={{base:'5px 10px',sm:'5px 10vw'}} m={'auto'}  ref={ref} alignItems={'center'} color={'#c6cfff'} justifyContent={'center'} minH={'100vh'} maxW={'1800px'} id="second-div">
       {/* <Divider borderColor={'#add0ff96'} w='80vw' /> */}
      <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
        About me
      </Heading>  
      <br />
      <Text fontSize='lg'>
        Hi! my name is Miguel Alvarez, i'm a systems engineer currently working as a web developer. 
        I began in the world of web dev back in 2018 with freecodecamp.org where i learned the basics of 
        HTML, CSS, Javascript and a bit of React. Later i decided to take my learning into a more self-taught path
        and began learning React and ExpressJS on my own. 
        Here you can see the technlogies i have worked with:
      </Text> 
      <br />
      <Text fontSize='lg' >
        Currently i work with technologies such as Angular, React, and Expressjs and db platforms such as MongoDB and 
        PostgreSQL. I always look forward to broaden my spectrum regarding web development and learning new things
        that would make me a better developer.
      </Text>
      <br />
       <Text fontSize='lg' >
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
  </WaveDiv>
  )
})

export default About