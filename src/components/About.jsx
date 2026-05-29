import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-transparent py-24 px-6 md:px-20 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: Title & Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-5/12 md:sticky top-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <span className="font-sans text-xs tracking-widest text-[#D4AF37] uppercase">Behind the Code</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-[#EAEAEA] leading-tight mb-6">
            Architecting <br className="hidden md:block"/> Intelligence.
          </h2>
          <p className="font-sans text-sm tracking-widest text-[#a3a3a3] uppercase leading-relaxed">
            I blend analytical rigor with creative problem solving to build systems that learn.
          </p>
        </motion.div>

        {/* Right Side: Detailed Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full md:w-7/12 flex flex-col gap-8 text-[#EAEAEA] font-sans font-light leading-loose"
        >
          <p>
            Currently pursuing my Computer Science degree at BINUS University, my journey into technology was driven by a deep fascination with how data can be transformed into actionable, intelligent systems. 
          </p>
          <p>
            As a Data Scientist and Software Engineer, I specialize in Machine Learning, Natural Language Processing, and Computer Vision. I thrive in the intersection of theory and application—whether it's training neural networks to detect deepfakes, or architecting robust backend systems that scale gracefully.
          </p>
          <p>
            My philosophy is simple: build tools that matter. I approach every problem with a meticulous engineering mindset, ensuring that the solutions I develop are not just technically sound, but inherently user-centric and beautifully crafted.
          </p>

          {/* Skills Grid */}
          <div className="mt-8 pt-8 border-t border-[#1A1A1A]">
            <h3 className="font-sans text-xs tracking-widest text-[#D4AF37] uppercase mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
              {[
                "Machine Learning", "Deep Learning", "Computer Vision", 
                "NLP", "Python Ecosystem", "React & Frontend", 
                "Java / Software Eng", "System Architecture", "Agile Methods"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AEA7A3]"></span>
                  <span className="text-[10px] tracking-widest text-[#a3a3a3] uppercase">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
