import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fontsource/roboto/700.css'
import '@fontsource/roboto-slab/500.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
const theme = extendTheme({
    fonts: {
      heading: `'Roboto', sans-serif`,
      body: `'Roboto Slab', sans-serif`,
    },
  })
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <App />        
    </ChakraProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
