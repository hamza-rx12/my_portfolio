"use client";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      <span className="prompt">&gt;&gt;&gt;</span> {children}
      <style jsx>{`
        .section-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.1rem;
          position: relative;
          display: flex;
          align-items: center;
          color: var(--color-terminal-text);
          font-family: var(--font-terminal);
          letter-spacing: 0.1px;
        }
        .prompt {
          color: var(--color-terminal-orange);
          font-weight: 900;
          margin-right: 0.7rem;
          font-size: 1.1em;
          font-family: var(--font-terminal);
        }
      `}</style>
    </h2>
  );
} 