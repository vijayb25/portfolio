import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner/Banner';
import ParticlesBackground from './ParticlesBackground';
import './index.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import About from './pages/About';
import Works from './pages/Work';
import Contact from './pages/Contact';
import Home from './pages/Home';

function ConditionalBanner() {
  const location = useLocation();

  // Define the paths where you want to hide the banner
  const hiddenBannerPaths = ['/about', '/contact', '/works'];

  // Check if the current path matches any of the hidden paths
  const shouldHideBanner = hiddenBannerPaths.includes(location.pathname);

  return !shouldHideBanner ? <Banner /> : null;
}

function App() {

  return (
    <>
    <Router>
        <ParticlesBackground />
        <Header/>
        <ConditionalBanner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </Router>
    </>
  )
}

export default App
