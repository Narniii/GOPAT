import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter forceRefresh={true} >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
