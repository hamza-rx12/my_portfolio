"use client";

import { FaBook, FaMusic, FaPlane, FaLinux, FaCode, FaKeyboard, FaUserAstronaut, FaRobot } from 'react-icons/fa';
import { SiMyanimelist } from 'react-icons/si';

const hobbies = [
    { icon: <FaCode />, label: 'Coding' },
    { icon: <FaLinux />, label: 'Linux ricing' },
    { icon: <FaBook />, label: 'Reading' },
    { icon: <FaMusic />, label: 'Music' },
    { icon: <FaPlane />, label: 'Travel' },
    { icon: <SiMyanimelist />, label: 'Anime/Manga' }
];

const interests = [
    { icon: <FaCode />, label: 'Big Data' },
    { icon: <FaRobot />, label: 'AI' },
    { icon: <FaKeyboard />, label: 'Programming' },
    { icon: <FaBook />, label: 'Reading' },
    { icon: <FaUserAstronaut />, label: 'Anime & Manga' },
];

const extracurricular = [
    { icon: <FaUserAstronaut />, label: 'DATAI' },
    { icon: <FaUserAstronaut />, label: '01 Club' },
    { icon: <FaUserAstronaut />, label: 'ASIANHUB' },
];

export default function HobbiesActivitiesSection() {
    return (
        <section id="hobbies-activities" className="hobbies-activities-section spa-section">
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls hobbies_activities</span>
            </div>
            <div className="ha-list">
                <div className="ha-group">
                    <div className="ha-title">Hobbies</div>
                    <div className="ha-badges">
                        {hobbies.map((h, i) => (
                            <span className="ha-badge ha-badge-hobby ff-icon-label" key={i}>{h.icon} {h.label}</span>
                        ))}
                    </div>
                </div>
                <div className="ha-group">
                    <div className="ha-title">Interests</div>
                    <div className="ha-badges">
                        {interests.map((a, i) => (
                            <span className="ha-badge ha-badge-interest ff-icon-label" key={i}>{a.icon} {a.label}</span>
                        ))}
                    </div>
                </div>
                <div className="ha-group">
                    <div className="ha-title">Extracurricular</div>
                    <div className="ha-badges">
                        {extracurricular.map((a, i) => (
                            <span className="ha-badge ha-badge-extra ff-icon-label" key={i}>{a.icon} {a.label}</span>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .hobbies-activities-section {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ha-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.7rem;
        }
        .ha-group {
          background: rgba(49, 50, 68, 0.85);
          border: 1.5px solid var(--ctp-teal);
          border-radius: 1.1em;
          padding: 1.2em 1.5em;
          box-shadow: 0 2px 16px 0 #0003;
          font-family: var(--font-terminal);
          color: var(--ctp-text);
          transition: border 0.18s, box-shadow 0.18s;
        }
        .ha-group:hover {
          border-color: var(--ctp-mauve);
          box-shadow: 0 4px 32px 0 var(--ctp-teal);
        }
        .ha-title {
          font-size: 1.09em;
          font-weight: 700;
          color: var(--ctp-teal);
          margin-bottom: 0.5em;
        }
        .ha-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
        }
        .ha-badge {
          background: var(--ctp-surface1);
          color: var(--ctp-teal);
          border: 1.5px solid var(--ctp-teal);
          border-radius: 0.7em;
          padding: 0.18em 0.85em;
          font-size: 0.97em;
          font-weight: 600;
          font-family: var(--font-terminal);
          letter-spacing: 0.01em;
          box-shadow: 0 1px 4px 0 #0002;
          transition: background 0.18s, color 0.18s, border 0.18s;
          display: inline-flex;
          align-items: center;
          gap: 0.4em;
        }
        .ha-badge-hobby { border-color: var(--ctp-teal); }
        .ha-badge-interest { border-color: var(--ctp-orange); color: var(--ctp-orange); }
        .ha-badge-extra { border-color: var(--ctp-yellow); color: var(--ctp-yellow); }
        .ha-badge:hover {
          background: var(--ctp-teal);
          color: var(--ctp-base);
          border-color: var(--ctp-pink);
        }
        @media (max-width: 600px) {
          .hobbies-activities-section {
            padding: 0.5em 0.2em;
          }
          .ha-group {
            padding: 0.8em 0.7em;
          }
        }
      `}</style>
        </section>
    );
} 