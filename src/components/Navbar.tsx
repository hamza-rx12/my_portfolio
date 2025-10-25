"use client";
import { useEffect, useState, useRef } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#hobbies-activities', label: 'Hobbies & Activities' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling if we're in the middle of a navigation
      if (isNavigatingRef.current) return;

      const sections = navLinks.map(link => document.getElementById(link.href.replace('#', '')));
      const scrollY = window.scrollY + 120;
      let current = 'home';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          current = navLinks[i].href.replace('#', '');
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const section = document.getElementById(id);

    if (section) {
      // Mark that we're navigating
      isNavigatingRef.current = true;

      // Set active state immediately
      setActive(id);

      // Scroll to section with smooth animation
      section.scrollIntoView({ behavior: 'smooth' });

      // Re-enable scroll handling after animation (longer timeout for scroll wheel issues)
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 2000); // Extended timeout to handle scroll wheel interruptions
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {navLinks.map(link => {
          const isActive = active === link.href.replace('#', '');
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
              >
                <span className={isActive ? 'active' : ''}>{link.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          padding: 0.7rem 1.5rem;
          background: #181a20;
          border-bottom: 2.5px solid #ffb86c;
          font-family: var(--font-terminal);
          box-shadow: 0 2px 12px 0 #000a;
          z-index: 100;
          position: sticky;
          top: 0;
          transition: transform 0.28s cubic-bezier(.4,0,.2,1), opacity 0.18s;
        }
        .navbar__links {
          display: flex;
          gap: 1.1rem;
          list-style: none;
          width: 100%;
          justify-content: flex-start;
        }
        .navbar__links li span {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-terminal);
          transition: color 0.2s, border-bottom 0.2s;
          border-bottom: 2.5px solid transparent;
          padding-bottom: 2px;
          cursor: pointer;
        }
        .navbar__links li span.active {
          color: #ffb86c;
          border-bottom: 2.5px solid #ffb86c;
        }
        .navbar__links li span:hover {
          color: #ffb86c;
        }
        @media (max-width: 600px) {
          .navbar__links {
            gap: 0.5rem;
          }
          .navbar {
            padding: 0.7rem 0.7rem;
          }
        }
      `}</style>
    </nav>
  );
} 