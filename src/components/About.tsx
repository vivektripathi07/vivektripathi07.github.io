
const About = () => {
  const skills = [
    'React',
    'FastAPI',
    'Node.js',
    'SpringBoot',
    'MongoDB',
    'MySQL',
    'Docker'
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
                and its applications. I am also into theoritical Machine Learning and try have personally tried
                 implementing some of the famous research papers. 

              </p>
              <p>
                Although java is my main language for problem solving I am familiar with other important languages
                like C, C++ and GO as part of my college curriculum.

              </p>

              <br></br>
              
              <p>
                My hobbies are reading and playing music, I play guitar and piano in my free time.
              </p>
              
              <p className="font-bold">Technologies I have worked with:</p>
              
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
                  src="src\components\assets\profile_pic.jpg"
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
