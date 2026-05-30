import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative w-full min-h-[100svh] px-6 md:px-16 py-6 md:py-8 overflow-hidden">
      <motion.div 
        className="absolute top-[12%] left-[-12%] w-[80vw] lg:w-[48vw] aspect-square bg-surface rounded-[40%] pointer-events-none"
        style={{ 
          y: y1,
          rotate: -15,
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.04), 30px 40px 80px rgba(0,0,0,0.05)'
        }}
      />
      <motion.div 
        className="absolute bottom-[8%] right-[-18%] w-[72vw] lg:w-[42vw] aspect-square bg-surface rounded-[45%] pointer-events-none"
        style={{ 
          y: y2,
          rotate: 20,
          boxShadow: 'inset -15px -15px 50px rgba(0,0,0,0.03), 20px 30px 60px rgba(0,0,0,0.04)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto min-h-[calc(100svh-3rem)] md:min-h-[calc(100svh-4rem)] flex flex-col">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          className="flex items-center justify-between gap-4"
        >
          <a href="/" className="font-bold tracking-tight text-sm sm:text-base text-foreground">
            PC
          </a>
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="mailto:prince.1978choudhary@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
            <Mail size={16} strokeWidth={1.8} />
            <span className="hidden sm:inline">Available for work</span>
          </a>
        </motion.header>

        <div className="flex-1 flex items-center justify-center py-16 md:py-20">
          <div className="max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-muted shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Software Engineer & Web Developer
            </motion.div>

            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
              className="text-[clamp(3.4rem,10vw,8.5rem)] font-bold tracking-tighter leading-[0.88] text-foreground"
          >
            PRINCE<br />CHOUDHARY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
              className="mt-8 text-lg md:text-2xl text-muted max-w-3xl font-medium leading-relaxed"
          >
              I build responsive web experiences that pair clean engineering with thoughtful interaction design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base text-muted/80 font-medium"
          >
              <a href="tel:+919710003577" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={18} strokeWidth={1.7} />
                <span className="tracking-wide">+91 9710003577</span>
              </a>
              <a href="mailto:prince.1978choudhary@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={18} strokeWidth={1.7} />
                <span>prince.1978choudhary@gmail.com</span>
              </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.87, 0, 0.13, 1] }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
              <a href="#work" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-center font-medium text-background transition-transform duration-300 hover:scale-105">
                View Work
                <ArrowDown size={18} strokeWidth={1.8} />
              </a>
              <Link to="/resume" className="w-full sm:w-auto rounded-full border border-border bg-surface/70 px-8 py-4 text-center font-medium text-foreground transition-colors duration-300 hover:bg-surface">
              Resume
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.87, 0, 0.13, 1] }}
              className="mt-10 flex items-center justify-center gap-8 text-muted"
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

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: [0.87, 0, 0.13, 1] }}
              className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6"
            >
              {[
                ['3+', 'Projects'],
                ['MERN', 'Stack'],
                ['2025', 'Latest work'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</dt>
                  <dd className="mt-2 text-2xl font-bold tracking-tight text-foreground">{value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
