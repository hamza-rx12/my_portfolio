"use client";

const education = [
    {
        title: "Specialization in Data Engineering",
        dates: "2023–present",
        institution: "National School of Applied Sciences of Al Hoceima (ENSAH)",
    },
    {
        title: "Preparatory Cycle for Engineering Studies",
        dates: "2021–2023",
        institution: "National School of Applied Sciences of Al Hoceima (ENSAH)",
    },
    {
        title: "Baccalaureate in Mathematical Sciences B",
        dates: "2020–2021",
        institution: "Technical High School of Errachidia",
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="education-section spa-section">
            <div className="ff-header">
                <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">ls education</span>
            </div>
            <div className="education-list">
                {education.map((ed, i) => (
                    <div className="slide-up-in" style={{ transitionDelay: `${i * 120}ms` }} key={i}>
                        <div className="education-entry">
                            <div className="education-title-row">
                                <span className="education-title">{ed.title}</span>
                                <span className="education-dates">{ed.dates}</span>
                            </div>
                            <div className="education-inst">{ed.institution}</div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .education-section {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .education-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.7rem;
        }
        .education-entry {
          background: rgba(49, 50, 68, 0.85);
          border: 1.5px solid var(--ctp-mauve);
          border-radius: 1.1em;
          padding: 1.2em 1.5em;
          box-shadow: 0 2px 16px 0 #0003;
          font-family: var(--font-terminal);
          color: var(--ctp-text);
          transition: border 0.18s, box-shadow 0.18s;
        }
        .education-entry:hover {
          border-color: var(--ctp-pink);
          box-shadow: 0 4px 32px 0 var(--ctp-mauve);
        }
        .education-title-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1.2em;
          margin-bottom: 0.3em;
        }
        .education-title {
          font-size: 1.13em;
          font-weight: 700;
          color: var(--ctp-mauve);
        }
        .education-dates {
          font-size: 0.98em;
          color: var(--ctp-overlay1);
          font-weight: 500;
        }
        .education-inst {
          font-size: 1em;
          color: var(--ctp-subtext1);
          margin-left: 0.1em;
        }
        @media (max-width: 600px) {
          .education-section {
            padding: 0.5em 0.2em;
          }
          .education-entry {
            padding: 0.8em 0.7em;
          }
          .education-title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.2em;
          }
        }
      `}</style>
        </section>
    );
} 