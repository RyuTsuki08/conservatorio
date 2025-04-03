// Code: 2025.04.01
'use client'

function Providers({children}) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}