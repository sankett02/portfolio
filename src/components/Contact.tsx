// Contact section focused on direct communication and social presence

const Contact = () => {
  return (
    <section id="contact" className="section-alt">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white">Let's <span className="cyan-text">Connect</span></h2>
          <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8 mx-auto"></div>
          <p className="text-xl mb-10 text-text-muted">Interested in collaborating or just want to chat about AI and Distributed Systems?</p>
          <a href="mailto:sanket.ambre2005@gmail.com" className="btn-primary text-[10px] tracking-widest uppercase font-extrabold mb-24">
            Send an Email
          </a>

          {/* Social Footer */}
          <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-10">
              <a href="https://www.linkedin.com/in/sanket-ambre-1ba248319/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted hover:cyan-text transition-colors">LinkedIn</a>
              <a href="https://github.com/sankett02/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted hover:cyan-text transition-colors">GitHub</a>
            </div>
            <div className="text-[9px] font-bold tracking-widest text-white/20 uppercase">
              © {new Date().getFullYear()} Sanket Ambre.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
