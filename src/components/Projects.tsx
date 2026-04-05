import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import cloudvaultImg from '../assets/cloudvault_dfs_viz_1775382725266.png';
import cropyieldImg from '../assets/crop_yield_ai_viz_1775382702553.png';
import healthcareImg from '../assets/ehealthcare_system_viz_1775382744643.png';

const projects = [
  {
    title: 'CloudVault DFS',
    category: 'Distributed Systems',
    problem: 'Fragmentation in localized storage clusters.',
    solution: 'Chunk-based distributed storage with node replication.',
    impact: '3 parallel chunk processing for fault tolerance.',
    tags: ['Python', 'Flask', 'Redis', 'Docker'],
    image: cloudvaultImg
  },
  {
    title: 'Precision Crop Yield AI',
    category: 'Machine Learning',
    problem: 'Black-box predictions in agriculture.',
    solution: 'SHAP-integrated rate of productivity models (t/ha).',
    impact: '98% accuracy in rate-based yield forecasting.',
    tags: ['Scikit-Learn', 'SHAP', 'Pandas', 'PostgreSQL'],
    image: cropyieldImg
  },
  {
    title: 'E-Healthcare Hub',
    category: 'Full Stack',
    problem: 'Healthcare data silos and accessibility.',
    solution: 'Role-based access control with real-time patient monitoring.',
    impact: 'Reduced data latency in doctor-patient interaction.',
    tags: ['React', 'Node.js', 'Auth0', 'MongoDB'],
    image: healthcareImg
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Distributed Systems', 'Machine Learning', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="container overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white">Featured <br /><span className="cyan-text">Solutions</span></h2>
          <div className="w-20 h-1.5 bg-accent-cyan rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'filter-btn-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              } as const}
              whileHover={{ y: -10 }}
              className="card-professional border-none bg-white/[0.02] p-0 overflow-hidden flex flex-col hover-glow h-full"
            >
              <div className="p-5 pb-0">
                <div className="bg-white/5 rounded-t-lg px-4 py-2 flex gap-1.5 border border-white/10 border-b-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                </div>
                <div className="relative h-32 overflow-hidden rounded-b-lg border border-white/10 bg-[#0F172A] group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-2 left-2">
                     <span className="text-[7px] font-extrabold uppercase tracking-widest bg-accent-cyan/90 text-white px-2 py-1 rounded-sm">
                        {project.category}
                     </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight underline decoration-accent-cyan/10 decoration-4 underline-offset-8 group-hover:decoration-accent-cyan/50 transition-all">{project.title}</h3>
                
                <div className="space-y-6 mb-8 flex-grow">
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] cyan-text block mb-1">Problem</span>
                    <p className="text-sm text-text-muted leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white block mb-1">Impact</span>
                    <p className="text-sm text-text-muted font-bold">{project.impact}</p>
                  </div>
                </div>

                <div className="tag-container mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag text-[9px] border-white/5 bg-white/5 hover:bg-accent-cyan/10 transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
