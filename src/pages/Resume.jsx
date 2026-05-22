import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background">
      {/* Header Bar */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 py-4 flex items-center justify-between"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors group font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <h1 className="hidden md:block text-lg font-semibold tracking-tight text-center">
          Resume / Prince Choudhary
        </h1>

        <a 
          href="/assets/Resume_Prince%20Choudhary.pdf" 
          download="Prince_Choudhary_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-all duration-300 text-sm shadow-sm"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </a>
      </motion.header>

      {/* Main Preview Container */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 md:py-12 flex flex-col gap-6"
      >
        {/* Title details for mobile */}
        <motion.div variants={itemVariants} className="md:hidden text-center">
          <h1 className="text-2xl font-bold tracking-tight">Prince Choudhary</h1>
          <p className="text-muted text-sm mt-1">Software Engineer & Web Developer</p>
        </motion.div>

        {/* Embedded PDF Preview Frame */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden min-h-[65vh] md:min-h-[75vh] flex flex-col"
        >
          {/* Top preview chrome bar */}
          <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between text-xs text-muted font-medium">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-muted" />
              <span>Resume_Prince Choudhary.pdf</span>
            </div>
            <a 
              href="/assets/Resume_Prince%20Choudhary.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Actual PDF Viewer */}
          <div className="flex-1 relative w-full h-full bg-gray-50">
            <iframe 
              src="/assets/Resume_Prince%20Choudhary.pdf" 
              className="w-full h-full border-none absolute inset-0 hidden sm:block"
              title="Prince Choudhary Resume Preview"
            />

            {/* Mobile Fallback View */}
            <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-muted mb-4 border border-gray-100">
                <FileText size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Resume Preview</h3>
              <p className="text-muted text-sm max-w-xs mb-6">
                Mobile browsers may not support embedded PDF viewing directly. Download the resume or open it in a new tab to view.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <a 
                  href="/assets/Resume_Prince%20Choudhary.pdf" 
                  download="Prince_Choudhary_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-sm"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
                <a 
                  href="/assets/Resume_Prince%20Choudhary.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-200 text-foreground font-medium rounded-xl hover:bg-gray-50 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Open in New Tab</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Resume;
