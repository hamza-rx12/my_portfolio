"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
    return (
        <section id="contact" style={{ padding: '2rem' }}>
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls contact</span>
            </div>
            <div className="contact-list">
                {CONTACTS.map((c, i) => (
                    <a
                        key={i}
                        href={c.link}
                        className="contact-card"
                        target={c.link.startsWith('http') ? '_blank' : undefined}
                        rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                        <span className="contact-icon">{c.icon}</span>
                        <span className="contact-label">{c.label}:</span>
                        <span className="contact-value">{c.value}</span>
                    </a>
                ))}
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
      `}</style>
        </section>
    );
} 