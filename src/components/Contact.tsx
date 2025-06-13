
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-portfolio-green text-base mb-5">
          04. What's Next?
        </p>
        
        <h2 className="text-4xl md:text-5xl font-semibold text-portfolio-lightest-slate mb-5">
          Get In Touch
        </h2>
        
        <p className="text-lg text-portfolio-slate mb-12 leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox 
          is always open. Whether you have a question or just want to say hi, I'll 
          try my best to get back to you!
        </p>
        
        <a
          href="mailto:hello@example.com"
          className="btn-outline text-lg px-8 py-4"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
