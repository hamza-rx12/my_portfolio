import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="spa-section">
      <div className="ff-header">
        <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls experience</span>
      </div>
      
      <div className="experience-container slide-up-in">
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-title-group">
              <h3>ShiftBricks</h3>
              <span className="experience-role">Intern</span>
            </div>
            <div className="experience-meta">
              <span className="experience-location">Al Hoceima, Morocco</span>
              <span className="experience-date">July - September 2025</span>
            </div>
          </div>
          
          <ul className="experience-details">
            <li>
              Built a <span className="tech-highlight">FastAPI</span> backend with{' '}
              <span className="tech-highlight">Azure Functions</span> to process legal documents 
              and extract key information using Azure OpenAI, storing results in Azure flexible{' '}
              <span className="tech-highlight">PostgreSQL</span> and Blob Storage.
            </li>
            <li>
              Developed a <span className="tech-highlight">React</span> +{' '}
              <span className="tech-highlight">TypeScript</span> frontend enabling lawyers 
              to collaborate on case files and view structured summaries.
            </li>
            <li>
              Deployed the system on <span className="tech-highlight">Azure</span>, coordinating 
              serverless functions, database, and storage for scalable, secure document handling.
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .experience-container {
          width: 100%;
          max-width: 900px;
          padding: 0 1.5rem;
        }

        .experience-card {
          background: rgba(49, 50, 68, 0.3);
          border: 1px solid var(--ctp-overlay0);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1rem 0;
          backdrop-filter: blur(8px);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .experience-title-group h3 {
          color: var(--ctp-mauve);
          font-size: 1.5rem;
          margin: 0;
        }

        .experience-role {
          color: var(--ctp-blue);
          font-size: 1.1rem;
          display: block;
        }

        .experience-meta {
          text-align: right;
        }

        .experience-location, .experience-date {
          display: block;
          color: var(--ctp-subtext0);
          font-size: 0.9rem;
        }

        .experience-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .experience-details li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }

        .experience-details li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--ctp-mauve);
        }

        .tech-highlight {
          color: var(--ctp-blue);
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .experience-meta {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;