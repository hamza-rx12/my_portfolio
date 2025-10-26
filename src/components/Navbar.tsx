"use client";
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  FolderIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import './Navbar.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: UserIcon },
  { href: '#skills', label: 'Skills', icon: WrenchScrewdriverIcon },
  { href: '#experience', label: 'Experience', icon: BriefcaseIcon },
  { href: '#education', label: 'Education', icon: AcademicCapIcon },
  { href: '#hobbies-activities', label: 'Hobbies & Activities', icon: HeartIcon },
  { href: '#projects', label: 'Projects', icon: FolderIcon },
  { href: '#contact', label: 'Contact', icon: EnvelopeIcon }
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const section = document.getElementById(id);

    if (section) {
      if (isMobile) {
        setIsExpanded(false);
      }
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <div className="nav-container">
      <button 
        className="toggle-btn" 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
      >
        {isExpanded ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`navbar ${isExpanded ? 'expanded' : ''}`}>
        <ul className="navbar__links">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={active === href.replace('#', '') ? 'active' : ''}
                title={label}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
