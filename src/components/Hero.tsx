
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-portfolio-green font-mono text-base md:text-lg mb-5">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightest-slate mb-2">
            Vivek.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-3xl font-bold text-portfolio-slate mb-6">
          Learning ... Building ... Learning
          </h2>
          <p className="text-lg md:text-xl text-portfolio-slate max-w-2xl mb-12 leading-relaxed">
            CS Undergrad, learning about new teachnologies everyday. I am familiar with Java, Python and MySQL for the tech-stack. I am also a huge ML enthusiast trying my best to learn about it as much as I can.
          </p>
          <a 
            href="#work" 
            className="btn-outline inline-block mr-4"
          >
            Check out my work!
          </a>
          <a 
            href="https://vivektalks.space/" 
            className="btn-outline inline-block"
          >
            Check out my blog!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
