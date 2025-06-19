import { ExternalLink, Github } from 'lucide-react';

const researchProjects = [
  {
    title: 'Explainable AI for Credit Risk Modeling',
    description:
      'Used SHAP values to interpret predictions of credit default models. Developed dashboards for visualizing model explainability.',
    tech: ['XGBoost', 'SHAP', 'Dash', 'Pandas'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Stock Market Regime Detection with HMMs',
    description:
      'Modeled financial market regimes using Hidden Markov Models, identifying transitions for trading strategy adjustments.',
    tech: ['Python', 'HMM', 'Quantlib', 'Plotly'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading numbered-heading">Research & Publications</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="bg-portfolio-dark-light p-6 rounded shadow-lg hover:shadow-xl transition-all duration-300 border border-portfolio-dark-lighter"
            >
              <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-3 hover:text-portfolio-green transition-colors">
                {project.title}
              </h3>
              <p className="text-portfolio-slate text-sm mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="px-3 py-1 text-xs font-mono bg-portfolio-dark-lighter text-portfolio-green rounded-full border border-portfolio-green"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} className="text-portfolio-slate hover:text-portfolio-green transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
