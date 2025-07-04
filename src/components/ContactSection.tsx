"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const CONTACTS = [
  {
    icon: <FaLinkedin />, label: 'LinkedIn', value: 'hamza-alaoui-mhamdi', link: 'https://www.linkedin.com/in/hamza-alaoui-mhamdi'
  },
  {
    icon: <FaGithub />, label: 'GitHub', value: 'hamza-rx12', link: 'https://github.com/hamza-rx12/'
  },
  {
    icon: <FaEnvelope />, label: 'Email', value: 'alaoui.hamza2002@gmail.com', link: 'mailto:alaoui.hamza2002@gmail.com'
  }
];

export default function ContactSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <section id="contact" className="spa-section" style={{ padding: '2rem' }}>
      <div className="ff-header">
        <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls contact</span>
      </div>
      <div className="contact-list">
        {CONTACTS.map((c, i) => (
          <div className="slide-up-in" style={{ transitionDelay: `${i * 120}ms` }} key={i}>
            <a
              href={c.link}
              className="contact-card"
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon">{c.icon}</span>
              <span className="contact-label">{c.label}:</span>
              <span className="contact-value">{c.value}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="resume-dropdown" ref={dropdownRef}>
        <button className="resume-main-btn" onClick={() => setDropdownOpen(v => !v)}>
          Download Resume ▼
        </button>
        <div className={`resume-dropdown-content${dropdownOpen ? ' open' : ''}`}>
          <a href="/resume/resume-en.pdf" download>🇬🇧 English</a>
          <a href="/resume/resume-fr.pdf" download>🇫🇷 French</a>
        </div>
      </div>
      <style jsx>{`
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 2rem;
          max-width: 500px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          background: var(--color-terminal-bg-alt);
          border: 1.5px solid var(--color-terminal-blue);
          border-radius: 0.7rem;
          padding: 1.1rem 1.5rem;
          color: var(--color-terminal-text);
          font-family: var(--font-terminal);
          font-size: 1.08rem;
          font-weight: 500;
          text-decoration: none;
          transition: border 0.2s, color 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px 0 #0003;
        }
        .contact-card:hover {
          border-color: var(--color-terminal-orange);
          color: var(--color-terminal-orange);
          box-shadow: 0 4px 16px 0 #0005;
        }
        .contact-icon {
          font-size: 1.5em;
          color: var(--color-terminal-blue);
        }
        .contact-label {
          color: var(--color-terminal-blue);
          font-weight: 700;
        }
        .contact-value {
          color: var(--color-terminal-yellow);
          font-weight: 600;
          word-break: break-all;
        }
        .resume-dropdown {
          position: relative;
          display: inline-block;
          margin: 2rem 0 0 0;
        }
        .resume-main-btn {
          background: var(--color-terminal-bg-alt);
          color: var(--ctp-mauve);
          border: 2px solid var(--ctp-mauve);
          border-radius: 0.8em;
          font-weight: 600;
          padding: 0.7em 1.5em;
          font-size: 1.08em;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border 0.18s;
        }
        .resume-main-btn:hover {
          background: var(--ctp-mauve);
          color: var(--ctp-base);
          border-color: var(--ctp-pink);
        }
        .resume-dropdown-content {
          display: none;
          position: absolute;
          background: var(--color-terminal-bg-alt);
          min-width: 160px;
          box-shadow: 0 2px 8px 0 #0003;
          border-radius: 0.8em;
          z-index: 1;
          margin-top: 0.3em;
          right: 0;
        }
        .resume-dropdown-content.open {
          display: block;
        }
        .resume-dropdown-content a {
          color: var(--ctp-mauve);
          padding: 0.7em 1.2em;
          text-decoration: none;
          display: block;
          border-radius: 0.8em;
          transition: background 0.18s, color 0.18s;
        }
        .resume-dropdown-content a:hover {
          background: var(--ctp-mauve);
          color: var(--ctp-base);
        }
      `}</style>
    </section>
  );
} 