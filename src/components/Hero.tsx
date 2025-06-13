
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-portfolio-green font-mono text-base md:text-lg mb-5">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightest-slate mb-2">
            Your Name Here.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg md:text-xl text-portfolio-slate max-w-2xl mb-12 leading-relaxed">
            I'm a software engineer specializing in building exceptional digital 
            experiences. Currently, I'm focused on building accessible, 
            human-centered products at{' '}
            <a 
              href="#" 
              className="text-portfolio-green link-underline"
            >
              Company Name
            </a>
            .
          </p>
          <a 
            href="#work" 
            className="btn-outline inline-block"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
