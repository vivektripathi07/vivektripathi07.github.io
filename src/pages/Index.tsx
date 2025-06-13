
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Navigation />
      <SocialLinks />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 text-center">
        <p className="text-portfolio-slate text-sm font-mono">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;
