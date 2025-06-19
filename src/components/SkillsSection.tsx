"use client";

const skills = [
    {
        category: "Languages",
        items: ["C", "Java", "Python", "JavaScript/TypeScript", "PL/SQL", "Shell (Bash)", "Rust (simple stuff)"]
    },
    {
        category: "Artificial Intelligence",
        items: ["Machine/Deep Learning", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "LangChain"]
    },
    {
        category: "Data Analysis",
        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "SpaCy"]
    },
    {
        category: "Big Data",
        items: ["Hadoop", "Spark", "Kafka", "Flink", "MongoDB Sharded Cluster"]
    },
    {
        category: "Web Development",
        items: ["Flask", "FastAPI", "Spring Boot", "React", "Tailwind CSS"]
    },
    {
        category: "Databases",
        items: ["Oracle Database", "MariaDB", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "DevOps",
        items: ["Docker", "Docker Compose", "Linux"]
    },
    {
        category: "Languages (Spoken)",
        items: ["Arabic (native)", "English (fluent)", "French (fluent)"]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="skills-section spa-section">
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls skills</span>
            </div>
            <div className="skills-list">
                {skills.map((cat, i) => (
                    <div className="slide-up-in" style={{ transitionDelay: `${i * 100}ms` }} key={i}>
                        <div className="skills-category">
                            <div className="skills-category-title">{cat.category}</div>
                            <div className="skills-badges">
                                {cat.items.map((item, j) => (
                                    <span className="skill-badge" key={j}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .skills-section {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skills-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.7rem;
        }
        .skills-category {
          background: rgba(49, 50, 68, 0.85);
          border: 1.5px solid var(--ctp-blue);
          border-radius: 1.1em;
          padding: 1.2em 1.5em;
          box-shadow: 0 2px 16px 0 #0003;
          font-family: var(--font-terminal);
          color: var(--ctp-text);
          transition: border 0.18s, box-shadow 0.18s;
        }
        .skills-category:hover {
          border-color: var(--ctp-mauve);
          box-shadow: 0 4px 32px 0 var(--ctp-blue);
        }
        .skills-category-title {
          font-size: 1.09em;
          font-weight: 700;
          color: var(--ctp-blue);
          margin-bottom: 0.5em;
        }
        .skills-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
        }
        .skill-badge {
          background: var(--ctp-surface1);
          color: var(--ctp-blue);
          border: 1.5px solid var(--ctp-blue);
          border-radius: 0.7em;
          padding: 0.18em 0.85em;
          font-size: 0.97em;
          font-weight: 600;
          font-family: var(--font-terminal);
          letter-spacing: 0.01em;
          box-shadow: 0 1px 4px 0 #0002;
          transition: background 0.18s, color 0.18s, border 0.18s;
        }
        .skill-badge:hover {
          background: var(--ctp-blue);
          color: var(--ctp-base);
          border-color: var(--ctp-pink);
        }
        @media (max-width: 600px) {
          .skills-section {
            padding: 0.5em 0.2em;
          }
          .skills-category {
            padding: 0.8em 0.7em;
          }
        }
      `}</style>
        </section>
    );
} 