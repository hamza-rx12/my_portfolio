"use client";

import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Big Data Network Billing Pipeline',
        description:
            'A data pipeline for network billing that processes large volumes of customer usage records (SMS, voice calls, data), supports batch and real-time processing, pricing, invoice generation, and dashboard visualization.',
        github: 'https://github.com/hamza-rx12/big_data_network_billing',
        tools: ['Java', 'Spark', 'Kafka', 'Flink', 'Docker Compose', 'MongoDB', 'MinIO', 'Streamlit'],
        image: '/projects/networkBillingPipeline.png',
    },
    {
        title: 'TagWise',
        description:
            'A collaborative data annotation platform for efficient dataset labeling, designed for machine learning workflows.',
        github: 'https://github.com/hamza-rx12/TagWise.git',
        tools: [
            'Spring Boot',
            'MariaDB',
            'Redis',
            'React',
            'TailwindCSS',
            'JWT Authentication',
        ],
        image: '/projects/tagWise.png',
    },
    {
        title: 'Linux Command Completion',
        description:
            'A neural network-based Linux command auto-completion system that analyzes history to predict and suggest commands in real time.',
        github: 'https://github.com/hamza-rx12/linux-command-completion.git',
        tools: [
            'LSTM',
            'GRU',
            'RNN',
            'TensorFlow',
            'Keras',
            'Bash Scripts',
            'Top-K Accuracy',
            'Sparse Categorical Cross-Entropy',
        ],
        image: '/projects/linuxCommandCompletion.webp',
    },
    {
        title: 'Typo Tamer',
        description:
            'An intelligent spell checker using dynamic edit distance and machine learning algorithms to automatically detect and correct typos.',
        github: 'https://github.com/hamza-rx12/typo_tamer.git',
        tools: [
            'Levenshtein Distance',
            'Phonetic Comparison',
            'Python',
            'Jellyfish',
            'Real-time Detection & Correction',
        ],
        image: '/images/opensource.png',
    },
    {
        title: 'Image Master',
        description:
            'A Tkinter-based GUI application for managing and manipulating images, offering features like resizing, cropping, and applying filters.',
        github: 'https://github.com/hamza-rx12/pypro.git',
        tools: ['Python', 'Tkinter', 'PIL (Pillow)', 'Matplotlib', 'NumPy'],
        image: '/projects/imageMaster.png',
    },
    {
        title: 'MongoDB Sharded Cluster',
        description:
            'A prototype MongoDB sharded cluster to optimize data distribution and scalability, ensuring efficient query performance.',
        tools: ['MongoDB', 'Docker', 'Python', 'Linux'],
        image: '/images/portfolio.png',
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="spa-section" style={{ padding: '2rem' }}>
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls projects</span>
            </div>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div className="slide-up-in" style={{ transitionDelay: `${idx * 100}ms` }} key={project.title}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
            <style jsx>{`
              .projects-grid {
                display: grid;
                gap: 2rem;
                grid-template-columns: 1fr;
              }
              @media (min-width: 700px) {
                .projects-grid {
                  grid-template-columns: 1fr 1fr;
                }
              }
            `}</style>
        </section>
    );
} 