import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Flex, Text, Grid, GridItem} from '@chakra-ui/react'
import { ListContainer, WelcomeDiv,AnimatedCircle, ColorDiv, HelloDiv, Footer, AnimatedButton } from '../../styles';
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
    
      <ColorDiv id="third-div" ref={ref3} height="fit-content" padding="50px" background="#e63946" >
        <Text textAlign="start" fontSize="4xl" > 
          Projects
        </Text>
        {/* <Grid templateColumns="repeat(6,1fr)" mt="30px" bg="#ffbdc2" border="2px #ffbdc2 solid" borderRadius="3px" gap="2px">
          <GridItem w='100%' h='200' bg='blue.500' colSpan="2">

          </GridItem>
          <GridItem w='100%' h='200' bg='red.500' p="15"  colSpan="4">
           <p> A customizable clock created with React. You can change the clock's font, size and background color. 
            You can change its position using Javascript's Drag and Drop API.</p>
          </GridItem>
          
          <GridItem w='100%' h='400' bg='blue.500'  colSpan="2"/>
          <GridItem w='100%' h='400' bg='red.500'  colSpan="4"/>
          <GridItem w='100%' h='400' bg='blue.500'  colSpan="2"/>
          <GridItem w='100%' h='400' bg='red.500'  colSpan="4"/>
        </Grid> */}
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