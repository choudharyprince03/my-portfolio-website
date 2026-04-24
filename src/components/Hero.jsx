import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import mainPhoto from '../assets/mainphoto.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 md:px-16 py-24 lg:py-0 overflow-hidden">
      {/* Background Depth Mountains */}
      <motion.div 
        className="absolute top-[10%] left-[-10%] w-[80vw] lg:w-[50vw] aspect-square bg-white rounded-[40%] pointer-events-none"
        style={{ 
          y: y1,
          rotate: -15,
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.04), 30px 40px 80px rgba(0,0,0,0.05)'
        }}
      />
      <motion.div 
        className="absolute top-[30%] left-[20%] w-[70vw] lg:w-[40vw] aspect-square bg-white rounded-[45%] pointer-events-none"
        style={{ 
          y: y2,
          rotate: 20,
          boxShadow: 'inset -15px -15px 50px rgba(0,0,0,0.03), 20px 30px 60px rgba(0,0,0,0.04)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 pt-10 lg:pt-0">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[55%]">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            className="text-[clamp(3rem,11vw,8rem)] font-bold tracking-tighter leading-[0.9]"
          >
            PRINCE<br />CHOUDHARY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
            className="mt-8 text-lg md:text-2xl text-muted max-w-lg font-medium"
          >
            Building digital experiences that feel effortless and refined.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.87, 0, 0.13, 1] }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6"
          >
            <a href="#work" className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform duration-300 text-center w-full sm:w-auto">
              View Work
            </a>
            <a href="#contact" className="px-8 py-4 text-foreground font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 text-center w-full sm:w-auto">
              Contact
            </a>
          </motion.div>

          {/* Hero Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.87, 0, 0.13, 1] }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-muted"
          >
            <a href="https://github.com/choudharyprince03" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/choudharyprince03" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/princechoudharyy05" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a href="mailto:prince.1978choudhary@gmail.com" className="hover:text-foreground hover:-translate-y-1 transition-all duration-300" aria-label="Email">
              <Mail size={24} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        {/* Right Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
          className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] rounded-3xl overflow-hidden shadow-sm">
            <img 
              src={mainPhoto} 
              alt="Prince Choudhary" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
