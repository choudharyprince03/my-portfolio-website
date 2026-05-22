import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, FileJson, Database, Github, PieChart, Table, PenTool } from 'lucide-react';

const skills = [
  { name: 'MERN Stack', icon: <Code2 size={32} />, description: 'Building full-stack web applications using MongoDB, Express.js, React, and Node.js.' },
  { name: 'JavaScript', icon: <FileJson size={32} />, description: 'Writing robust, modern ES6+ code for interactive user interfaces and complex logic.' },
  { name: 'Python', icon: <Code2 size={32} />, description: 'Developing backend services, automation scripts, and performing data analysis.' },
  { name: 'GitHub', icon: <Github size={32} />, description: 'Proficient in version control, collaborative workflows, and setting up CI/CD pipelines.' },
  { name: 'Framer', icon: <PenTool size={32} />, description: 'Designing interactive prototypes and adding high-performance fluid animations.' },
  { name: 'MySQL', icon: <Database size={32} />, description: 'Designing relational databases, writing queries, and optimizing data retrieval.' },
  { name: 'Excel', icon: <Table size={32} />, description: 'Advanced data manipulation, complex formulas, charting, and spreadsheet automation.' },
  { name: 'Power BI', icon: <PieChart size={32} />, description: 'Creating interactive, data-driven dashboards and business intelligence reports.' },
];

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.87, 0, 0.13, 1] }}
      className="group w-full h-[220px] md:h-[260px] cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#FAFAFA] rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="text-muted group-hover:text-foreground transition-colors duration-300 mb-6">
            {skill.icon}
          </div>
          <h3 className="text-lg md:text-xl font-medium tracking-tight text-center">{skill.name}</h3>
          <span className="text-[10px] text-muted/50 uppercase tracking-widest mt-6 absolute bottom-4 md:bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">Click to flip</span>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 p-6 bg-foreground text-background rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-foreground"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4">{skill.name}</h3>
          <p className="text-sm md:text-base opacity-90 leading-relaxed text-balance">{skill.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="w-full py-32 px-6 md:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center"
        >
          TECHNOLOGIES I WORK WITH
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
