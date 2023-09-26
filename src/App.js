import './App.css';
import falloutanomalybanner from "./files/pictures/falloutanomalybanner.webp"

function App() {
  return (
    <div className="App">
      <h1 className="title">Fallout Anomaly</h1>
      <img src={falloutanomalybanner} alt="banner" className="banner" />
    </div>
  );
}

export default App;
