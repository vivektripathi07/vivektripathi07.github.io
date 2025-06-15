
const About = () => {
  const skills = [
    'Java',
    'C',
    'C++',
    'Python',
    'Postgresql',
    'AWS',
    'Docker',
    'SpringBoot'
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading numbered-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="space-y-4 text-portfolio-slate">
              <p>
                Hi there, I appreciate you taking out your time and looking into my portfolio.
                My name is Vivek. I am a 4th year CS undergrad who loves to explore the depths of computer science
                and its applications. I have made software engineering projects and have worked on a lot of
                Data Science Projects for an internship I am doing right now.

              </p>
              
              <p>
                I have worked with various technologies to understand how progamming is working under the hood, 
                therefore I have build project in C, C++, Java, Python (have look at my {' '}
                <a href= 'https://github.com/vivektripathi07' className="text-portfolio-green link-underline" 
                target="_blank" rel="noopener noreferrer">
                GitHub
                </a>
                ) and currently as a hobby side project I am building my own OS using C language.

              </p>
              
              <p>
                My hobbies are reading and playing music, I play guitar and piano in my free time.
              </p>
              
              <p>Technologies I have worked with:</p>
              
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
                  src="https://media.licdn.com/dms/image/v2/D5603AQEZiQj9Ry-k9g/profile-displayphoto-shrink_400_400/B56ZSFDgLGHQAg-/0/1737399080055?e=1755129600&v=beta&t=d7nUsdnuoLXzHV4nMNiwz9Ps3wYxAqSJrULU5em8nnE"
                  alt="Profile"
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
