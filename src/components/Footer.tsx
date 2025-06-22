"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        {/* <span className="footer__brand">MyPortfolio</span> */}
        <span className="footer__copy">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      <div className="footer__socials">
        <a href="https://github.com/hamza-rx12/" target="_blank" rel="noopener noreferrer" className="footer__icon github" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hamza-alaoui-mhamdi" target="_blank" rel="noopener noreferrer" className="footer__icon linkedin" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.1rem 2.2rem;
          background: rgba(49, 50, 68, 0.92);
          color: var(--ctp-subtext1);
          border-top: 2.5px solid var(--ctp-mauve);
          font-size: 1.08rem;
          font-family: var(--font-terminal);
          box-shadow: 0 -2px 24px 0 #0008;
          backdrop-filter: blur(8px);
          position: relative;
          z-index: 10;
        }
        .footer__left {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .footer__brand {
          font-weight: 700;
          color: var(--ctp-mauve);
          font-size: 1.13rem;
          letter-spacing: 1px;
        }
        .footer__copy {
          color: var(--ctp-overlay1);
          font-size: 1.01rem;
        }
        .footer__socials {
          display: flex;
          gap: 1.2rem;
        }
        .footer__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.45em;
          color: var(--ctp-mauve);
          background: rgba(203, 166, 247, 0.08);
          border-radius: 50%;
          width: 2.2em;
          height: 2.2em;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          box-shadow: 0 2px 8px 0 #0003;
        }
        .footer__icon.github:hover {
          color: var(--ctp-blue);
          background: rgba(137, 180, 250, 0.13);
        }
        .footer__icon.linkedin:hover {
          color: var(--ctp-sky);
          background: rgba(137, 220, 235, 0.13);
        }
        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            gap: 0.7rem;
            padding: 1.1rem 0.7rem;
          }
          .footer__left {
            flex-direction: column;
            gap: 0.3rem;
          }
        }
      `}</style>
    </footer>
  );
} 