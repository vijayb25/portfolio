import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ParticlesBackground from './ParticlesBackground';
import './index.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <ParticlesBackground /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
