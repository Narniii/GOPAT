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
import NotFound from './pages/notFound';
import CollectionSingle from './pages/collectionSingle';
import ProductSingle from './pages/productSingle';
import About from './pages/about';
import Contact from './pages/contact';
import Gopatron from './pages/gopatron';
import Blogs from './pages/blogs';

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
        <Routes forceRefresh={true}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/collection/:name" element={<CollectionSingle />} />
          <Route exact path="/product/:name/:collection" element={<ProductSingle />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/gopatron" element={<Gopatron />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
