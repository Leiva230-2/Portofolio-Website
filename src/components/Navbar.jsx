import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About', 'Portfolio', 'Contact'];

const FullNavbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full flex items-center justify-between px-10 md:px-20 fixed top-0 left-0 z-50 py-8 pointer-events-auto"
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

const PillNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
        initial={{ borderRadius: 50 }}
        animate={{
          backgroundColor: isHovered ? "rgba(20, 20, 20, 0.9)" : "rgba(20, 20, 20, 0.15)",
          boxShadow: isHovered ? "0 0 20px rgba(174, 167, 163, 0.2)" : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="pointer-events-auto flex items-center backdrop-blur-md border border-white/10 overflow-hidden"
        style={{ height: '56px', padding: '0 8px' }}
      >
        <div className="flex items-center h-full">
          <AnimatePresence initial={false}>
            {navItems.map((item) => {
              const isActive = activeItem === item;
              const show = isHovered || isActive;

              return show && (
                <motion.div
                  key={item}
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="overflow-hidden flex items-center h-full"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setActiveItem(item)}
                    className={`h-10 px-5 rounded-full flex items-center justify-center whitespace-nowrap text-xs font-sans tracking-widest transition-all duration-300 ${
                      isActive && isHovered
                        ? 'bg-[#AEA7A3]/20 text-[#AEA7A3]'
                        : isActive && !isHovered
                        ? 'text-[#AEA7A3]'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.toUpperCase()}
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.nav>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initially
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isScrolled && <FullNavbar key="full" />}
      </AnimatePresence>
      <AnimatePresence>
        {isScrolled && <PillNavbar key="pill" />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
