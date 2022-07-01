import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Flex, Text, Grid, GridItem} from '@chakra-ui/react'
import { ListContainer, WelcomeDiv,AnimatedCircle, ColorDiv, HelloDiv, Footer, AnimatedButton } from '../../styles';
import Welcome from '../welcome/Welcome';

const List = forwardRef((props,ref) =>{
  // const blob = './assets/img/blob.svg'
  const array = [
    {
      height: 20,
      width: 20,
      background: '#E63946',
      bottom: 85, 
      right: 70,
  },
    {
      height: 20,
      width: 20,
      background: '#E63946',
      bottom: 75,
      right: 60,
  },
  {
    bottom: 90,
    right: 40,
    height: 20,
    width: 20,
    background: '#E63946',
  },
  {
    background: '#E63946',
    bottom: 80,
    right: 50,
    height: 10,
    width: 10,
  },
  {
    height: 30,
    width: 30,
    background: '#E63946',
    bottom: 75,
    right: 10,
  },
  {
    height: 15,
    width: 15,
    background: '#E63946',
    bottom: 72,
    right: 25,
  },
  {
    height: 20,
    width: 20,
    background: '#E63946',
    bottom: 65,
    right: 35,
  }
  ]

  const menu = [
    {title:"Welcome", selected:true, id:"first-div", delay:1},
    {title:"About Me", selected:false, id:"second-div", delay:1.5},
    {title:"Projects", selected:false, id:"third-div", delay:2},
    {title:"Get in Touch", selected:false, id:"fourth-div", delay:2.5}
  ]

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
      <ColorDiv id="second-div" ref={ref2} background='#000331' height="400px">
        <Flex justifyContent="flex-end" flexDirection="column" w="100%" height="100%">
          <Text align="center" fontSize="3xl" padding="50px" fontFamily="Libre Franklin">
            &nbsp; I'm a junior developer who likes to create <b> simple, easy </b> to implement solutions while learning new things. 
            <br /> I have <b>experience</b> developing apps on React, Angular and ExpressJs using the REST architecture.
            <br /> 
            <br />  Always looking forwards to the next challenge!  
          </Text>
        </Flex>
      </ColorDiv>
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