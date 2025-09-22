import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Data Science Professional',
    issuer: 'Oracle',
    date: 'Aug 2025',
    external: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3E0F7C08EB91739FBD3C36066D4CC22AB4466C0FCBFBA798CDCDC694A7EA0025'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading numbered-heading">Certifications</h2>

        <ul className="mt-8 space-y-4">
          {certifications.map((cert, index) => (
            <li 
              key={index} 
              className="flex items-center justify-between border-b border-portfolio-dark-lighter pb-2"
            >
              <div>
                <p className="text-portfolio-lightest-slate font-medium">
                  {cert.name}
                </p>
                <p className="text-portfolio-slate text-sm">
                  {cert.issuer} • {cert.date}
                </p>
              </div>

              {cert.external && (
                <a
                  href={cert.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;