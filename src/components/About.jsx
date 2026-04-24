import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const About = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <section id="about" className="w-full py-40 px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          className="text-2xl md:text-4xl leading-relaxed md:leading-relaxed font-medium text-muted"
        >
          I am a developer who believes in the intersection of <span className="text-foreground">logic</span> and <span className="text-foreground">aesthetics</span>. I build digital experiences that are not only robust under the hood, but also feel <span className="text-foreground">effortless and refined</span> to the user. My mindset is simple: strip away the unnecessary, focus on what matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
          className="mt-16"
        >
          <button 
            onClick={() => setIsLetterOpen(true)}
            className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            Read My Letter
          </button>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {isLetterOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-md"
            onClick={() => setIsLetterOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FAFAFA] rounded-2xl shadow-2xl p-8 md:p-16 text-left hide-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 p-2 text-muted hover:text-foreground transition-colors"
                onClick={() => setIsLetterOpen(false)}
                aria-label="Close letter"
              >
                <X size={24} />
              </button>
              
              <div className="prose prose-lg text-foreground max-w-none">
                <h3 className="text-3xl font-bold tracking-tight mb-8">A Note on Craft.</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Design is not just what it looks like and feels like. Design is how it works. When I approach a new project, my goal is never to just write code—it's to architect an experience.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  In a world full of visual noise and complex interfaces, I believe there is immense power in minimalism. Every component, every animation, and every line of text should serve a purpose. If it doesn't, it gets removed.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  The websites and applications we interact with daily shape our mood and productivity. A laggy, cluttered interface creates frustration. A smooth, meticulously designed interface creates joy. I strive to build the latter.
                </p>
                <p className="text-foreground font-medium mt-12">
                  — Prince Choudhary
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default About;
