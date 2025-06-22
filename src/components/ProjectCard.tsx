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
  const [imageViewerOpen, setImageViewerOpen] = useState(false);

  // Close modal on Esc
  const escHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (imageViewerOpen) {
        setImageViewerOpen(false);
      } else {
        setOpen(false);
      }
    }
  }, [imageViewerOpen]);

  useEffect(() => {
    if (open || imageViewerOpen) {
      window.addEventListener('keydown', escHandler);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', escHandler);
      document.body.style.overflow = '';
    };
  }, [open, imageViewerOpen, escHandler]);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageViewerOpen(true);
  };

  return (
    <>
      <div className="project-card" tabIndex={0} role="button" aria-label={`Open details for ${title}`} onClick={() => setOpen(true)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}>
        <div className="project-card__image-wrapper">
          <img src={image} alt={title} className="project-card__image" />
          <div className="project-card__overlay">
            <span className="click-hint">Click to view details</span>
          </div>
        </div>
        <div className="project-card__content">
          <h3><span className="folder"></span> <span className="file">{title}</span></h3>
        </div>
      </div>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-window" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <div className="modal-image-wrapper" onClick={handleImageClick}>
              <img src={image} alt={title} className="modal-image" />
              <div className="image-click-hint">
                <span>Click to view full size</span>
              </div>
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
      {imageViewerOpen && (
        <div className="image-viewer-overlay" onClick={() => setImageViewerOpen(false)}>
          <button className="image-viewer-close" onClick={() => setImageViewerOpen(false)} aria-label="Close image viewer">×</button>
          <div className="image-viewer-content" onClick={e => e.stopPropagation()}>
            <img src={image} alt={title} className="image-viewer-image" />
            <div className="image-viewer-caption">{title}</div>
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
          transition: transform 0.3s ease;
        }
        .project-card:hover .project-card__image {
          transform: scale(1.05);
        }
        .project-card__overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0.2rem;
        }
        .project-card:hover .project-card__overlay {
          opacity: 1;
        }
        .click-hint {
          color: var(--color-terminal-orange);
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          padding: 0.5rem;
        }
        .project-card__content h3 {
          font-size: 1.02rem;
          margin: 0;
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
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .modal-image-wrapper:hover {
          transform: scale(1.02);
        }
        .modal-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 0.7em;
          background: #111;
        }
        .image-click-hint {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          color: var(--color-terminal-orange);
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          padding: 0.3rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0 0 0.7em 0.7em;
        }
        .modal-image-wrapper:hover .image-click-hint {
          opacity: 1;
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

        /* Image Viewer Styles */
        .image-viewer-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s;
        }
        .image-viewer-close {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--color-terminal-orange);
          font-size: 3rem;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.2s;
          z-index: 2001;
        }
        .image-viewer-close:hover {
          color: var(--color-terminal-pink);
        }
        .image-viewer-content {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: zoomIn 0.3s ease;
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .image-viewer-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 0.5rem;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
        .image-viewer-caption {
          color: var(--color-terminal-text);
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1rem;
          text-align: center;
          font-family: var(--font-terminal);
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
          .click-hint {
            font-size: 0.8rem;
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
          .image-click-hint {
            font-size: 0.7rem;
            padding: 0.2rem;
          }
          .image-viewer-close {
            top: 0.5rem;
            right: 1rem;
            font-size: 2.5rem;
          }
          .image-viewer-caption {
            font-size: 1rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </>
  );
} 