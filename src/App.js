import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Layout from './components/layout/Layout'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto-slab/400.css'



function App() {
  return (
    <ParallaxProvider>
        <Layout/>
    </ParallaxProvider>
  );
}

export default App;
