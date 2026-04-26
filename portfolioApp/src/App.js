import './App.css';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      main: '#F2E9E4',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Comfortaa',
      fontWeight: 300,
      fontSize: '2rem',
      color: '#4A4E69',
    },
  },
});
 
function App() {
  document.body.style.background = '#F2E9E4';
 
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#F2E9E4',
        }}
      >
        <Typography variant="h2">
          Under renovation, check back again soon!
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
 
export default App;
