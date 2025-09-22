
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-portfolio-green text-base mb-5">
          06. What's Next?
        </p>
        
        <h2 className="text-4xl md:text-5xl font-semibold text-portfolio-lightest-slate mb-5">
          Get In Touch
        </h2>
        
        <p className="text-lg text-portfolio-slate mb-12 leading-relaxed">
          I am actively looking for new opportunities, so if I can add value to your team, I am always up for a discussion.
        </p>
        
        <a
          href="mailto:tvivek966@gmail.com"
          className="btn-outline text-lg px-8 py-4"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
        <p className="text-base text-portfolio-slate mt-6 ">
          Have a nice day ahead!
        </p>
      </div>
    </section>
  );
};

export default Contact;
