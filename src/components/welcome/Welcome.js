import React, {forwardRef} from 'react'
import { AnimatedButton} from '../../styles';
import {VStack, Grid, GridItem, Heading, Box, useMediaQuery} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import zigzag from '../../assets/img/zig-zag.svg'
import wave from '../../assets/img/wave4.svg'



const Welcome = forwardRef((props,ref) =>{
  const [isLargerThan650] = useMediaQuery('(max-width:650px)')
  
  const headings =  [
    {title:'My name is Miguel Alvarez',button:false},
    {title:' I\'m a web developer.',button:false},
    {title:'',button:true}
  ]

  const headingVariants = {
    visible:{ opacity:1, y:0},
    hidden:{ opacity:0, y:-50}
  }

  const variants = {
    visible:{transition:{staggerChildren: .5,delayChildren:!isLargerThan650 ? 3.5 : .5}},
  }
  return (
    <Box id="welcome" ref={ref}  position={'relative'}>
      <VStack zIndex={5} position={'relative'} justify={'center'} align={'start'} h="100vh" pl={'12vw'}>
       <motion.div initial={{opacity:0,y:-50}} animate={props.value === 'welcome' &&  {opacity:1, y:0}} transition={{delay:!isLargerThan650 ? 3 : 0, ease:'easeIn'}}>
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
        </motion.div>
        <motion.div variants={variants} initial={'hidden'} animate={'visible'} >
          {headings.map(({title,button})=> 
          
          <motion.div variants={headingVariants}> 
            {button ?      
            <a href="#about">
              <AnimatedButton  size='lg' color='white' colorScheme='blackAlpha' border="white 2px solid" >
                Find out more!
              </AnimatedButton>
            </a> : 
            <Heading fontSize={'clamp(2rem,4vw,5rem)'} color={'#add0ff96'}>
              {title}
            </Heading>}
          </motion.div>
          )}
        </motion.div>
      </VStack>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:!isLargerThan650 ? 5 : 1.5}}>
        <Box position={'absolute'} zIndex={1} bottom={0} backgroundImage={`url(${wave})`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} w={'full'} style={{aspectRatio:'16/9'}} />
      </motion.div>
    </Box>
  )
})

export default Welcome;