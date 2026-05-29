import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FooterGallery from './components/FooterGallery';
import DotGrid from './components/DotGrid';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#D4AF37] selection:text-[#121212] relative z-0">
      <DotGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
      </main>
      <FooterGallery />
    </div>
  );
}

export default App;
