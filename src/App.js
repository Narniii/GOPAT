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
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter forceRefresh={true} >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
