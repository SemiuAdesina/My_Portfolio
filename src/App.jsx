import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-400 dark:bg-darkTheme dark:bg-none dark:text-white min-h-screen overflow-x-hidden font-Outfit leading-8">
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
