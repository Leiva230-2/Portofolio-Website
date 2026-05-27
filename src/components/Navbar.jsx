import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Transform background color from transparent to DARK NIGHT (#5c5651)
  const backgroundColor = useTransform(
    scrollY,
    [0, windowHeight - 150, windowHeight],
    ['rgba(92, 86, 81, 0)', 'rgba(92, 86, 81, 0)', 'rgba(92, 86, 81, 0.98)']
  );

  // Transform padding to make it compact when scrolled
  const paddingY = useTransform(
    scrollY,
    [0, windowHeight],
    ['2rem', '1rem']
  );

  return (
    <motion.nav 
      style={{ backgroundColor, paddingTop: paddingY, paddingBottom: paddingY }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full flex items-center justify-between px-10 md:px-20 fixed top-0 left-0 z-50 backdrop-blur-sm shadow-sm border-b border-transparent"
    >
      <div className="hidden md:flex gap-8 text-xs font-sans tracking-widest text-white">
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">HOME</a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">ABOUT</a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">PORTFOLIO</a>
      </div>

      <div className="text-2xl font-serif tracking-widest text-center flex-1 md:flex-none">
        <a href="#" className="text-white">AVIEL AQUINO</a>
      </div>

      <div className="hidden md:flex gap-8 text-xs font-sans tracking-widest text-white">
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">COMPETITIONS</a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">CONTACT</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
