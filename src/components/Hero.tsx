import { motion } from 'framer-motion';

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Hero = () => {
  const name = "[Sanket Ambre]";
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-48 pb-20">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dotGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.4)" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dotGrid)" />
         </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-left"
        >
          <div className="mb-6">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-extrabold uppercase tracking-widest text-text-muted"
            >
              Computer Engineering Candidate
            </motion.span>
          </div>
          
          <h1 className="text-7xl mb-6 font-extrabold tracking-tighter text-white">
            <span className="cyan-text flex">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1 h-12 bg-accent-cyan ml-2 mt-2"
              />
            </span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-6xl mb-10 font-extrabold tracking-tighter text-white leading-tight"
          >
            Data Analyst & <br />Software Developer
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mb-12"
          >
            <p className="text-xl max-w-2xl leading-relaxed mb-6 font-medium">
              <span className="cyan-text font-bold uppercase tracking-wide text-sm underline decoration-accent-cyan/30 underline-offset-8">Passionate Fresher Seeking High-Impact Roles</span>
            </p>
            <p className="text-xl max-w-2xl leading-relaxed text-text-muted">
              Building intelligent AI systems and scalable distributed applications. 
              Focused on performance-driven solutions and system-level thinking.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, type: "spring", stiffness: 200 } as const}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 163, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              Lets Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex items-center gap-10 text-secondary opacity-50 grayscale hover:grayscale-0 transition-all hover:opacity-100"
            >
               <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] animate-float">Scalability</span>
               <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] animate-float" style={{ animationDelay: '0.5s' }}>Intelligence</span>
               <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] animate-float" style={{ animationDelay: '1s' }}>Impact</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
