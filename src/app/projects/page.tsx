"use client";

import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';

const projects = [
    {
        title: 'Impressive Portfolio',
        description: 'A modern, responsive portfolio built with Next.js and forest green theme.',
        image: '/images/portfolio.png',
        github: 'https://github.com/',
        demo: '#',
    },
    {
        title: 'Open Source Contribution',
        description: 'Contributed to open source projects and collaborated with developers worldwide.',
        image: '/images/opensource.png',
        github: 'https://github.com/',
    },
];

export default function ProjectsPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <div className="ff-header ff-header-large">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls projects</span>
            </div>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
            <style jsx>{`
                .ff-header {
                    font-size: 1.05rem;
                    margin-bottom: 2.2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }
                .ff-header-large {
                    font-size: 1.7rem;
                    margin-bottom: 2.5rem;
                }
                .cmd-arrow { color: var(--color-terminal-orange); font-weight: bold; }
                .cmd-cmd { color: var(--color-terminal-teal); font-weight: bold; }
            `}</style>
        </main>
    );
} 