import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container py-32">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white text-left">The <span className="cyan-text">Engineer</span> & <span className="cyan-text">Analyst</span></h2>
              <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8"></div>
              <p className="text-xl leading-relaxed text-left text-text-muted">
                Results-driven <span className="text-white font-bold">Data Analyst and Software Developer</span> with expertise in Data Analysis, Machine Learning, Data Visualization, and REST API Development. 
                Proficient in <span className="cyan-text font-bold">Python, SQL, Java, and MERN Stack</span> with hands-on experience in building scalable web applications and analyzing large datasets. 
                Skilled in <span className="text-white font-bold">Excel, Tableau, Pandas, and NumPy</span> to derive actionable insights. 
                Strong foundation in problem-solving, debugging, and software optimization aligned with industry standards.
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              <div className="flex gap-8">
                 <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0 border border-accent-cyan/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-cyan"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold mb-3 text-white uppercase tracking-wider">Distributed Core</h3>
                    <p className="text-secondary text-sm leading-relaxed max-w-lg">
                      Engineering fault-tolerant backend infrastructures. Developed <span className="text-white font-bold">CloudVault</span>, a DFS with node replication and high-availability consistency models.
                    </p>
                 </div>
              </div>
              
              <div className="flex gap-8">
                 <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0 border border-accent-cyan/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-cyan"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold mb-3 text-white uppercase tracking-wider">Explainable AI</h3>
                    <p className="text-secondary text-sm leading-relaxed max-w-lg">
                      Advocating for transparent ML systems using <span className="text-white font-bold">SHAP</span> and <span className="text-white font-bold">LIME</span> to interpret and audit black-box models for critical decision-making.
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Side - Visual/Profile Element */}
        <div className="lg:w-1/2 flex justify-center">
           {/* Visual element removed as requested for professional pivot */}
        </div>
      </div>
    </section>
  );
};

export default About;
