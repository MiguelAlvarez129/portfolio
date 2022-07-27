import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/700.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/raleway/500.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
      heading: `'Roboto', sans-serif`,
      body: `'Raleway',sans-serif`,
      
    },
  })

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <App />        
    </ChakraProvider>
, document.getElementById('root'));


