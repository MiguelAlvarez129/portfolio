import React,{useRef, forwardRef,useImperativeHandle} from 'react'
import {Divider , Text, Heading, VStack, Box, SimpleGrid, GridItem} from '@chakra-ui/react'
import { ListContainer, ColorDiv, Footer } from '../../styles';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Projects from '../projects/Projects'
import Contact from '../contact/Contact';
import confetti from '../../assets/img/confetti2.svg'
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
      <About ref={ref2}/>
      <Projects ref={ref3}/>
      <Contact ref={ref4}/> 
      <Footer>
        <p style={{color:"#cf8eff"}}>
        Images: <a href="https://haikei.app/"> haikei.app</a> &nbsp; | &nbsp;  Design: Myself
        </p> 
      </Footer>
    </ListContainer>
  )
})

export default List;