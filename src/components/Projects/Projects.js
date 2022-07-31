import React, {forwardRef} from 'react'
import { VStack, Heading, Text, Flex, Image, Box, Link, HStack, Icon} from '@chakra-ui/react'
import clock from '../../assets/gif/clock.gif'
import newClock from '../../assets/gif/new-clock.gif'
import twitter from '../../assets/gif/twitter.gif'
import {motion} from 'framer-motion'
import { DiGithubBadge, DiGithubAlt} from "react-icons/di";
const Projects = forwardRef((props,ref) =>{

  const projects = [
    {
      title:"React Clock",
      body: `This was the first project where i used React, i learned the basics of how React and its hooks work. Also it was the first project i did independently so it was a big step for me.`,
      tech: "Made using React",
      url:'https://miguelalvarez129.github.io/clock/',
      gif:clock,
      github:'https://github.com/MiguelAlvarez129/clock/',
    },
    {
      title:"Twitter Clone",
      body: `\t This was my very first fullstack app. It helped me understand how the backend and frontend work together, and how to keep the user state persist throughout the whole app. I had only done very basic ExpressJS apps before this one so this project allowed to get the experience that i have now. I also learned how to use Redux in order to maintain and facilitate the state throughout the app.`,
      tech: `Made using React, React Router, Redux, Styled Components, ExpressJS, NodeJS, MongoDB, Mongoose, Socket IO`,
      url:"https://twittercl0ne.netlify.app/home",
      gif:twitter,
      github:"https://github.com/MiguelAlvarez129/"
    },
    {
      title:"New React Clock",
      body: `I made this new version after seeing how messy the code was on the first React Clock. I added a few more features and reimplemented others in a way i found more satisfying compared to the first iteration.\n
      This project helped me realize how much i have learned since i began learning react and how much different a project can turn out when you have more experience working with a framework.`,
      tech: "Made using React, React Router, Redux, Styled Components, Chakra-UI",
      url:"https://twittercl0ne.netlify.app/home",
      gif:newClock,
      github:'https://github.com/MiguelAlvarez129/new-clock/',
    },
  ]

  const parent = {
    visible:{transition:{staggerChildren: 0.5}},
    hidden:{transition:{staggerChildren: 0.5}}
  }

  const child = {
    visible:{opacity:1, y:0,},
    hidden:{opacity:0,y:-50}
  }
  return (
    <VStack h={'fit-content'} ref={ref} alignItems={'center'} color={'#c6cfff'} p={{base:'100px 10px',sm:'100px 5vw'}} justify={'center'} id="projects">
        <motion.div style={{width:'100%'}} variants={parent} animate={props.value === 'projects' && 'visible'} transition={{staggerChildren:0.2, delayChildren:2}} initial={'hidden'}>
        <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
          Projects
        </Heading>
        <br />
      {projects.map(({title,body,tech,gif,url,github},index) => (
        <motion.div variants={child}> 
        <Flex direction={{base:'column',lg:index % 2 ? 'row-reverse' : 'row' }} justify={'center'} p={{base:'0',md:'10px'}} align={'center'}>
          <VStack alignSelf={'center'}  maxW={'600px'}>
            <Link href={url} target={'blank'} _hover={{textDecoration:'none'}}>
              <Heading as={'h5'} size='lg' color={'#add0ff96'} transition={'text-shadow .5s, color .5s;'} _hover={{textShadow:'2px 2px #ce2858, 4px 2px #ce2858;', color:'white'}}>
                {title}
              </Heading>
            </Link>
            <Box boxShadow='dark-lg' p={'5px 10px'} h='fit-content' borderRadius={'3px'} bg={'blue.900'} maxW={'600px'}>
              <Text fontSize={"clamp(.8rem,2vw,1rem)"} whiteSpace={'pre-line'} >
               {body}
              </Text>  
            </Box>
            <Text fontSize={{base:'xs',lg:'sm'}} pt={'10px'}>
              {tech}
              </Text>
            <HStack w={'100%'} justify={{base:'center',lg:index % 2 ? 'end' : 'start' }}>
              <Link href={github} 
              target="blank" 
              transition={'color .5s, background .5s'} 
              h={"36px"} 
              borderRadius={"50%"}
              _focus={{boxShadow:"none"}} 
              _hover={{background:'white',color:"#000331"}}>
                <Icon as={DiGithubAlt} fontSize={'36px'}/>
              </Link>
            </HStack>
          </VStack>
          <Image  src={gif}  m={'10px'} borderRadius={'3px'} w={{base:'100%',lg:'35vw'}} maxW='700px'/>
        </Flex>
        </motion.div> 
      ))}
      </motion.div>
        {/* <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'third-div' &&  {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
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
              <Text fontSize={"clamp(1rem,1.5vw,1.5rem)"}  >
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
        </motion.div> */}
        <br />
        <br />
      </VStack>
  )
})

export default Projects;