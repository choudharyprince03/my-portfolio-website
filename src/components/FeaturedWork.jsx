import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const openProject = () => navigate(`/project/${project.id}`);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center cursor-pointer"
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProject();
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.name} project details`}
    >
      <div className="overflow-hidden bg-gray-100 rounded-lg aspect-[4/3] w-full shadow-sm group-hover:shadow-2xl transition-shadow duration-500 relative">
        <img 
          src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
          alt={`${project.name} project preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover scale-[1.3] grayscale opacity-80 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.35]"
        />
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-muted transition-colors">
            {project.name}
          </h3>
          <p className="text-muted mt-1 max-w-xl">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.split(', ').slice(0, 3).map((tool) => (
              <span key={tool} className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-muted">
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              Live Site
              <ExternalLink size={15} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white"
            >
              GitHub
              <Github size={15} />
            </a>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
          Explore
          <ExternalLink size={16} />
        </span>
      </div>
    </motion.article>
  );
};

const FeaturedWork = () => {
  const scrollContainerRef = useRef(null);

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
    <section id="work" className="w-full py-28 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted"
            >
              Selected projects
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"
            >
              FEATURED WORK
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 sm:gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-3 md:p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 md:p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </motion.div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="hide-scrollbar flex overflow-x-auto gap-8 pb-16 snap-x snap-mandatory scroll-smooth" 
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-[-20px] pb-8 text-muted text-sm font-medium tracking-widest uppercase">
          Swipe to explore
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
