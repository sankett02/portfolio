import { motion } from 'framer-motion';

const skills = {
  "Software Engineering": ["Python", "Java", "Node.js", "REST API", "MERN Stack", "Software Optimization"],
  "Data Analysis & AI": ["SQL", "Pandas", "NumPy", "TensorFlow", "Scikit-Learn", "Machine Learning"],
  "Analysis & Visualization": ["Data Analysis", "Tableau", "Excel", "Data Visualization", "SHAP", "Problem Solving"]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } as const
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section-alt overflow-hidden">
      <div className="container overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white">Technical <br /><span className="cyan-text">Arsenal</span></h2>
          <div className="w-20 h-1.5 bg-accent-cyan rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card-professional hover-glow"
            >
              <h3 className="text-sm font-extrabold uppercase tracking-widest mb-8 cyan-text opacity-70">
                {category}
              </h3>
              <div className="tag-container">
                {items.map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.1, color: "#FFFFFF", borderColor: "#00A3FF" }}
                    className="tag cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
