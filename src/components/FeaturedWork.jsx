import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const projects = [
  { id: 1, name: 'FoodZero', desc: 'Restaurant website.', videoId: 'mvL-eQaFV9g' },
  { id: 2, name: 'Blogger', desc: 'A blogging platform.', videoId: 'CEYswTm5HAQ' },
  { id: 3, name: 'Moneyestate', desc: 'Real estate property listing website.', videoId: 'FOh0g72TR7c' },
];

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="overflow-hidden bg-gray-100 rounded-lg aspect-[4/3] w-full shadow-sm group-hover:shadow-2xl transition-shadow duration-500 relative">
        <iframe 
          src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.35] transition-all duration-700 ease-out"
          style={{ border: 'none' }}
          title={project.name}
        />
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="text-muted mt-1">{project.desc}</p>
        </div>
        <span className="text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          EXPLORE →
        </span>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const scrollContainerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="w-full py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            FEATURED WORK
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-16 snap-x snap-mandatory hide-scrollbar scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedVideo} />
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-[-20px] pb-8 text-muted text-sm font-medium tracking-widest uppercase">
          ← Swipe to explore →
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                  allow="autoplay; encrypted-media; fullscreen"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title={selectedVideo.name}
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default FeaturedWork;
