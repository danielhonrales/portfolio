import './App.css';
import { Box, Button, Container, Divider, Link, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      mode: 'dark',
      primary: {
          main: '#9A8C98',
          light: '#C9ADA7',
      },
      secondary: {
          main: '#22223B',
          light: '#4A4E69',
      },
      background: {
          main: '#F2E9E4',
          paper: '#F2E9E4',
      },
  },
  typography: {
      h1: {
          fontFamily: 'Open Sans',
          fontWeight: 300,
          fontSize: '4rem',
          color: '#22223B'
      },
      h2: {
          fontFamily: 'Open Sans',
          fontWeight: 300,
          fontSize: '1.8rem',
          color: '#4A4E69'
      },
      h4: {
          fontFamily: 'hind',
      },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex', 
                  backgroundColor: 'background.main', 
                  color: 'secondary.light',
                  width: '100vw',
                  height: '100vh'}}>

          <Box sx={{width: '35%', margin: 'auto 2% auto auto'}}>
            
            <Box sx={{width: '100%', height: '68%'}}>
              <Typography variant="h2">Hello, I'm<br/></Typography>
              <Typography variant="h1">&ensp;Daniel Honrales</Typography>

              <Box sx={{width: '100%', display: 'flex', marginTop: '8%'}}>
                <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '2px', height: 'inherit', marginRight: '3%'}}/>
                <Box sx={{flexDirection: 'column'}}>
                  <Typography variant="h2">
                    I enjoy gaming all things Nintendo,
                    reading strange case studies on the mind,
                    and overthinking code.
                  </Typography>
                  <br/>
                  <Typography variant="h2">
                    I study at the Unviersity of Texas at Dallas
                    as an undergraduate second-year
                    Computer Science major,
                    Cognitive Science minor.
                  </Typography>
                  <br/>
                  <Typography variant="h2">
                    I'm interested in internships or entry-level
                    positions for CS or IT related fields.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'flex-end', textAlign: 'right', marginTop: '12%'}}>  
              <Container sx={{margin: '4% 25% auto'}}>
                <Button 
                  variant='contained'
                  sx={{width: '110px', height: '110px', backgroundColor: 'primary.main'}}
                  startIcon={<ArticleIcon />}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.download = `DanielHonrales_Resume_2022.pdf`;
                    link.href = "./DanielHonrales_Resume_2022.pdf";
                    link.click();
                  }}>
                  Resume
                </Button>
                <Button 
                  variant='outlined'
                  sx={{width: '110px', height: '110px', marginLeft: '100%', color: 'primary.main'}}>
                  Updated As Of 2022
                </Button>
              </Container>

              <Box>
                <Typography variant="h2">You can find me at:</Typography>
                <br/>

                <Link
                  href="https://github.com/danielhonrales"
                  color="secondary.main"
                  variant='h2'
                >Github</Link>
                <br/><br/>

                <Link
                  href="https://www.linkedin.com/in/daniel-honrales-5966a11b7/"
                  color="secondary.main"
                  variant='h2'
                >LinkedIn</Link>
                <br/><br/>

                <Link
                  href="mailto:danielhonrales@gmail.com"
                  color="secondary.main"
                  variant='h2'
                >danielhonrales@gmail.com</Link>
                <br/><br/>

                <Typography variant="h2">469 - 212 - 2559</Typography>
              </Box>

              <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '2px', height: 'inherit', marginLeft: '4%'}}/>
            </Box>
          </Box>

          <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '4px', height: '90%', margin: 'auto 0 auto 0'}}/>

          <Box sx={{width: '50%', height: '90%', margin: 'auto auto auto 2%'}}>
            <Typography variant="h1" sx={{fontSize: '3rem'}}>Projects</Typography>
            
            <Container>
              <Box sx={{width: '80%'}}>
                  Offsight
              </Box>
            
            </Container>
          </Box>

        </Box>
    </ThemeProvider>
  );
}

export default App;
