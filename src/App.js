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
import "./fonts/IranianSans.ttf"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import futura from "./fonts/FuturaMedium.ttf"
import NotFound from './pages/notFound';
import CollectionSingle from './pages/collectionSingle';
import ProductSingle from './pages/productSingle';
import About from './pages/about';
import Contact from './pages/contact';
import Gopatron from './pages/gopatron';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import { useEffect, useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en')
  const changeLanguage = () => {
    if (language == 'en') {
      setLanguage('fa')
      localStorage.setItem('language', 'fa')
    } else {
      setLanguage('en')
      localStorage.setItem('language', 'en')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('language') == 'fa') {
      setLanguage('fa')
    } else {
      setLanguage('en')
    }

  }, [])

  const theme = createTheme({
    typography: {
      fontFamily: language == 'en' ? 'Jost' : 'Markazi Text',
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
        <ScrollToTop>

          <Navbar language={language} changeLanguage={changeLanguage} />
          <Routes forceRefresh={true}>
            <Route exact path="/" element={<Home language={language} />} />
            <Route exact path="/collection/:name/:id" element={<CollectionSingle language={language} />} />
            <Route exact path="/product/:name/:id" element={<ProductSingle language={language} />} />
            <Route exact path="/about-us" element={<About language={language} />} />
            <Route exact path="/contact-us" element={<Contact language={language} />} />
            <Route exact path="/gopatron" element={<Gopatron language={language} />} />
            <Route exact path="/blogs" element={<Blogs language={language} />} />
            <Route exact path="/blog/:id/:name" element={<Blog language={language} />} />
            <Route path='*' element={<NotFound language={language} />} />
          </Routes>
          <Footer language={language} changeLanguage={changeLanguage} />
        </ScrollToTop>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return children || null;
}
