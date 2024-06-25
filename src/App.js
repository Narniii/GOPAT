import logo from './logo.svg';
import './App.css';
import "./fonts/FuturaPTDemiOblique.otf"
import "./fonts/FuturaPTExtraBold.otf"
import "./fonts/FuturaPTExtraBoldOblique.otf"
import "./fonts/FuturaPTHeavy.otf"
import "./fonts/FuturaPTHeavyOblique.otf"
import "./fonts/FuturaPTLight.otf"
import "./fonts/FuturaPTLightOblique.otf"
import "./fonts/FuturaPTMedium.otf"
import "./fonts/FuturaPTMediumOblique.otf"
import "./fonts/FuturaMedium.ttf"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import futura from "./fonts/FuturaMedium.ttf"
function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Jost',
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //       @font-face {
    //         font-family: 'Futura';
    //         src: local('Futura'), url(${futura}) format('truetype');
    //       }
    //     `,
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter forceRefresh={true} >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
