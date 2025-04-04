"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";
import { metadata } from "./metadata";
import Navbar from "./components/navbar/navbar";
import { Box } from "@chakra-ui/react";
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
      


<Providers>


<Box position = {'relative'} bgColor={'#92B4F4'} minH= {'100vh'}>  
<Navbar />
{children}

</Box>

</Providers>

       

        </body>
    </html>
  );
}

