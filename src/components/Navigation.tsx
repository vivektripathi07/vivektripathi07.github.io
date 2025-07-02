
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Determine active section
      const sections = ['about', 'experience', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-6 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-dark/95 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-2xl font-mono font-bold text-portfolio-green">
          <a href="#" className="transition-colors hover:text-portfolio-green">
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ol className="flex items-center space-x-8 list-none counter-reset-section">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`group flex items-center py-3 text-sm font-mono transition-colors ${
                    activeSection === item.id ? 'text-portfolio-green' : 'hover:text-portfolio-green'
                  }`}
                >
                  <span className="mr-1 text-portfolio-green text-xs">
                    0{index + 1}.
                  </span>
                  <span className="link-underline">{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
          <a
            href="src\components\assets\resume.pdf"
            download
            // target="_blank"
            // rel="noopener noreferrer"
            className="btn-outline ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-portfolio-green hover:text-portfolio-lightest-slate transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-portfolio-dark-light backdrop-blur-sm" />
          <div className="absolute right-0 top-0 h-full w-3/4 bg-portfolio-dark-light shadow-xl">
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-portfolio-green hover:text-portfolio-lightest-slate transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="px-6">
              <ol className="space-y-6 list-none counter-reset-section">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-center text-lg font-mono transition-colors ${
                        activeSection === item.id ? 'text-portfolio-green' : 'hover:text-portfolio-green'
                      }`}
                    >
                      <span className="block text-portfolio-green text-sm mb-1">
                        0{index + 1}.
                      </span>
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline block text-center"
                  >
                    Resume
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
