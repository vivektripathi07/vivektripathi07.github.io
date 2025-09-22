
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SocialLinks from '../components/SocialLinks';
import Research from '@/components/Research';
import Certifications from '@/components/Certification';

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
        <Research/>
        <Certifications/>
        <Contact />
      </main>
      
    <footer className="py-6 text-center">
      <p className="text-portfolio-slate text-sm font-mono">
        © {new Date().getFullYear()} Vivek Tripathi · Inspired by
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-green hover:underline hover:text-portfolio-lightest-slate ml-1 transition-colors"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>


    </div>
  );
};

export default Index;
