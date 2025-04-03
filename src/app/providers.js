// Code: 2025.04.01
'use client'

import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";


export function Providers({ children }) {
  return (
    <ChakraProvider>
     {children}
    </ChakraProvider>
  );
}