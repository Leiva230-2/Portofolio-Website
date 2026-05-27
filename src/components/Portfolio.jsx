import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'MEET SYNTHSCAN',
    stack: 'TECH STACK: Python, Machine Learning, Computer Vision',
    description: 'A deepfake detection system built to ensure digital authenticity. By leveraging advanced machine learning models, we analyze pixel-level inconsistencies to separate truth from generation.',
    layout: 'left',
    mainImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'MEET MED-CHECK AI',
    stack: 'TECH STACK: NLP, React, AI Integration',
    description: 'An intelligent medical assistant designed for disease detection and medication education, translating complex symptoms into actionable health insights.',
    layout: 'right',
    mainImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'MEET BOOKUGERS',
    stack: 'TECH STACK: Java, MVP Pattern, Agile',
    description: 'A robust library-to-student management application built on strict software engineering methodologies, prioritizing scalable architecture and seamless user flow.',
    layout: 'left',
    mainImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop',
    subImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  return (
    <section className="bg-transparent py-24 px-6 md:px-20 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => {
          const isLeft = project.layout === 'left';
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-0`}
            >
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative w-4/5 h-[450px]">
                  {/* Main UI Image */}
                  <div className="w-full h-[400px] absolute top-0 right-0 z-10 shadow-2xl overflow-hidden">
                    <img 
                      src={project.mainImage} 
                      alt={`${project.title} UI`}
                      className="w-full h-full object-cover object-center transition duration-500"
                    />
                  </div>
                  {/* Code/Terminal Snippet Overlapping Image */}
                  <div className={`absolute bottom-0 ${isLeft ? '-left-10' : '-right-10'} w-1/2 h-[200px] z-20 border-4 border-[#121212] shadow-xl overflow-hidden`}>
                    <img 
                      src={project.subImage} 
                      alt="Code Snippet"
                      className="w-full h-full object-cover object-center filter opacity-80 hover:opacity-100 transition duration-500"
                    />
                  </div>
                  {/* Before/After Text Labels (Stylistic) */}
                  <span className={`absolute -top-6 ${isLeft ? 'left-0' : 'right-0'} font-sans text-[10px] tracking-widest text-[#a3a3a3]`}>BEFORE</span>
                  <span className={`absolute -bottom-10 ${isLeft ? 'left-10' : 'right-10'} font-sans text-[10px] tracking-widest text-[#a3a3a3]`}>AFTER</span>
                </div>
              </div>

              {/* Text Box Section */}
              <div className={`w-full md:w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'} relative z-30`}>
                <div className={`bg-[#1A1A1A] p-12 md:p-16 max-w-lg ${isLeft ? '-ml-20' : '-mr-20'} shadow-2xl`}>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#EAEAEA] mb-4">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs tracking-widest text-[#D4AF37] mb-6 uppercase">
                    {project.stack}
                  </p>
                  <p className="font-sans text-sm text-[#a3a3a3] leading-relaxed">
                    {project.description}
                  </p>
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
