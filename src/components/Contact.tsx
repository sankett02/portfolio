// Contact section focused on direct communication and social presence

const Contact = () => {
  return (
    <section id="contact" className="section-alt">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold mb-4 tracking-tighter italic text-white">Let's <span className="cyan-text">Connect</span></h2>
          <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8 mx-auto"></div>
          <p className="text-xl mb-10 text-text-muted">Interested in collaborating or just want to chat about AI and Distributed Systems?</p>
          <a href="mailto:sanket.ambre2005@gmail.com" className="btn-primary text-[10px] tracking-widest uppercase font-extrabold">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
