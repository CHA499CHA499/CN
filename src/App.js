import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aurora from './components/Aurora/Aurora';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';

export default function App() {
  return (
    <div className="app-container">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        speed={0.5}
        amplitude={1.2}
      />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}