import './App.css';
import { Box, Button, Container, Divider, IconButton, Link, Typography, Paper } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import offsightLogo from './offsight.png'
import breadyLogo from './bready.png'
import snackHacksLogo from './snackHacks.png'
import discreteHitlerLogo from './discreteHitler.png'
import rinthLogo from './rinth.png'


const theme = createTheme({
  palette: {
      mode: 'dark',
      primary: {
        main: '#9A8C98',
        light: '#A88C86',
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
        fontSize: '3.35vw',
        color: '#22223B'
      },
      h2: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        fontSize: '1.7vw',
        color: '#4A4E69'
      },
      h3: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        fontSize: '2.5rem',
        color: 'white'
      },
  },
});

function App() {
  document.body.style.background = '#F2E9E4';
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex', 
                  backgroundColor: 'background.main', 
                  color: 'secondary.light',
                  width: '100vw',
                  height: '100vh'}}>

          <Box sx={{width: '38%', margin: 'auto 2% auto auto'}}>
            
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
                    I study at the University of Texas at Dallas
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
              <Container sx={{margin: '3% 28%'}}>
                <Button 
                  variant='contained'
                  sx={{fontSize: '.7vw', width: '5.5vw', height: '5.5vw', backgroundColor: 'primary.light'}}
                  startIcon={<ArticleIcon />}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.download = `DanielHonrales_Resume_2022.pdf`;
                    link.href = "DanielHonrales_Resume_2022.pdf";
                    link.click();
                  }}>
                  Resume
                </Button>
                <Button 
                  variant='outlined'
                  sx={{fontSize: '.7vw', width: '5.5vw', height: '5.5vw', marginLeft: '100%', color: 'primary.light'}}>
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
                  sx={{fontSize: '1.4vw'}}
                >danielhonrales@gmail.com</Link>
                <br/><br/>

                <Typography variant="h2">469 - 212 - 2559</Typography>
              </Box>

              <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '2px', height: 'inherit', marginLeft: '4%'}}/>
            </Box>
          </Box>



          <Divider orientation='vertical' sx={{backgroundColor: 'primary.main', width: '4px', height: '90%', margin: 'auto 0 auto 0'}}/>



          <Box sx={{width: '50%', height: '94%', margin: 'auto auto auto 2%'}}>
            <Typography variant="h1" sx={{fontSize: '2.7vw', marginTop: '2%'}}>Projects</Typography>
            
            <Container sx={{height: '80%', marginTop: '4%', overflow: 'auto'}}>
              <Paper elevation={4} sx={{width: '100%', display: 'flex', backgroundColor: 'primary.light', borderRadius: '30px', marginBottom: '4%'}}>
                  <Box sx={{width: '20%', marginLeft: '1%', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{margin: '10% auto auto auto'}}>
                      <img src={offsightLogo} alt="offsight.png" width='64' height='64'/>
                    </Box>
                    <Typography variant="h3" sx={{fontSize: '2vw', margin: 'auto auto 10% auto'}}>
                      Offsight
                    </Typography>
                  </Box>

                  <Box sx={{width: '65%', display: 'flex'}}>
                    <Divider orientation='vertical' sx={{backgroundColor: 'white', width: '2px', height: '80%', margin: 'auto 1% auto 1%'}}/>
                    <Typography variant="h2" sx={{fontSize: '1.5vw', color: 'white', margin: 'auto 0 auto 1%'}}>
                    - 3rd Place Winner for TAMUHack 2022<br/>
                      - File organizer / assignment tracker for students
                    </Typography>
                  </Box>

                  <Box sx={{width: '15%', backgroundColor: 'primary.main', borderRadius: '0px 30px 30px 0px'}}>
                    <IconButton
                      sx={{width: '100%', height: '100%'}}
                      onClick={() => {
                        window.open('https://devpost.com/software/offsight');
                      }}>
                      <OpenInNewIcon sx={{width: '60%', height: '60%'}}/>
                    </IconButton>
                  </Box> 
              </Paper>
              

              <Paper elevation={4} sx={{width: '100%', display: 'flex', backgroundColor: 'primary.light', borderRadius: '30px', marginBottom: '4%'}}>
                  <Box sx={{width: '20%', marginLeft: '1%', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{margin: '10% auto auto auto'}}>
                      <img src={breadyLogo} alt="bready.png" width='64' height='64'/>
                    </Box>
                    <Typography variant="h3" sx={{fontSize: '2vw', margin: 'auto auto 10% auto'}}>
                    Bready
                    </Typography>
                  </Box>

                  <Box sx={{width: '65%', display: 'flex'}}>
                    <Divider orientation='vertical' sx={{backgroundColor: 'white', width: '2px', height: '80%', margin: 'auto 1% auto 1%'}}/>
                    <Typography variant="h2" sx={{fontSize: '1.5vw', color: 'white', margin: 'auto 0 auto 1%'}}>
                      - Submission for HackUTD 2021<br/>
                      - Local restaurant deal tracker
                    </Typography>
                  </Box>

                  <Box sx={{width: '15%', backgroundColor: 'primary.main', borderRadius: '0px 30px 30px 0px'}}>
                    <IconButton
                      sx={{width: '100%', height: '100%'}}
                      onClick={() => {
                        window.open('https://devpost.com/software/bready');
                      }}>
                      <OpenInNewIcon sx={{width: '60%', height: '60%'}}/>
                    </IconButton>
                  </Box> 
              </Paper>


              <Paper elevation={4} sx={{width: '100%', display: 'flex', backgroundColor: 'primary.light', borderRadius: '30px', marginBottom: '4%'}}>
                  <Box sx={{width: '20%', marginLeft: '1%', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{margin: '10% auto auto auto'}}>
                      <img src={snackHacksLogo} alt="snackHacks.png" width='64' height='64'/>
                    </Box>
                    <Typography variant="h3" sx={{fontSize: '1.5vw', margin: 'auto auto 10% auto'}}>
                      SnackHacks
                    </Typography>
                  </Box>

                  <Box sx={{width: '65%', display: 'flex'}}>
                    <Divider orientation='vertical' sx={{backgroundColor: 'white', width: '2px', height: '80%', margin: 'auto 1% auto 1%'}}/>
                    <Typography variant="h2" sx={{fontSize: '1.5vw', color: 'white', margin: 'auto 0 auto 1%'}}>
                      - Submission for TAMUHack 2021<br/>
                      - Ingredient-based recipe finder
                    </Typography>
                  </Box>

                  <Box sx={{width: '15%', backgroundColor: 'primary.main', borderRadius: '0px 30px 30px 0px'}}>
                    <IconButton
                      sx={{width: '100%', height: '100%'}}
                      onClick={() => {
                        window.open('https://devpost.com/software/snackhacks');
                      }}>
                      <OpenInNewIcon sx={{width: '60%', height: '60%'}}/>
                    </IconButton>
                  </Box> 
              </Paper>


              <Paper elevation={4} sx={{width: '100%', display: 'flex', backgroundColor: 'primary.light', borderRadius: '30px', marginBottom: '4%'}}>
                  <Box sx={{width: '20%', marginLeft: '1%', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{margin: '10% auto auto auto'}}>
                      <img src={rinthLogo} alt="snackHacks.png" width='64' height='64'/>
                    </Box>
                    <Typography variant="h3" sx={{fontSize: '1.5vw', margin: 'auto auto 10% auto'}}>
                      Rinth
                    </Typography>
                  </Box>

                  <Box sx={{width: '65%', display: 'flex'}}>
                    <Divider orientation='vertical' sx={{backgroundColor: 'white', width: '2px', height: '80%', margin: 'auto 1% auto 1%'}}/>
                    <Typography variant="h2" sx={{fontSize: '1.5vw', color: 'white', margin: 'auto 0 auto 1%'}}>
                      - Submission for UTD GameJam 2020<br/>
                      - Unity-based horror game
                    </Typography>
                  </Box>

                  <Box sx={{width: '15%', backgroundColor: 'primary.main', borderRadius: '0px 30px 30px 0px'}}>
                    <IconButton
                      sx={{width: '100%', height: '100%'}}
                      onClick={() => {
                        window.open('https://danielhonrales.itch.io/rinthnew');
                      }}>
                      <OpenInNewIcon sx={{width: '60%', height: '60%'}}/>
                    </IconButton>
                  </Box> 
              </Paper>


              <Paper elevation={4} sx={{width: '100%', display: 'flex', backgroundColor: 'primary.light', borderRadius: '30px', marginBottom: '4%'}}>
                  <Box sx={{width: '20%', marginLeft: '1%', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{margin: '10% auto auto auto'}}>
                      <img src={discreteHitlerLogo} alt="discreteHitler.png" width='64' height='64'/>
                    </Box>
                    <Typography variant="h3" sx={{fontSize: '1.3vw', margin: 'auto auto 10% auto'}}>
                      Discrete Hitler
                    </Typography>
                  </Box>

                  <Box sx={{width: '65%', display: 'flex'}}>
                    <Divider orientation='vertical' sx={{backgroundColor: 'white', width: '2px', height: '80%', margin: 'auto 1% auto 1%'}}/>
                    <Typography variant="h2" sx={{fontSize: '1.5vw', color: 'white', margin: 'auto 0 auto 1%'}}>
                      - Personal quarantine project<br/>
                      - Discord bot for playing the "Secret Hitler" board game virtually
                    </Typography>
                  </Box>

                  <Box sx={{width: '15%', backgroundColor: 'primary.main', borderRadius: '0px 30px 30px 0px'}}>
                    <IconButton
                      sx={{width: '100%', height: '100%'}}
                      onClick={() => {
                        window.open('https://github.com/danielhonrales/Discrete-Hitler');
                      }}>
                      <OpenInNewIcon sx={{width: '60%', height: '60%'}}/>
                    </IconButton>
                  </Box> 
              </Paper>
            </Container>
          </Box>

        </Box>
    </ThemeProvider>
  );
}

export default App;
