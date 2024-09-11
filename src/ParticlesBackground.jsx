import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log('Particles.js config loaded');
      });
    }
  }, []);

  return <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, overflow: 'hidden', }} ></div>
};

export default ParticlesBackground;