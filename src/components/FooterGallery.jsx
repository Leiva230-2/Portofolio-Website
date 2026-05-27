import React from 'react';
import { motion } from 'framer-motion';

const FooterGallery = () => {
  return (
    <footer className="bg-transparent pt-24 pb-8 px-6 md:px-20 border-t border-[#121212]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#EAEAEA] mb-4">
            A FEW OTHER FAVORITES
          </h2>
          <p className="font-sans text-xs tracking-widest text-[#a3a3a3] uppercase">
            Competitive Programming & Infrastructure
          </p>
        </motion.div>

        {/* 3-Column Image Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-32">
          {/* Image 1: Arkavidia */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[500px] border border-[#2A2A2A] p-2"
          >
            <div className="w-full h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="Arkavidia Competition" 
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 2: COMPFEST */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[500px] border border-[#2A2A2A] p-2"
          >
            <div className="w-full h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
                alt="COMPFEST Moment" 
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 3: Cisco Network */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-[500px] border border-[#2A2A2A] p-2"
          >
            <div className="w-full h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                alt="Cisco Topology" 
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[#2A2A2A] pt-8">
          <p className="font-serif text-[#a3a3a3] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AVIEL AQUINO.
          </p>
          <div className="flex gap-8 font-sans text-xs tracking-widest uppercase">
            <a href="mailto:hello@example.com" className="text-[#a3a3a3] hover:text-[#D4AF37] transition-colors">
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#a3a3a3] hover:text-[#D4AF37] transition-colors">
              GitHub
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterGallery;
