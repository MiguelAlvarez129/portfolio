import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Layout from './components/layout/Layout'
function App() {
  return (
    <ParallaxProvider>
      <ChakraProvider>
        <Layout/>
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default App;
