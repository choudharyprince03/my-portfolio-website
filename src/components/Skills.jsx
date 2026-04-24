import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FileJson, Database, Github, LayoutTemplate, PieChart, Table, PenTool } from 'lucide-react';

const skills = [
  { name: 'MERN Stack', icon: <Code2 size={24} /> },
  { name: 'JavaScript', icon: <FileJson size={24} /> },
  { name: 'Python', icon: <Code2 size={24} /> },
  { name: 'GitHub', icon: <Github size={24} /> },
  { name: 'Framer', icon: <PenTool size={24} /> },
  { name: 'MySQL', icon: <Database size={24} /> },
  { name: 'Excel', icon: <Table size={24} /> },
  { name: 'Power BI', icon: <PieChart size={24} /> },
];

const Skills = () => {
  return (
    <section className="w-full py-32 px-6 md:px-16 bg-white">
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
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.87, 0, 0.13, 1] }}
              className="group flex flex-col items-center justify-center p-8 bg-[#FAFAFA] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className="text-muted group-hover:text-foreground transition-colors duration-300 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium tracking-tight text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
