import './App.css';
import falloutanomalybanner from "./files/pictures/falloutanomalybanner.webp"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './files/components/NavBar';

function App() {
  return (
    <div className="App">
        <div className="hero-card"></div>
        <NavBar />
        <h1 className="title">Fallout Anomaly</h1>
        <Routes>
        </Routes>
    </div>
  );
}

export default App;
