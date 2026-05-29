import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import binusImage1 from '../assets/20250622_175204.jpg';
import binusImage2 from '../assets/WhatsApp Image 2026-05-29 at 16.18.53.jpeg';
import compImage1 from '../assets/FindItUGM.png';

const timelineNodes = [
  {
    id: 0,
    date: 'AUGUST 2024',
    title: 'STARTED AT BINUS',
    stack: 'EDUCATION',
    description: 'Began my journey in Computer Science at BINUS University, focusing on foundational software engineering, algorithms, and data structures.',
    mainImage: binusImage1,
    subImage: binusImage2
  },
  {
    id: 1,
    date: '17 MAY 2025',
    title: 'FIRST COMPETITION',
    stack: 'TECH STACK: FIGMA, UI/UX DESIGN',
    description: "My first competition during my 2nd semester. Before diving into code and full-stack development, my team and I designed a conceptual app aimed at empowering blind and deaf individuals to find work opportunities. While we didn't win, this experience sparked my passion for tech and gave me a strong foundation in Figma and user-centric design.",
    mainImage: compImage1
  },
  {
    id: 2,
    date: 'LATE 2025',
    title: 'MEET SYNTHSCAN',
    stack: 'TECH STACK: Python, Machine Learning, Computer Vision',
    description: 'A deepfake detection system built to ensure digital authenticity. By leveraging advanced machine learning models, we analyze pixel-level inconsistencies to separate truth from generation.',
    mainImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'EARLY 2026',
    title: 'MEET MED-CHECK AI',
    stack: 'TECH STACK: NLP, React, AI Integration',
    description: 'An intelligent medical assistant designed for disease detection and medication education, translating complex symptoms into actionable health insights.',
    mainImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop'
  },
  {
    id: 4,
    date: 'MID 2026',
    title: 'MEET BOOKUGERS',
    stack: 'TECH STACK: Java, MVP Pattern, Agile',
    description: 'A robust library-to-student management application built on strict software engineering methodologies, prioritizing scalable architecture and seamless user flow.',
    mainImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  const containerRef = useRef(null);

  return (
    <section className="bg-transparent py-32 px-6 md:px-12 lg:px-20 border-t border-[#1A1A1A] overflow-hidden relative" ref={containerRef} id="portfolio">
      <div className="max-w-7xl mx-auto mb-32 text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-serif text-[#EAEAEA] tracking-widest uppercase">My Journey</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-40 md:gap-64 pb-32">
        {timelineNodes.map((node, index) => {
          const isLeft = index % 2 === 0; 
          const numberString = (index + 1).toString().padStart(2, '0');

          return (
            <motion.div 
              key={node.id} 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex items-center justify-center min-h-[400px]"
            >
              <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-left-10 md:-left-20' : '-right-10 md:-right-20'} z-0 select-none pointer-events-none`}>
                <span className="text-[12rem] md:text-[20rem] font-serif text-[#D4AF37] opacity-[0.03] leading-none font-bold">
                  {numberString}
                </span>
              </div>

              <div className="hidden md:flex w-full relative z-10 items-center">
                {isLeft ? (
                  <>
                    <div className="w-[55%] z-10 relative">
                      <img src={node.mainImage} alt={node.title} className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition duration-700 bg-[#1A1A1A]" />
                      {node.subImage && (
                        <div className="absolute -bottom-8 -left-8 w-[45%] z-30">
                          <img src={node.subImage} alt="Snippet" className="w-full h-auto rounded-lg border-4 border-[#121212] shadow-2xl object-cover" />
                        </div>
                      )}
                    </div>
                    <div className="w-[55%] -ml-[10%] z-20 mt-16 group">
                      <div className="bg-[#121212]/95 backdrop-blur-xl p-10 lg:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 rounded-2xl group-hover:border-[#D4AF37]/30 transition duration-500">
                         <span className="inline-block border border-[#D4AF37] rounded-full px-4 py-1.5 mb-6 bg-[#D4AF37]/10">
                           <span className="font-sans text-xs tracking-[0.2em] text-[#D4AF37] font-bold uppercase">{node.date}</span>
                         </span>
                         <h3 className="font-serif text-3xl lg:text-4xl text-[#EAEAEA] mb-4 leading-tight">{node.title}</h3>
                         <p className="font-sans text-[10px] lg:text-xs tracking-widest text-[#a3a3a3] mb-6 uppercase">{node.stack}</p>
                         <p className="font-sans text-sm lg:text-base text-[#a3a3a3] leading-relaxed">{node.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[55%] z-20 mt-16 group text-right flex flex-col items-end">
                      <div className="bg-[#121212]/95 backdrop-blur-xl p-10 lg:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 rounded-2xl group-hover:border-[#D4AF37]/30 transition duration-500">
                         <span className="inline-block border border-[#D4AF37] rounded-full px-4 py-1.5 mb-6 bg-[#D4AF37]/10">
                           <span className="font-sans text-xs tracking-[0.2em] text-[#D4AF37] font-bold uppercase">{node.date}</span>
                         </span>
                         <h3 className="font-serif text-3xl lg:text-4xl text-[#EAEAEA] mb-4 leading-tight">{node.title}</h3>
                         <p className="font-sans text-[10px] lg:text-xs tracking-widest text-[#a3a3a3] mb-6 uppercase">{node.stack}</p>
                         <p className="font-sans text-sm lg:text-base text-[#a3a3a3] leading-relaxed">{node.description}</p>
                      </div>
                    </div>
                    <div className="w-[55%] -ml-[10%] z-10 relative">
                      <img src={node.mainImage} alt={node.title} className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition duration-700 bg-[#1A1A1A]" />
                      {node.subImage && (
                        <div className="absolute -bottom-8 -right-8 w-[45%] z-30">
                          <img src={node.subImage} alt="Snippet" className="w-full h-auto rounded-lg border-4 border-[#121212] shadow-2xl object-cover" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex md:hidden flex-col w-full relative z-10 pt-10">
                 <div className="w-full z-10 -mb-16 relative px-2">
                    <img src={node.mainImage} alt={node.title} className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-2xl border border-white/10 bg-[#1A1A1A]" />
                 </div>
                 <div className="w-[95%] mx-auto z-20">
                    <div className="bg-[#121212]/95 backdrop-blur-xl p-6 shadow-2xl border border-white/10 rounded-2xl">
                       <span className="inline-block border border-[#D4AF37] rounded-full px-3 py-1 mb-4 bg-[#D4AF37]/10">
                         <span className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] font-bold uppercase">{node.date}</span>
                       </span>
                       <h3 className="font-serif text-2xl text-[#EAEAEA] mb-3 leading-tight">{node.title}</h3>
                       <p className="font-sans text-[10px] tracking-widest text-[#a3a3a3] mb-4 uppercase">{node.stack}</p>
                       <p className="font-sans text-sm text-[#a3a3a3] leading-relaxed">{node.description}</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
