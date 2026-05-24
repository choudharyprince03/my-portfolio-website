import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVideoLoaded(false);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={20} /> Return to Home
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-16 pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link to="/" className="inline-flex items-center gap-2 mb-12 text-muted hover:text-foreground transition-colors group">
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide">BACK TO HOME</span>
          </Link>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          {project.name}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted mb-8 max-w-3xl">
          {project.desc}
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12 flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105"
          >
            Live Site
            <ExternalLink size={18} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-6 py-3 font-medium text-foreground transition-colors hover:bg-white"
          >
            GitHub Repo
            <Github size={18} />
          </a>
        </motion.div>
        
        <motion.div variants={imageVariants} className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl mb-16 relative">
          {isVideoLoaded ? (
            <iframe 
              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              allow="autoplay; encrypted-media; fullscreen"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              title={`${project.name} project video`}
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsVideoLoaded(true)}
              className="group absolute inset-0 w-full h-full overflow-hidden text-left"
              aria-label={`Play ${project.name} project video`}
            >
              <img
                src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                alt={`${project.name} project video thumbnail`}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" aria-hidden="true" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-foreground shadow-2xl transition-transform group-hover:scale-110">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </span>
              </span>
              <span className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/20 bg-white/85 px-5 py-4 text-sm font-medium text-foreground shadow-lg backdrop-blur md:left-auto md:right-6 md:max-w-sm">
                Click to load and play the project video.
              </span>
            </button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="md:col-span-2">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">About the Project</h2>
              <p className="text-lg text-muted leading-relaxed">
                {project.longDesc}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <span className="text-muted block text-sm uppercase tracking-widest mb-2 font-semibold">Role</span>
              <span className="text-lg font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-muted block text-sm uppercase tracking-widest mb-2 font-semibold">Timeline</span>
              <span className="text-lg font-medium">{project.timeline}</span>
            </div>
            <div>
              <span className="text-muted block text-sm uppercase tracking-widest mb-2 font-semibold">Technologies</span>
              <span className="text-lg font-medium">{project.tools}</span>
            </div>
            <div>
              <span className="text-muted block text-sm uppercase tracking-widest mb-3 font-semibold">Links</span>
              <div className="flex flex-col items-start gap-3">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors">
                  Open live website
                  <ExternalLink size={16} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors">
                  View source code
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
