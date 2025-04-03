import { createTheme } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
  colorScheme: 'light',
  primaryColor: 'blue',
  fontFamily: 'Arial, sans-serif',
  headings: { fontFamily: 'Arial, sans-serif' },
  colors: {
    // Add your custom colors here
    brand: ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0'],
  },
});

export default theme;