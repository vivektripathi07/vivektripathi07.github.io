
import { Github, Instagram, Twitter, Linkedin, Codepen } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'CodePen', icon: Codepen, url: 'https://codepen.io' },
  ];

  return (
    <>
      {/* Left Social Links */}
      <div className="fixed bottom-0 left-10 z-10 hidden lg:block">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-slate after:mt-6">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-slate hover:text-portfolio-green hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Email */}
      <div className="fixed bottom-0 right-10 z-10 hidden lg:block">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-slate after:mt-6">
          <a
            href="mailto:hello@example.com"
            className="font-mono text-sm text-portfolio-slate hover:text-portfolio-green hover:-translate-y-1 transition-all duration-300"
            style={{ writingMode: 'vertical-rl' }}
          >
            hello@example.com
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
