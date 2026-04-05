import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="hero" className="section-hero">
          <Hero />
        </div>
        
        <div id="about" className="section-alt">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects" className="section-alt">
          <Projects />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="contact" className="section-alt">
          <Contact />
        </div>
      </main>
      
      <footer className="py-12 border-t border-glass-border glass text-center">
        <p className="text-secondary text-sm font-medium">
          © {new Date().getFullYear()} Sanket Ambre. Designed for high performance and scalability.
        </p>
      </footer>
    </div>
  );
}

export default App;
