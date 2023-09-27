import './App.css';
import falloutanomalybanner from "./files/pictures/falloutanomalybanner.webp"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Media } from './pages/Media';
import { Articles } from './pages/Articles';

function App() {
  return (
    <div className="App">
      <div className="hero-banner">
        <div className="hero-card">
          <h1 className="hero-title">Fallout Anomaly</h1>
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
