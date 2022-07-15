import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Divider , Text, Heading, VStack, Box, SimpleGrid, GridItem} from '@chakra-ui/react'
import { ListContainer, ColorDiv, Footer } from '../../styles';
import {BsFillOctagonFill} from 'react-icons/bs'
import Welcome from '../welcome/Welcome';
import About from '../about/About';

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
        <Divider borderColor={'#add0ff96'} w='90%' m='20px auto'/>
      <About ref={ref2}/>
        
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