import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Flex, Text, Grid, GridItem} from '@chakra-ui/react'
import { ListContainer, WelcomeDiv,AnimatedCircle, ColorDiv, HelloDiv, Footer, AnimatedButton } from '../../styles';
const List = forwardRef((props,ref) =>{

  const array = [
    {
      height: 20,
      width: 20,
      background: '#cde2f3',
      bottom: 85, 
      right: 70,
  },
    {
      height: 20,
      width: 20,
      background: '#cde2f3',
      bottom: 75,
      right: 60,
  },
  {
    bottom: 90,
    right: 40,
    height: 20,
    width: 20,
    background: '#cde2f3',
  },
  {
    background: '#cde2f3',
    bottom: 80,
    right: 50,
    height: 10,
    width: 10,
  },
  {
    height: 30,
    width: 30,
    background: '#cde2f3',
    bottom: 75,
    right: 10,
  },
  {
    height: 15,
    width: 15,
    background: '#cde2f3',
    bottom: 72,
    right: 25,
  },
  {
    height: 20,
    width: 20,
    background: '#cde2f3',
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
  
      <HelloDiv>
        <h1>
          Hello!,
        </h1>
        <h2>
          My name is   <span style={{letterSpacing:0,display:'inline',fontWeight:'bolder'}}>Miguel,</span> <br /> 
         <span style={{fontWeight:400}}> I'm a web developer </span>  and this is my portfolio <b> ;) </b>
        </h2>
        <a href="#second-div"> 
          <AnimatedButton size='lg' colorScheme="blue">
            Find out more
          </AnimatedButton>
        </a>
      </HelloDiv>
      {array.map((props,index) => <AnimatedCircle key={index} {...props}/>)}
      <WelcomeDiv/>
      <div style={{height:"100vh"}} id="first-div" ref={ref1}></div>
      <ColorDiv id="second-div" ref={ref2} background="linear-gradient(0deg,rgb(57 37 255) ,rgb(0 114 209) 55%, rgb(0 114 209 / 0%) 93%);">
      <Flex justifyContent="flex-end" flexDirection="column" w="100%" height="100%">
        <Text align="center" fontSize="3xl" padding="50px">
          &nbsp; I'm a Junior developer who likes to create <b> simple, easy </b> to implement solutions while learning new things. 
          <br /> I have <b>experience</b> developing apps on React, Angular and ExpressJs using the REST architecture.
          <br /> 
          <br />  Always looking forwards to the next challenge!  
        </Text>
      </Flex>
      </ColorDiv>
      <ColorDiv id="third-div" ref={ref3} height="fit-content" padding="50px" background="rgb(57 37 255)">
        <Text textAlign="start" fontSize="4xl"> 
          Projects
        </Text>
        <Grid templateColumns="repeat(6,1fr)" mt="30px" bg="white" border="2px white solid" borderRadius="3px" gap="2px">
          <GridItem w='100%' h='200' bg='blue.500' colSpan="2" />
          <GridItem w='100%' h='200' bg='red.500'  colSpan="4"/>
          <GridItem w='100%' h='400' bg='blue.500'  colSpan="2"/>
          <GridItem w='100%' h='400' bg='red.500'  colSpan="4"/>
          <GridItem w='100%' h='400' bg='blue.500'  colSpan="2"/>
          <GridItem w='100%' h='400' bg='red.500'  colSpan="4"/>
        </Grid>
      </ColorDiv>
      <ColorDiv id="fourth-div" ref={ref4} height="700px" background="darkcyan"/> 
      <Footer/>
    </ListContainer>
  )
})

export default List;