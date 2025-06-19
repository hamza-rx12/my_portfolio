"use client";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, image, github, demo }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <div className="project-card__content">
        <h3><span className="folder"></span> <span className="file">{title}</span></h3>
        <p>{description}</p>
        <div className="project-card__links">
          {github && <a href={github} target="_blank" rel="noopener noreferrer">[GitHub]</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer">[Live Demo]</a>}
        </div>
      </div>
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
        }
        .project-card__image {
          width: 100%;
          height: 140px;
          object-fit: cover;
          background: #111;
          border-radius: 0.2rem;
          margin-bottom: 0.6rem;
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
        .project-card__links a {
          color: var(--color-terminal-pink);
          margin-right: 1rem;
          text-decoration: underline;
          font-family: var(--font-terminal);
          font-size: 0.97rem;
          transition: color 0.2s;
        }
        .project-card__links a:hover {
          color: var(--color-terminal-link-hover);
        }
      `}</style>
    </div>
  );
} 