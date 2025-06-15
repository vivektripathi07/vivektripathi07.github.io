import { useRef, useState } from 'react';
import { Github, Instagram, Twitter, Linkedin, BookOpen, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);
  const popupTimeoutRef = useRef<number | null>(null);

  const socials = [
    { name: 'Bluesky', icon: MessageCircle, url: 'https://bsky.app/profile/vivektripathi.bsky.social' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/vivektripathi07' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/vivek.tripathi11/' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/_VivekTripathi' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vivek-tripathi-p07/' },
    { name: 'Goodreads', icon: BookOpen, url: 'https://www.goodreads.com/user/show/188641679-vivek-tripathi' },
  ];

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'tvivek966@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
      popupTimeoutRef.current = window.setTimeout(() => setCopied(false), 1500);
    });
  };

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
            href="mailto:tvivek966@gmail.com"
            onClick={handleEmailClick}
            className="font-mono text-sm text-portfolio-slate hover:text-portfolio-green hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ writingMode: 'vertical-rl' }}
          >
            tvivek966@gmail.com
          </a>
        </div>
      </div>

      {/* Popup */}
      {copied && (
        <div className="fixed bottom-6 right-20 bg-green-600 text-white text-sm px-4 py-2 rounded shadow-md z-50">
          Copied to clipboard!
        </div>
      )}
    </>
  );
};

export default SocialLinks;
