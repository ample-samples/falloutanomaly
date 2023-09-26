import './App.css';
import falloutanomalybanner from "./files/pictures/falloutanomalybanner.webp"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './files/components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="hero-banner">
        <div className="hero-card">
          <h1 className="hero-title">Fallout Anomaly</h1>
        </div>
      </div>
        <NavBar />
        <Routes>
        </Routes>
    </div>
  );
}

export default App;
