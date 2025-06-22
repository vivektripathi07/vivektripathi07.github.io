import { useRef, useState } from 'react';
import { ExternalLink, Github, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const featuredProjects = [
    {
      title: 'Stock Market Screener and Backtester',
      description:
        'Stock market screener and strategy testing for entire indian stock market, backtested for over 8 years using momentuma and volumne based indicators and resulting a CAGR of 22.4%',
      tech: ['Python', 'Pandas', 'TA-Lib', 'Quantstats'],
      github: 'https://github.com/vivektripathi07/Stock_Market_Screener',
      youtube: '',
      external: '',
      image:
        'https://scanz.com/wp-content/uploads/2020/04/Technical-Screeners-Moving-Averages-980x470.jpg.webp',
    },
  ];

/*

  const otherProjects = [
    {
      title: 'Integrating Algolia Search with WordPress Multisite',
      description:
        'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      tech: ['Algolia', 'WordPress', 'PHP'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://github.com',
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with React and Firebase',
      tech: ['React', 'Firebase', 'Styled Components'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://google-keep-clone.netlify.com',
    },
    {
      title: 'Apple Music Player',
      description: 'A minimal Apple Music player built with React and Apple MusicKit JS',
      tech: ['React', 'Apple MusicKit JS', 'Styled Components'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://apple-music-player.netlify.com',
    },
        {
      title: 'Apple Music Player',
      description: 'A minimal Apple Music player built with React and Apple MusicKit JS',
      tech: ['React', 'Apple MusicKit JS', 'Styled Components'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://apple-music-player.netlify.com',
    },
        {
      title: 'Apple Music Player',
      description: 'A minimal Apple Music player built with React and Apple MusicKit JS',
      tech: ['React', 'Apple MusicKit JS', 'Styled Components'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://apple-music-player.netlify.com',
    },
        {
      title: 'Apple Music Player',
      description: 'A minimal Apple Music player built with React and Apple MusicKit JS',
      tech: ['React', 'Apple MusicKit JS', 'Styled Components'],
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      external: 'https://apple-music-player.netlify.com',
    },
  ];

*/

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading numbered-heading">Some Things I've Built</h2>

        {/* Featured Projects */}
        <div className="space-y-8 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-portfolio-dark-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-portfolio-dark-lighter"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <a href={project.external} className="block">
                    <div className="rounded overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="font-mono text-portfolio-green text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-portfolio-lightest-slate mb-4 hover:text-portfolio-green transition-colors">
                    <a href={project.external}>{project.title}</a>
                  </h3>
                  <p className="text-portfolio-slate mb-4 leading-relaxed">{project.description}</p>

                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-portfolio-dark-lighter text-portfolio-green rounded-full border border-portfolio-green"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <Youtube size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Header */}
        {/* <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-portfolio-lightest-slate">
            Other Noteworthy Projects
          </h3>
        </div> */}

        {/* Horizontally Scrollable Cards with Buttons Overlayed */}
        <div
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-portfolio-dark-light rounded-full backdrop-blur-md transition-opacity ${
              hovering ? 'opacity-80 hover:opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-portfolio-dark-light rounded-full backdrop-blur-md transition-opacity ${
              hovering ? 'opacity-80 hover:opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {/* {otherProjects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] bg-portfolio-dark-light p-6 rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex-shrink-0"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 text-portfolio-green">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M20,16H8V4H20V16M16,6V14L11.5,9.5L16,6Z" />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <Youtube size={18} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-portfolio-lightest-slate mb-3 group-hover:text-portfolio-green transition-colors">
                  {project.title}
                </h4>

                <p className="text-portfolio-slate text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-portfolio-dark-lighter text-portfolio-green rounded-full border border-portfolio-green"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <a href="https://github.com" className="btn-outline">
            Show More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
