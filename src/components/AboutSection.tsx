"use client";

import Image from 'next/image';
import { FaJava, FaBook, FaMusic, FaPlane, FaLinux, FaCode, FaLanguage, FaTerminal, FaSmile, FaKeyboard, FaUserAstronaut, FaRobot } from 'react-icons/fa';
import { SiGnubash, SiGnome, SiVsco, SiNeovim, SiArchlinux, SiJavascript, SiTypescript, SiPython, SiRust, SiC, SiHtml5, SiCss3, SiMyanimelist } from 'react-icons/si';
import { RiJavaLine } from "react-icons/ri";

const aboutInfo = {
    user: 'Hamza',
    host: 'Alaoui Mhamdi',
    description: `I am a second-year Data Engineering student with a strong passion for artificial intelligence, big data, and distributed systems. Curious, autonomous, and highly motivated, I am actively seeking an internship where I can contribute to innovative projects in AI, natural language processing (NLP), or large-scale data engineering.
With hands-on experience in machine learning, data processing, and software development, I aim to deepen my technical expertise while collaborating in a stimulating and impact-driven environment.`,
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

export default function AboutSection() {
    return (
        <section id="about" className="about-fastfetch spa-section" style={{ padding: '2rem' }}>
            <div className="ff-header ff-header-center">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">whoami</span>
            </div>
            <div className="ff-main ff-main-center">
                <div className="slide-up-in">
                    <div className="ff-info-box ff-info-box-center">
                        <div className="ff-pic-wrapper ff-pic-wrapper-inside">
                            <Image src="/images/myPic.png" alt="Hamza" width={160} height={160} className="ff-pic" />
                        </div>
                        <div className="ff-info ff-info-center">
                            <div className="ff-row ff-title ff-title-center">{aboutInfo.user} {aboutInfo.host}</div>
                            <div className="ff-row ff-desc ff-desc-center">{aboutInfo.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .about-fastfetch {
                  font-family: var(--font-terminal);
                  color: var(--color-terminal-text);
                  background: none;
                  padding: 2.5rem 0 1.5rem 0;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .ff-header-center {
                  display: flex;
                  justify-content: center;
                  width: 100%;
                  margin-bottom: 1.2rem;
                }
                .ff-main-center {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                }
                .ff-info-box-center {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  background: rgba(49, 50, 68, 0.85);
                  border: 1.5px solid var(--ctp-mauve);
                  border-radius: 1.1em;
                  padding: 2.2em 2.5em 1.5em 2.5em;
                  box-shadow: 0 2px 16px 0 #0003;
                  min-width: 0;
                  max-width: 600px;
                  width: 100%;
                  position: relative;
                  margin: 0 auto;
                  transition: border 0.18s, box-shadow 0.18s;
                }
                .ff-info-box-center:hover {
                  border-color: var(--ctp-pink);
                  box-shadow: 0 4px 32px 0 var(--ctp-mauve);
                }
                .ff-pic-wrapper-inside {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  margin-bottom: 1.2em;
                  position: static;
                }
                .ff-pic {
                  border-radius: 50%;
                  border: 3px solid var(--color-terminal-orange);
                  box-shadow: 0 2px 16px 0 #0008;
                  width: 160px;
                  height: 160px;
                  background: var(--ctp-base);
                }
                .ff-info-center {
                  min-width: 0;
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                  align-items: center;
                  margin-top: 0;
                }
                .ff-title-center {
                  font-size: 1.18rem;
                  font-weight: 700;
                  color: var(--color-terminal-pink);
                  margin-bottom: 0.2rem;
                  text-align: center;
                }
                .ff-desc-center {
                  color: var(--color-terminal-text);
                  font-size: 1.01rem;
                  margin-bottom: 0.5rem;
                  text-align: center;
                }
                @media (max-width: 600px) {
                  .ff-info-box-center {
                    padding: 1.7em 0.5em 1em 0.5em;
                    max-width: 98vw;
                  }
                  .ff-pic {
                    width: 110px;
                    height: 110px;
                  }
                  .ff-pic-wrapper-inside {
                    margin-bottom: 0.7em;
                  }
                }
            `}</style>
        </section>
    );
} 