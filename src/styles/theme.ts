import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    app: {
      bg: '#13111b',
      box: '#201b2c',
      label: '#c9d1d9',
      text: '#EEEEF2',
      placeholder: '#8b949d',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'app.bg',
        color: 'app.text',
      },
    },
  },
});
