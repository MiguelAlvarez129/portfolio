import React, {forwardRef} from 'react'
import { VStack, Heading, Text, Flex, Image, Box, Link, textDecoration} from '@chakra-ui/react'
import clock from '../../assets/gif/clock.gif'
import newClock from '../../assets/gif/new-clock.gif'
import twitter from '../../assets/gif/twitter.gif'
import {motion} from 'framer-motion'
const Projects = forwardRef((props,ref) =>{


  return (
    <VStack h={'fit-content'} p={'5px 5vw'} ref={ref} alignItems={'center'} color={'#c6cfff'} justify={'center'} id="third-div">
        <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'third-div' &&  {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
        <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
          Projects
        </Heading>
        <br />
        <Flex direction={{base:'column',lg:'row'}} p={{base:'0',md:'30px'}} align={'center'}>
          <VStack alignSelf={'center'}>
            <Link href='https://miguelalvarez129.github.io/clock/' target={'blank'} _hover={{textDecoration:'none'}}>
              <Heading as={'h5'} size='lg' color={'#add0ff96'}>
                React Clock
              </Heading>
            </Link>
            <Box boxShadow='md' p={'5px 10px'} h='fit-content' borderRadius={'3px'} bg={'blue.900'} maxW={'600px'}>
              <Text fontSize='lg'>
                This was the first project where i used React, i learned the basics of how React and its hooks work. Also 
                it was the first project i did independently so it was a big step for me. 
              </Text>  
            </Box>
            <Text fontSize={'sm'}>
              Made using React
              </Text>
          </VStack>
          <Image  src={clock}  m={'10px'} borderRadius={'3px'} w={{base:'100%',lg:'35vw'}} maxW='700px'/>
        </Flex>
        <br />
        <Flex direction={{base:'column',lg:'row-reverse'}}  p={{base:'0',md:'30px'}} align={'center'} >
          <VStack alignSelf={'center'}>
            <Link href="https://twittercl0ne.netlify.app/home" target={'blank'} _hover={{textDecoration:'none'}}>
              <Heading as={'h5'} size='lg' color={'#add0ff96'}>
                Twitter Clone
              </Heading>
            </Link>
            <Box boxShadow='md' p={'5px 10px'}  h='fit-content' borderRadius={'3px'} bg={'blue.900'} maxW={'600px'}>
              <Text fontSize='md'>
                This was my very first fullstack app. It helped me understand how the backend and frontend work together, and how to keep
                the user state persist throughout the whole app. I had only done very basic ExpressJS apps before this one so this project
                allowed to gain the experience that i have now. I also learned how to use Redux in order to maintain and facilitate the state 
                throughout the app.
              </Text>  
              <br />
            </Box>
              <Text fontSize={'sm'}>
              Made using React, React Router, Redux, Styled Components, ExpressJS, NodeJS, MongoDB, Mongoose, Socket IO
              </Text>
          </VStack>
          <Image  src={twitter} m={'10px'} borderRadius={'3px'} w={{base:'100%',lg:'35vw'}} maxW='700px'/>
        </Flex>
        <br />
        <Flex direction={{base:'column',lg:'row'}}  p={{base:'0',md:'30px'}} align={'center'} >
          <VStack alignSelf={'center'}>
            <Link href="https://twittercl0ne.netlify.app/home" target={'blank'} _hover={{textDecoration:'none'}}>
              <Heading as={'h5'} size='lg' color={'#add0ff96'}>
                New React Clock
              </Heading>
            </Link>
            <Box boxShadow='md' p={'5px 10px'}  h='fit-content' borderRadius={'3px'} bg={'blue.900'} maxW={'600px'}>
              <Text fontSize='md'>
                I made this new version after seeing how messy the code was on the first React Clock. I added a few more features and reimplemented
                others in a way i found more satisfying compared to the first iteration.
                <br />
                <br />
                
                This project helped me realize how much i have learned since i began learning react and how much different a project 
                can turn out when you have more experience working with a framework.
              </Text>  
              <br />
            </Box>
              <Text fontSize={'sm'}>
              Made using React, React Router, Redux, Styled Components, Chakra-UI
              </Text>
          </VStack>
          <Image  src={newClock} m={'10px'} borderRadius={'3px'} w={{base:'100%',lg:'35vw'}} maxW='700px'/>
        </Flex>
        </motion.div>
      </VStack>
  )
})

export default Projects;