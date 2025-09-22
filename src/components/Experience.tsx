import { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const jobs = [
    {
      company: 'Cohyve',
      companyUrl: 'https://www.cohyve.io/',
      title: 'Artificial Intelligence Intern',
      duration: 'August 2025 - Present',
      description: [
        'Assisting AI team with building a generative AI feature for AI/CD',
        'Researched about working of diffusion models for image generation.',
        'Implemented a moodboard generator feature in the website.'
      ],
      skills:['Python', 'ML', 'React', 'Flask', 'FastAPI', 'Git/Github']
    },
    {
      company: 'Insight Fusion Analytics',
      companyUrl: 'https://insightfusionanalytics.com/',
      title: 'Data Science Intern',
      duration: 'Feb 2025 - July 2025',
      description: [
        'Worked directly with client and have completed more than 10 real-world client projects.',
        'Created a full-fledged Employee Management System for the company using Google App Script and Excel formulas.',
        'Learned about Algo-trading and did few backtesting and screnning projects.',
      ],
      skills: ['Python', 'Streamlit', 'Pandas', 'App Script', 'Backtesting']
    }
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

              <h3 className="text-xl font-medium text-portfolio-lightest-slate mb-2">
                {job.title}{' '}
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-green hover:underline"
                >
                  @ {job.company}
                </a>
              </h3>

              <p className="font-mono text-sm text-portfolio-slate mb-4">{job.duration}</p>

              <ul className="space-y-3">
                {job.description.map((item, descIndex) => (
                  <li key={descIndex} className="relative pl-6 text-portfolio-slate">
                    <span className="absolute left-0 text-portfolio-green">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-mono bg-portfolio-dark-lighter text-portfolio-green rounded-full border border-portfolio-green"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
