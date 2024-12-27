import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground'; // Import particles

const App = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-200 to-purple-400 dark:bg-darkTheme dark:bg-none dark:text-white min-h-screen overflow-x-hidden font-Outfit leading-8">
      {/* Elastic Skin Background */}
      <div className="absolute inset-0 -z-20 animate-elasticFlow bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 opacity-80"></div>

      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      {/* Elastic Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-96 h-96 rounded-full bg-blue-500 opacity-50 animate-elasticRipple"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
