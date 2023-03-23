import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import RanadeWoff2 from './fonts/Ranade-Bold.woff2'
import ThankSomeone from './components/ThankSomeone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Footer from './components/Footer';
import { useState } from 'react';
import Feedback from './components/Feedback';
import About from './components/About';
import ForSchools from './components/ForSchools';

function App() { 
  
  const theme = createTheme({ 
    typography: {
      fontFamily: 'Inter',
      bigTitle: {
        fontFamily: 'Ranade',
        fontSize: 96,
      },
      title: {
        fontFamily: 'Inter',
        fontSize: 50
      },
      paragraph: {
        fontFamily: 'Inter',
        fontSize: 24
      },
      subtitle: {
        fontFamily: 'Inter',
        fontSize: 40
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Ranade';
            font-style: bold;
            font-display: swap;
            font-weight: 400;
            src: local('Ranade'), local('Ranade-Bold'), url(${RanadeWoff2}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

        `,
      },
    },
  });

  theme.typography.bigTitle = {
    fontFamily: 'Ranade',
    [theme.breakpoints.up('md')]: {
      fontSize: 90
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 48
    },
  }

  theme.typography.title = {
    fontFamily: 'Ranade',
    [theme.breakpoints.up('md')]: {
      fontSize: 50
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 40
    },
  }

  theme.typography.subtitle = {
    fontFamily: 'Inter',
    [theme.breakpoints.up('md')]: {
      fontSize: 40
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 24
    },
  }

  theme.typography.paragraph = {
    fontFamily: 'Inter',
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    },
  }
  const [headerColor, setHeaderColor] = useState("white")
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Nav headerColor={headerColor}/>
          <Routes>
            <Route path='/' element={<HomePage headerColor={setHeaderColor}/>}/> 
            <Route path='/thanksomeone' element={<ThankSomeone headerColor={setHeaderColor}/>}/>
            <Route path='/feedback' element={<Feedback headerColor={setHeaderColor}/>}/>
            <Route path='/about' element={<About headerColor={setHeaderColor}/>}/>
            <Route path='/forschools' element={<ForSchools headerColor={setHeaderColor}/>}/>
          </Routes>
        </BrowserRouter>
        <Footer footerColor={headerColor}/>
      </ThemeProvider>
    </div >
  );
}

export default App;
