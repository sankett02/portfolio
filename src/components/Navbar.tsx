import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, 0.1, 0.9] }}
      className="fixed top-0 left-0 w-full z-100 border-b border-white/5"
      style={{
        background: 'rgba(11, 15, 25, 0.7)',
        backdropFilter: 'blur(30px)'
      }}
    >
      {/* Top Bar - Presence & Direct Log (Hidden on Mobile to prevent collisions) */}
      <div className="hidden md:block w-full border-b border-white/5 bg-white/[0.01]">
        <div className="container flex justify-between items-center py-2.5">
          <div className="flex gap-10">
            <a href="https://www.linkedin.com/in/sanket-ambre-1ba248319/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-extrabold uppercase tracking-widest text-text-muted hover:text-accent-cyan transition-colors">LinkedIn</a>
            <a href="https://github.com/sankett02/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-extrabold uppercase tracking-widest text-text-muted hover:text-accent-cyan transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/20">Direct Log</span>
            <a href="mailto:sanket.ambre2005@gmail.com" className="text-[9px] font-bold text-accent-cyan hover:text-white transition-colors">sanket.ambre2005@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="container flex justify-between items-center py-5">
        {/* Brand name removed as requested */}
        <div className="flex-1"></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md\:flex items-center gap-12">
          <ul className="flex gap-10 text-[10px] font-extrabold uppercase tracking-widest text-text-muted">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.li 
                key={item} 
                whileHover={{ y: -2, color: "#FFFFFF" }}
                className="transition-colors cursor-pointer link-underline"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
          
          <motion.button 
            whileHover={{ scale: 1.05, background: "#00A3FF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline px-6 py-2 text-[10px] font-extrabold uppercase tracking-widest border-2"
          >
            Resume
          </motion.button>
        </div>
        
        
        {/* Navigation row continues naturally */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
