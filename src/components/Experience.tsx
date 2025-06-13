
import { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const jobs = [
    {
      company: 'Upstatement',
      title: 'Senior Frontend Engineer',
      duration: 'May 2018 - Present',
      description: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      company: 'Apple',
      title: 'UI Engineer Co-op',
      duration: 'July - December 2017',
      description: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        'Architected and implemented the front-end of Apple Music\'s embeddable web player widget, which lets users log in and listen to full songs in the browser',
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps',
      ],
    },
    {
      company: 'Mullen Lowe',
      title: 'Creative Technologist Co-op',
      duration: 'July - December 2016',
      description: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    {
      company: 'Scout Studio',
      title: 'Studio Developer',
      duration: 'January - June 2016',
      description: [
        'Developed and shipped highly interactive web applications for Scout Studio using React, Node.js, and MongoDB',
        'Built custom WordPress themes and plugins for various client projects',
        'Worked directly with designers to translate mockups into responsive, interactive websites',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = jobRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveJob(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    jobRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading numbered-heading">Where I've Worked</h2>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              ref={(el) => (jobRefs.current[index] = el)}
              className="border-l-2 border-portfolio-dark-lighter pl-8 relative"
            >
              <div className={`absolute w-4 h-4 rounded-full -left-2 top-2 transition-colors duration-300 ${
                activeJob === index ? 'bg-portfolio-green' : 'bg-portfolio-dark-lighter'
              }`}></div>
              
              <h3 className="text-xl font-medium text-portfolio-lightest-slate mb-2">
                {job.title}{' '}
                <span className="text-portfolio-green">
                  @ {job.company}
                </span>
              </h3>
              
              <p className="font-mono text-sm text-portfolio-slate mb-4">
                {job.duration}
              </p>
              
              <ul className="space-y-3">
                {job.description.map((item, descIndex) => (
                  <li key={descIndex} className="relative pl-6 text-portfolio-slate">
                    <span className="absolute left-0 text-portfolio-green">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
