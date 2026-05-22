import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, 
    name: 'FoodZero', 
    desc: 'A Restaurant website.', 
    videoId: 'mvL-eQaFV9g', 
    role: 'Frontend Developer', 
    timeline: '2023', 
    tools: 'React.js, Tailwind CSS, Google Sheets API', 
    longDesc: 'Built a responsive restaurant web application using React.js and Tailwind CSS featuring dynamic menu displays, customer reviews section, and a live reservation system integrated with Google Sheets API — enabling real-time booking data collection without a backend. Achieved a clean, mobile-first UI across 3+ device breakpoints with optimized component structure for fast load performance.' },
    
  { id: 2,   
    name: 'Blogged', 
    desc: 'Full-Stack Blogging Platform.', 
    videoId: 'CEYswTm5HAQ', 
    role: 'Full Stack Developer', 
    timeline: '2024', 
    tools: 'React, Redux, Tailwind CSS, Appwrite', 
    longDesc: 'Built a full-stack blogging platform with React, Redux, Tailwind CSS, and Appwrite, featuring secure JWT-based authentication, role-based access control (admin/reader), and full CRUD operations across 4+ content management modules (create, edit, publish, delete). Implemented image upload pipeline via Appwrite Storage, reducing manual content handling by ~40%. Deployed on Vercel with sub-2s load times and a fully responsive UI across mobile, tablet, and desktop.' },
    
  { id: 3, 
    name: 'Moneyestate', 
    desc: 'Real estate property listing website.', 
    videoId: 'FOh0g72TR7c', 
    role: 'Frontend Developer', 
    timeline: '2025', 
    tools: 'React, Framer Motion', 
    longDesc: 'A comprehensive real estate platform for browsing, buying, and selling properties. It features a premium, modern design language, smooth page transitions, and detailed property listings to help users find their dream homes.' },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
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
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted mb-12 max-w-3xl">
          {project.desc}
        </motion.p>
        
        <motion.div variants={imageVariants} className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl mb-16 relative">
          <iframe 
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
            allow="autoplay; encrypted-media; fullscreen"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            title={project.name}
            allowFullScreen
          />
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
                The primary goal was to create an interface that felt both dynamic and premium. This involved careful attention to typography, spacing, and micro-interactions. The challenge was to balance rich media integration without compromising on performance, ensuring a seamless experience across all devices.
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
