import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    app: {
      bg: '#1E1E2B',
      box: '#2F3141',
      label: '#c9d1d9',
      text: '#EEEEF2',
      placeholder: '#8b949d',
      selectedBorder: '#04d361',
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
