"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
      <div className="footer__socials">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.7rem 1.5rem;
          background: var(--color-terminal-panel);
          color: var(--color-terminal-text);
          border-top: 1px solid var(--color-terminal-border);
          font-size: 1rem;
          font-family: var(--font-terminal);
        }
        .footer__socials a {
          color: var(--color-terminal-green);
          margin-left: 1.2rem;
          text-decoration: underline;
          font-weight: 500;
          font-family: var(--font-terminal);
          transition: color 0.2s;
        }
        .footer__socials a:hover {
          color: var(--color-terminal-blue);
        }
      `}</style>
    </footer>
  );
} 