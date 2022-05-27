import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './lib/theme.js'
// extra
import App from './App'
import './index.css'

const mainElement = document.getElementById('root')

ReactDOM.createRoot(mainElement).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript/>
    <App />
  </ChakraProvider>
)
