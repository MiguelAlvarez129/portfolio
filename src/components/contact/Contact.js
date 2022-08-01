import React, {forwardRef} from 'react'
import { AnimatedButton } from '../../styles'
import {Box, VStack, Flex, Heading, Image, Text, } from '@chakra-ui/react'
import carta from '../../assets/img/carta.png'
import {motion} from 'framer-motion'
import wave from '../../assets/img/wave3.svg'

const Contact = forwardRef((props,ref) => {
  return (

        <Box  minH={'100vh'} position={'relative'}>
            <Box style={{aspectRatio:'3/2'}} w={'full'} backgroundImage={`url(${wave})`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} position={'absolute'} bottom={'0'}  />
            <motion.div ref={ref}  id='contact' initial={{opacity:0,y:-50}} animate={props.value === 'contact' && {opacity:1, y:0}} transition={{delay:.2, ease:'easeInOut'}}>
                <VStack position={'relative'} justify={'center'} h={'fit-content'}  minH={'100vh'} p={{base:0,sm:'0 5vw'}}>
                    <Box>
                        <Heading as={'h3'} size='xl' color={'#add0ff96'} alignSelf={'start'}>
                        Get in Touch
                        </Heading>  
                    </Box>
                    <Flex h={'fit-content'} w={'full'} justify={'center'} direction={{base:'column',lg:'row'}}  p={{base:'1em',sm:'30px'}}>
                            <VStack w={'full'} maxW={'800px'} p={'10px 20px'}  bg={'#0b0155a3'} justify={'center'} borderRadius={'4px'}>
                                <Image  src={carta} w={'20vw'} minW={'200px'} maxW={'400px'}/>
                                <Text fontSize={{base:'xl',lg:'3xl'}} color={'#c6cfff'} textAlign='center'>
                                    Wanna contact me? 
                                </Text>
                                <Text fontSize={"clamp(1rem,1vw,1.5rem)"} color={'#c6cfff'} textAlign='center' p={'5px 4vw'} noOfLines={3}>
                                    Currently i'm looking for work, so if you've got any vacancies that fit my profile, please send me an email so we can get in touch!
                                </Text>
                                <Box>
                                <a href="mailto:miguelalvarezunexpo@gmail.com">
                                    <AnimatedButton 
                                    size='lg' color='white' margin={'10px 0'}  colorScheme='blackAlpha' border="white 2px solid" >
                                        Contact me!
                                    </AnimatedButton>
                                </a>
                                </Box>
                            </VStack>
                        </Flex>
                </VStack>
            </motion.div>
            {/* <Box backgroundImage={`url(${steps})`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} aspectRatio={16/9} w={'100%'} /> */}
        </Box>

  )
})

export default Contact