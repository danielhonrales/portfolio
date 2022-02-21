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
          fontSize: '70px',
          color: '#22223B'
      },
      h2: {
          fontFamily: 'Open Sans',
          fontWeight: 300,
          fontSize: '30px',
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

          <Box sx={{width: '40%', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
            
            <Container>
              <Typography variant="h2">Hello, I'm<br/></Typography>
              <Typography variant="h1">&ensp;Daniel Honrales</Typography>
              <br/><br/>

              <Box sx={{display: 'flex'}}>
                <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '2px', height: '410px', marginRight: '10px'}}/>
                <Typography variant="h2">
                  I enjoy gaming all things Nintendo, <br/>
                  &emsp;&emsp;&emsp;&nbsp;reading strange case studies on the mind, <br/>
                  &emsp;&emsp;&emsp;&nbsp;and overthinking code.<br/><br/>

                  I study at the Unviersity of Texas at Dallas<br/>
                  &emsp;&emsp;&emsp;&nbsp;as an undergraduate second-year<br/>
                  &emsp;&emsp;&emsp;&nbsp;Computer Science major,<br/>
                  &emsp;&emsp;&emsp;&nbsp;Cognitive Science minor.<br/><br/>

                  I'm interested in internships or entry-level positions<br/>
                  &emsp;&emsp;&emsp;&nbsp;for CS or IT related fields.
                </Typography>
              </Box>
            </Container>

            <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '6%', textAlign: 'right'}}>  
              <Container sx={{margin: '7% 31% auto'}}>
                <Button 
                  variant='contained'
                  sx={{width: '110px', height: '110px'}}
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
                  sx={{width: '110px', height: '110px', marginLeft: '100%'}}>
                  TBD
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

              <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '2px', height: '270px', marginLeft: '10px'}}/>
            </Box>
          </Box>

          <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '4px', height: '90%', margin: 'auto'}}/>

          <Box sx={{width: '50%', height: '90%', margin: 'auto'}}>
            <Typography variant="h2">Projects</Typography>
          </Box>

        </Box>
    </ThemeProvider>
  );
}

export default App;
