import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Media } from './pages/Media';
import { Articles } from './pages/Articles';
import foalogo from "./files/pictures/FOAlogo-small.png"

function App() {
  return (
    <div className="App">
      <div className="hero-banner">
        <div className="hero-card">
          <img className="hero-title" src={foalogo} alt="" />
        </div>
      </div>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<></>} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
