import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 px-6 md:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tighter mb-16 text-center leading-tight"
        >
          LET'S BUILD SOMETHING MEANINGFUL.
        </motion.h2>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted"
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted"
            />
          </div>
          <div className="relative">
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted resize-none"
            />
          </div>
          <div className="text-center pt-8">
            <button className="px-12 py-5 bg-foreground text-background font-medium text-lg rounded-full hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
