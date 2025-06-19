"use client";

import Image from 'next/image';
import { FaJava, FaBook, FaMusic, FaPlane, FaLinux, FaCode, FaLanguage, FaTerminal, FaSmile, FaKeyboard, FaUserAstronaut, FaRobot } from 'react-icons/fa';
import { SiGnubash, SiGnome, SiVsco, SiNeovim, SiArchlinux, SiJavascript, SiTypescript, SiPython, SiRust, SiC, SiHtml5, SiCss3, SiMyanimelist } from 'react-icons/si';
import { RiJavaLine } from "react-icons/ri";

const aboutInfo = {
    user: 'Hamza',
    host: 'Alaoui Mhamdi',
    description: `I'm a passionate full-stack developer who loves building beautiful, performant web apps and tools. I enjoy open source, Linux, and customizing my workflow.`,
    hobbies: [
        { icon: <FaCode />, label: 'Coding' },
        { icon: <FaLinux />, label: 'Linux ricing' },
        { icon: <FaBook />, label: 'Reading' },
        { icon: <FaMusic />, label: 'Music' },
        { icon: <FaPlane />, label: 'Travel' },
        { icon: <SiMyanimelist />, label: 'Anime/Manga' }
    ],
    languages: [
        { icon: <FaLanguage />, label: 'Arabic' },
        { icon: <FaLanguage />, label: 'English' },
        { icon: <FaLanguage />, label: 'French' },
    ],
    programming: [
        { icon: <SiC />, label: 'C' },
        { icon: <RiJavaLine />, label: 'Java' },
        { icon: <SiPython />, label: 'Python' },
        { icon: <SiGnubash />, label: 'Shell' },
        { icon: <SiTypescript />, label: 'TypeScript' },
        { icon: <SiJavascript />, label: 'JavaScript' },
        { icon: <SiHtml5 />, label: 'HTML' },
        { icon: <SiCss3 />, label: 'CSS' },
        { icon: <SiRust />, label: 'Rust' },


    ],
    fun: [
        { icon: <SiArchlinux />, label: 'OS: Arch Linux (btw)' },
        { icon: <SiVsco />, label: 'Editor: VSCode' },
        { icon: <SiNeovim />, label: 'Editor: Neovim' },
        { icon: <FaTerminal />, label: 'Shell: zsh' },
        { icon: <FaSmile />, label: 'Theme: Catppuccin Mocha' },
        { icon: <SiGnome />, label: 'Favorite DE: GNOME' },
    ],
    activities: {
        interests: [
            { icon: <FaCode />, label: 'Big Data' },
            { icon: <FaRobot />, label: 'AI' },
            { icon: <FaKeyboard />, label: 'Programming' },
            { icon: <FaBook />, label: 'Reading' },
            { icon: <FaUserAstronaut />, label: 'Anime & Manga' },
        ],
        extracurricular: [
            { icon: <FaUserAstronaut />, label: 'DATAI' },
            { icon: <FaUserAstronaut />, label: '01 Club' },
            { icon: <FaUserAstronaut />, label: 'ASIANHUB' },
        ],
    },
};

export default function AboutPage() {
    return (
        <main className="about-fastfetch">
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">whoami</span>
            </div>
            <div className="ff-main">
                <div className="ff-logo">
                    <Image src="/images/myPic.png" alt="Hamza" width={200} height={200} className="ff-pic" />
                </div>
                <div className="ff-info">
                    <div className="ff-row ff-title">{aboutInfo.user} <span className="ff-at">@</span> {aboutInfo.host}</div>
                    <div className="ff-row ff-desc">{aboutInfo.description}</div>

                    <div className="ff-row"><span className="ff-label ff-code">Programming:</span>
                        <span className="ff-badges ff-badges-programming">
                            {aboutInfo.programming.map((p, i) => (
                                <span key={i} className="ff-badge ff-badge-prog ff-icon-label">{p.icon} {p.label}</span>
                            ))}
                        </span>
                    </div>

                    <div className="ff-row"><span className="ff-label ff-lang">Languages:</span>
                        <span className="ff-badges ff-badges-languages">
                            {aboutInfo.languages.map((l, i) => (
                                <span key={i} className="ff-badge ff-badge-lang ff-icon-label">{l.icon} {l.label}</span>
                            ))}
                        </span>
                    </div>

                    <div className="ff-row"><span className="ff-label ff-hardware">Hobbies:</span>
                        <span className="ff-badges ff-badges-hobbies">
                            {aboutInfo.hobbies.map((h, i) => (
                                <span key={i} className="ff-badge ff-badge-hobby ff-icon-label">{h.icon} {h.label}</span>
                            ))}
                        </span>
                    </div>



                    {/* Activities Section */}
                    <div className="ff-row ff-activities-title"><span className="ff-activities-icon">★</span> ACTIVITIES</div>
                    <div className="ff-row ff-activities-list"><span className="ff-label ff-activities-label">Interests:</span>
                        <span className="ff-badges ff-badges-activities">
                            {aboutInfo.activities.interests.map((a, i) => (
                                <span key={i} className="ff-badge ff-badge-activity ff-icon-label">{a.icon} {a.label}</span>
                            ))}
                        </span>
                    </div>
                    <div className="ff-row ff-activities-list"><span className="ff-label ff-activities-label">Extracurricular:</span>
                        <span className="ff-badges ff-badges-activities">
                            {aboutInfo.activities.extracurricular.map((a, i) => (
                                <span key={i} className="ff-badge ff-badge-activity ff-icon-label">{a.icon} {a.label}</span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .about-fastfetch {
          font-family: var(--font-terminal);
          color: var(--color-terminal-text);
          background: none;
          padding: 2.5rem 0 1.5rem 0;
        }
        .ff-header {
          font-size: 1.05rem;
          margin-bottom: 2.2rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .cmd-arrow { color: var(--color-terminal-orange); font-weight: bold; }
        .cmd-user { color: var(--color-terminal-pink); }
        .cmd-at { color: var(--color-terminal-text); }
        .cmd-host { color: var(--color-terminal-blue); }
        .cmd-cwd { color: var(--color-terminal-yellow); }
        .cmd-sep { color: var(--color-terminal-orange); }
        .cmd-cmd { color: var(--color-terminal-teal); font-weight: bold; }
        .ff-main {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
        }
        .ff-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ff-pic {
          border-radius: 50%;
          border: 2.5px solid var(--color-terminal-orange);
          box-shadow: 0 2px 16px 0 #0008;
        }
        .ff-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ff-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--color-terminal-pink);
          margin-bottom: 0.2rem;
        }
        .ff-at {
          color: var(--color-terminal-blue);
        }
        .ff-desc {
          color: var(--color-terminal-text);
          font-size: 1.01rem;
          margin-bottom: 0.5rem;
        }
        .ff-row {
          font-size: 0.98rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .ff-label {
          min-width: 7.5rem;
          font-weight: 600;
        }
        .ff-hardware { color: var(--color-terminal-teal); }
        .ff-lang { color: var(--color-terminal-yellow); }
        .ff-code { color: var(--color-terminal-blue); }
        .ff-fun { color: var(--color-terminal-orange); }
        .ff-value { color: var(--color-terminal-text); }
        .ff-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
        }
        .ff-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3em;
          font-size: 0.97em;
          font-family: var(--font-terminal);
          border-radius: 1em;
          padding: 0.18em 0.85em 0.18em 0.6em;
          background: var(--color-terminal-bg-alt);
          border: 1.5px solid var(--color-terminal-border);
          color: var(--color-terminal-text);
          font-weight: 500;
          box-shadow: 0 1px 4px 0 #0002;
        }
        .ff-badge-hobby {
          border-color: var(--color-terminal-teal);
          color: var(--color-terminal-teal);
        }
        .ff-badge-lang {
          border-color: var(--color-terminal-yellow);
          color: var(--color-terminal-yellow);
        }
        .ff-badge-prog {
          border-color: var(--color-terminal-blue);
          color: var(--color-terminal-blue);
        }
        .ff-icon-label { display: inline-flex; align-items: center; gap: 0.2em; }
        .ff-icon-label svg { vertical-align: middle; font-size: 1em; }
        @media (max-width: 700px) {
          .ff-main { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
          .ff-logo { justify-content: flex-start; }
        }
        .ff-activities-title {
          margin-top: 1.2rem;
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--color-terminal-orange);
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
        .ff-activities-icon {
          color: var(--color-terminal-pink);
          font-size: 1.1em;
        }
        .ff-activities-label {
          color: var(--color-terminal-teal);
        }
        .ff-badge-activity {
          border-color: var(--color-terminal-pink);
          color: var(--color-terminal-pink);
        }
      `}</style>
        </main>
    );
} 