import { motion } from 'framer-motion';

const experience = [
  {
    company: 'Full Stack Developer Intern',
    period: '2025 - PRESENT',
    details: 'Architected scalable MERN suites and distributed backend infrastructures, focusing on node performance and data consistency protocols.'
  },
  {
    company: 'AI/ML Intern',
    period: '2024 - 2025',
    details: 'Implemented xAI-driven risk detection algorithms using SHAP and LIME, ensuring transparency in machine learning model outputs for enterprise security.'
  },
  {
    company: 'IBM UI/UX Design Intern',
    period: '2023 - 2024',
    details: 'Spearheaded frontend performance optimizations and established design systems for scalable industrial management dashboards.'
  }
];

const education = [
  {
    college: 'B.E. Computer Engineering',
    period: '2022 - 2026',
    details: 'University of Mumbai. Specialized in Distributed Computing and Artificial Intelligence. Honors candidate with focus on scalable software architectures.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left Side - Experience */}
        <div className="lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white text-left">Professional <br /><span className="cyan-text">Experience</span></h2>
            <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8"></div>
          </motion.div>
          
          <div className="flex flex-col gap-6">
             {experience.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" } as const}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card-professional border-none bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all hover-glow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:cyan-text transition-colors">{exp.company}</h3>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed max-w-2xl">{exp.details}</p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
        
        {/* Right Side - Education & Achievements */}
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white text-left">Academic <br /><span className="cyan-text">Background</span></h2>
            <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8"></div>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={edu.college} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="card-professional border-l-4 border-l-accent-cyan border-white/5 p-8 transition-all hover-glow"
              >
                <h3 className="text-xl font-bold mb-4 text-white group-hover:cyan-text transition-colors">{edu.college}</h3>
                <p className="text-secondary text-sm leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

