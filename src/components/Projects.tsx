import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com',
      external: 'https://spotify-profile.herokuapp.com/',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop',
    },
    {
      title: 'Halcyon Theme',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: 'https://github.com',
      external: 'https://halcyon-theme.netlify.com/',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    },
    {
      title: 'OctoProfile',
      description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and recent activity.',
      tech: ['Next.js', 'Chart.js', 'GitHub API', 'Vercel'],
      github: 'https://github.com',
      external: 'https://octoprofile.vercel.app',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    },
  ];

  const otherProjects = [
    {
      title: 'Integrating Algolia Search with WordPress Multisite',
      description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      tech: ['Algolia', 'WordPress', 'PHP'],
      github: 'https://github.com',
      external: 'https://github.com',
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with React and Firebase',
      tech: ['React', 'Firebase', 'Styled Components'],
      github: 'https://github.com',
      external: 'https://google-keep-clone.netlify.com',
    },
    {
      title: 'Apple Music Player',
      description: 'A minimal Apple Music player built with React and Apple MusicKit JS',
      tech: ['React', 'Apple MusicKit JS', 'Styled Components'],
      github: 'https://github.com',
      external: 'https://apple-music-player.netlify.com',
    },
  ];

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
                {/* Project Image */}
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
                
                {/* Project Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="font-mono text-portfolio-green text-sm mb-2">
                    Featured Project
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-portfolio-lightest-slate mb-4 hover:text-portfolio-green transition-colors">
                    <a href={project.external}>{project.title}</a>
                  </h3>
                  
                  <p className="text-portfolio-slate mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-3 mb-4 font-mono text-sm text-portfolio-slate">
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.external}
                      className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl font-semibold text-portfolio-lightest-slate mb-12 text-center">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-portfolio-dark-light p-6 rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 text-portfolio-green">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M20,16H8V4H20V16M16,6V14L11.5,9.5L16,6Z" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.external}
                    className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-portfolio-lightest-slate mb-3 group-hover:text-portfolio-green transition-colors">
                {project.title}
              </h4>
              
              <p className="text-portfolio-slate text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-portfolio-slate">
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="btn-outline"
          >
            Show More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
