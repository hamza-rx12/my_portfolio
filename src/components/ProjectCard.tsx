"use client";

import { useState, useCallback, useEffect } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tools?: string[];
};

export default function ProjectCard({ title, description, image, github, demo, tools }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  // Close modal on Esc
  const escHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  }, []);
  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', escHandler);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', escHandler);
      document.body.style.overflow = '';
    };
  }, [open, escHandler]);

  return (
    <>
      <div className="project-card" tabIndex={0} role="button" aria-label={`Open details for ${title}`} onClick={() => setOpen(true)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}>
        <div className="project-card__image-wrapper">
          <img src={image} alt={title} className="project-card__image" />
        </div>
        <div className="project-card__content">
          <h3><span className="folder"></span> <span className="file">{title}</span></h3>
          <p>{description}</p>
          {tools && tools.length > 0 && (
            <div className="project-card__tools">
              {tools.map((tool, i) => (
                <span className="tool-badge" key={i}>{tool}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-window" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <div className="modal-image-wrapper">
              <img src={image} alt={title} className="modal-image" />
            </div>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-desc">{description}</p>
            {tools && tools.length > 0 && (
              <div className="modal-tools">
                {tools.map((tool, i) => (
                  <span className="tool-badge" key={i}>{tool}</span>
                ))}
              </div>
            )}
            <div className="modal-links">
              {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
              {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .project-card {
          background: var(--color-terminal-bg-alt);
          border-left: 3px solid var(--color-terminal-orange);
          border-radius: 0.3rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-terminal);
          color: var(--color-terminal-text);
          padding: 1.1rem 1.1rem 1.1rem 1.3rem;
          box-shadow: none;
          cursor: pointer;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .project-card:focus, .project-card:hover {
          box-shadow: 0 4px 32px 0 var(--ctp-mauve), 0 1.5px 0 0 var(--ctp-mauve) inset;
          transform: translateY(-2px) scale(1.02);
        }
        .project-card__image-wrapper {
          width: 100%;
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio */
          background: #111;
          border-radius: 0.2rem;
          overflow: hidden;
          margin-bottom: 0.6rem;
        }
        .project-card__image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 0.2rem;
          background: #111;
        }
        .project-card__content h3 {
          font-size: 1.02rem;
          margin: 0 0 0.3rem 0;
          font-family: var(--font-terminal);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .folder {
          color: var(--color-terminal-teal);
          font-size: 1.1em;
        }
        .file {
          color: var(--color-terminal-yellow);
        }
        .project-card__content p {
          font-size: 0.98rem;
          margin: 0 0 0.6rem 0;
          color: var(--color-terminal-text);
        }
        .project-card__tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
          margin-bottom: 0.7em;
        }
        .tool-badge {
          background: var(--ctp-surface1);
          color: var(--ctp-mauve);
          border: 1.5px solid var(--ctp-mauve);
          border-radius: 0.7em;
          padding: 0.18em 0.85em;
          font-size: 0.93em;
          font-weight: 600;
          font-family: var(--font-terminal);
          letter-spacing: 0.01em;
          box-shadow: 0 1px 4px 0 #0002;
          transition: background 0.18s, color 0.18s, border 0.18s;
        }
        .tool-badge:hover {
          background: var(--ctp-mauve);
          color: var(--ctp-base);
          border-color: var(--ctp-pink);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(30, 30, 46, 0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.18s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-window {
          background: rgba(49, 50, 68, 0.98);
          border-radius: 1.2em;
          box-shadow: 0 8px 48px 0 #000a, 0 0 0 3px var(--ctp-mauve);
          padding: 2.2em 2.2em 1.5em 2.2em;
          max-width: 420px;
          width: 95vw;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: popIn 0.18s;
        }
        @keyframes popIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .modal-close {
          position: absolute;
          top: 0.7em;
          right: 1.1em;
          background: none;
          border: none;
          color: var(--ctp-mauve);
          font-size: 2.1em;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.18s;
        }
        .modal-close:hover {
          color: var(--ctp-pink);
        }
        .modal-image-wrapper {
          width: 100%;
          max-width: 320px;
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio */
          border-radius: 0.7em;
          overflow: hidden;
          margin-bottom: 1.1em;
          box-shadow: 0 2px 12px 0 #0004;
        }
        .modal-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 0.7em;
          background: #111;
        }
        .modal-title {
          font-size: 1.25em;
          font-weight: 700;
          color: var(--ctp-mauve);
          margin-bottom: 0.5em;
          text-align: center;
        }
        .modal-desc {
          color: var(--ctp-text);
          font-size: 1.05em;
          margin-bottom: 1em;
          text-align: center;
        }
        .modal-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
          margin-bottom: 1.1em;
          justify-content: center;
        }
        .modal-links {
          display: flex;
          gap: 1.2em;
          margin-top: 0.5em;
        }
        .modal-links a {
          color: var(--ctp-pink);
          font-weight: 600;
          text-decoration: underline;
          font-size: 1.08em;
          transition: color 0.18s;
        }
        .modal-links a:hover {
          color: var(--ctp-blue);
        }
        @media (max-width: 600px) {
          .project-card {
            padding: 0.7rem 0.5rem 0.7rem 0.7rem;
          }
          .project-card__image-wrapper {
            padding-top: 0;
            height: 120px;
            min-height: 0;
            max-height: 120px;
          }
          .project-card__image {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
          }
          .tool-badge {
            font-size: 0.85em;
            padding: 0.13em 0.6em;
          }
          .modal-window {
            padding: 1.1em 0.5em 1em 0.5em;
            max-width: 98vw;
          }
          .modal-image-wrapper {
            padding-top: 0;
            height: 120px;
            min-height: 0;
            max-height: 120px;
          }
          .modal-image {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </>
  );
} 