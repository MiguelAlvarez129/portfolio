import React,{useRef, forwardRef,useImperativeHandle, useContext} from 'react'
import {Box, Text, Link} from '@chakra-ui/react'
import { ListContainer} from '../../styles';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Projects from '../projects/Projects'
import Contact from '../contact/Contact';
import wave from '../../assets/img/wave2.svg'
import { AnimationContext } from '../../animationContext';
const List = forwardRef((props,ref) =>{
  const value = useContext(AnimationContext)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  

  useImperativeHandle(ref, () => ({
    getRef1: () => {
      return ref1.current
    },
    getRef2: () => {
      return ref2.current
    }, 
    getRef3: () => {
      return ref3.current
    },
    getRef4: () => { 
      return ref4.current
    },
  }));

  return (
    <ListContainer> 
        <Welcome ref={ref1} value={value}/> 
        <About ref={ref2} value={value}/>
        <Projects ref={ref3} value={value}/>
        <Contact ref={ref4} value={value}/> 
        <Box bg={'#ce2858'} h={'200px'} p={'100px 5vw'} >

          <Text color={'whiteAlpha.600'}>
           <Link _hover={{color:'white'}} href="https://haikei.app/">Images: haikei.app </Link> &nbsp; |
           &nbsp; <Link  _hover={{color:'white'}} href="https://github.com/MiguelAlvarez129/portfolio"> Designed and built by Miguel Alvarez  </Link> 
          </Text> 
        </Box>
    </ListContainer>
  )
})

export default List;