"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme/theme";
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div id="modal-root">
            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
              {children}
            </MantineProvider>
          </div>
       
      </body>
    </html>
  );
}
