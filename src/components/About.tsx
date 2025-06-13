
const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Next.js',
    'Vue.js',
    'PostgreSQL',
    'MongoDB',
    'AWS',
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading numbered-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="space-y-4 text-portfolio-slate">
              <p>
                Hello! My name is [Your Name] and I enjoy creating things that 
                live on the internet. My interest in web development started back 
                in 2012 when I decided to try editing custom Tumblr themes — turns 
                out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              
              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  an advertising agency
                </a>
                ,{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  a start-up
                </a>
                ,{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  a huge corporation
                </a>
                , and{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  a student-led design studio
                </a>
                . My main focus these days is building accessible, inclusive 
                products and digital experiences at{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  Upstatement
                </a>
                {' '}for a variety of clients.
              </p>
              
              <p>
                I also recently{' '}
                <a href="#" className="text-portfolio-green link-underline">
                  launched a course
                </a>
                {' '}that covers everything you need to build a web app with the 
                Spotify API using Node & React.
              </p>
              
              <p>Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-0 mt-5 list-none">
                {skills.map((skill, index) => (
                  <li key={index} className="relative pl-5 mb-2 text-sm font-mono">
                    <span className="absolute left-0 text-portfolio-green">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative group">
              <div className="relative overflow-hidden rounded bg-portfolio-green">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-portfolio-green rounded translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
