import {
  Box,
  Button
} from '@chakra-ui/react'

import ThemeButton from './themebutton.jsx' 

const Navbar = () => {

  return (
    <Box 
      as="nav" 
      position="fixed"
      w="100%"
      p="10px"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <ThemeButton/>
    </Box>
  )
}

export default Navbar