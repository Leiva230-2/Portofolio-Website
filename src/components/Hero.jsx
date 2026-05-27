import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/edited-photo no background.png';

const Hero = () => {
  const fullText = "Hello user!\nWelcome to my portfolio";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 40); // Faster typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Section: Typewriter with Strong White Glow */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-transparent">
        
        {/* Natural Glowing Background */}
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_60%)] z-0 pointer-events-none"
        ></motion.div>

        {/* Typewriter Text (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-3xl font-sans tracking-widest text-white whitespace-pre-line leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-1 w-[2px] h-6 md:h-8 bg-white align-middle shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </h2>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="font-sans text-[10px] tracking-widest text-white uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Second Section: Original Split Layout */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-20 overflow-hidden bg-transparent">
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Overlapping Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[500px] w-full flex justify-center items-center"
          >
            {/* Main Image */}
            <div className="absolute left-0 md:left-10 top-0 md:top-10 w-3/4 h-[400px] z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Sleek Laptop" 
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
            </div>
            {/* Secondary Overlapping Image */}
            <div className="absolute right-0 bottom-0 w-2/5 h-[250px] z-20 overflow-hidden border-4 border-[#121212] shadow-xl bg-[#1A1A1A]">
              <img 
                src={myPhoto} 
                alt="Aviel Aquino" 
                className="w-full h-full object-cover object-top transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col justify-center items-start text-left z-30 md:pl-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
               <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
               <span className="font-sans text-xs tracking-widest text-[#D4AF37] uppercase">Introduction</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#EAEAEA] leading-none mb-6">
              AVIEL <br /> AQUINO
            </h1>
            <p className="font-sans text-sm tracking-widest text-[#a3a3a3] uppercase max-w-sm leading-relaxed">
              <strong className="text-[#EAEAEA]">Digital Transformations.</strong> <br/> We write the future.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Hero;
