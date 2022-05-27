import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'blackAlpha.2200')(props),
        fontFamily: 'Sans'
      },
      button: {
        bg: mode('blackAlpha.200', 'whiteAlpha.100')(props),
      },
      p: {
        color: mode('blackAlpha.700', 'whiteAlpha.700')(props),
      },
      a: {
        bg: mode('blackAlpha.200', 'whiteAlpha.100')(props),
      },
      ul: {
        color: mode('blackAlpha.700', 'whiteAlpha.700')(props),
      },
    }),
  },
})

export default theme