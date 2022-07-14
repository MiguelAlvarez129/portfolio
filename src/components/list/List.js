import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Divider , Text, Heading, VStack, Box} from '@chakra-ui/react'
import { ListContainer, ColorDiv, Footer } from '../../styles';
import Welcome from '../welcome/Welcome';

const List = forwardRef((props,ref) =>{

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
      <Welcome ref={ref1}/> 
      <Box ref={ref2} h={'fit-content'}>
        <Divider borderColor={'#add0ff96'} w='90%' m='20px auto'/>
        <VStack  p={'5px 10vw'}  alignItems={'start'} color={'#add0ff96'}>
          <Heading as={'h3'} color={'#add0ff96'}>
            About me
          </Heading>  
          <Text fontSize='xl'>
            Hi! my name is Miguel Alvarez, 
          </Text> 
          <Text textAlign="start" fontSize="4xl" > 
          Projects
        </Text>
        </VStack>
      </Box>
      <ColorDiv id="third-div" ref={ref3} height="fit-content" padding="50px" background="#e63946" >
        <Text textAlign="start" fontSize="4xl" > 
          Projects
        </Text>
      </ColorDiv>
      <ColorDiv id="fourth-div" ref={ref4} height="800px" background="darkcyan">
        jajaja
      </ColorDiv>
      <Footer>
        <p style={{color:"#cf8eff"}}>
        Images: <a href="https://haikei.app/"> haikei.app</a> &nbsp; | &nbsp;  Design: Myself
        </p> 
      </Footer>
    </ListContainer>
  )
})

export default List;