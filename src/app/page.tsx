"use client";
import AboutSection from '../components/AboutSection';
import HobbiesActivitiesSection from '../components/HobbiesActivitiesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    function onScrollFadeIn() {
      document.querySelectorAll('.spa-section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', onScrollFadeIn);
    window.addEventListener('DOMContentLoaded', onScrollFadeIn);
    onScrollFadeIn();
    return () => {
      window.removeEventListener('scroll', onScrollFadeIn);
      window.removeEventListener('DOMContentLoaded', onScrollFadeIn);
    };
  }, []);

  return (
    <main className="spa-main">
      <section id="home" className="spa-section">
        <div className="ff-header ff-header-center">
          <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">cat welcome.txt</span>
        </div>
        <p style={{ fontSize: '1.25rem', maxWidth: 600, textAlign: 'center', margin: '1.5rem 0' }}>
          Hi! I&#39;m a data engineering student passionate about AI, machine learning, and distributed systems. I enjoy building intelligent, impactful solutions. Explore my projects and feel free to connect!
        </p>
        <div className="cta-btn-row">
          <a href="#about" className="cta-btn about">
            <span className="cta-icon">👤</span> About
          </a>
          <a href="#projects" className="cta-btn projects">
            <span className="cta-icon">🚀</span> Projects
          </a>
          <a href="#contact" className="cta-btn contact">
            <span className="cta-icon">✉️</span> Contact
          </a>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <HobbiesActivitiesSection />
      <ProjectsSection />
      <ContactSection />
      <style jsx global>{`
        .spa-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          scroll-behavior: smooth;
        }
        .spa-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          scroll-snap-align: start;
          padding: 2.5rem 0;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .spa-section.visible {
          opacity: 1;
          transform: none;
        }
        /* Slide-up-in effect for section content */
        .slide-up-in {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .spa-section.visible .slide-up-in {
          opacity: 1;
          transform: none;
        }
        .ff-header, .ff-header-center {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          text-align: center;
        }
        #home {
          padding-top: 4rem;
        }
        .cta-btn-row {
          display: flex;
          gap: 1.2em;
          margin-top: 1.2em;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.7em;
          background: rgba(49, 50, 68, 0.85);
          color: var(--ctp-mauve);
          border: 2px solid var(--ctp-mauve);
          border-radius: 1.2em;
          font-size: 1.18rem;
          font-weight: 700;
          padding: 0.85em 2.2em;
          box-shadow: 0 4px 32px 0 #0007, 0 1.5px 0 0 var(--ctp-mauve) inset;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s, transform 0.18s;
          backdrop-filter: blur(8px);
          cursor: pointer;
        }
        .cta-btn.about {
          color: var(--ctp-blue);
          border-color: var(--ctp-blue);
          box-shadow: 0 4px 32px 0 #0007, 0 1.5px 0 0 var(--ctp-blue) inset;
        }
        .cta-btn.about:hover {
          background: var(--ctp-blue);
          color: var(--ctp-base);
          border-color: var(--ctp-sky);
          box-shadow: 0 8px 32px 0 var(--ctp-blue), 0 1.5px 0 0 var(--ctp-sky) inset;
          transform: translateY(-2px) scale(1.04);
        }
        .cta-btn.projects {
          color: var(--ctp-mauve);
          border-color: var(--ctp-mauve);
          box-shadow: 0 4px 32px 0 #0007, 0 1.5px 0 0 var(--ctp-mauve) inset;
        }
        .cta-btn.projects:hover {
          background: var(--ctp-mauve);
          color: var(--ctp-base);
          border-color: var(--ctp-pink);
          box-shadow: 0 8px 32px 0 var(--ctp-mauve), 0 1.5px 0 0 var(--ctp-pink) inset;
          transform: translateY(-2px) scale(1.04);
        }
        .cta-btn.contact {
          color: var(--ctp-green);
          border-color: var(--ctp-green);
          box-shadow: 0 4px 32px 0 #0007, 0 1.5px 0 0 var(--ctp-green) inset;
        }
        .cta-btn.contact:hover {
          background: var(--ctp-green);
          color: var(--ctp-base);
          border-color: var(--ctp-yellow);
          box-shadow: 0 8px 32px 0 var(--ctp-green), 0 1.5px 0 0 var(--ctp-yellow) inset;
          transform: translateY(-2px) scale(1.04);
        }
        .cta-icon {
          font-size: 1.25em;
          margin-right: 0.2em;
        }
        @media (max-width: 600px) {
          .spa-section {
            padding: 1.2rem 0.2rem;
          }
          .cta-btn-row {
            gap: 0.6em;
            margin-top: 0.7em;
          }
          .cta-btn {
            font-size: 1rem;
            padding: 0.7em 1.1em;
            border-radius: 1em;
            min-width: 120px;
          }
          .cta-icon {
            font-size: 1.1em;
          }
          p {
            font-size: 1.05rem !important;
            max-width: 95vw;
          }
        }
      `}</style>
    </main>
  );
}
