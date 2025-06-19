"use client";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      <div className="ff-header ff-header-large">
        <span className="cmd-arrow">&gt;&gt;&gt;</span> <span className="cmd-cmd">echo "Welcome to My Portfolio"</span>
      </div>
      <p style={{ fontSize: '1.25rem', maxWidth: 600, textAlign: 'center', margin: '1.5rem 0' }}>
        Hi! I'm a developer who loves building beautiful, performant web apps. Explore my work and let's connect!
      </p>
      <Link
        href="/projects"
        style={{
          background: 'var(--color-forest-green)',
          color: '#fff',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(34,139,34,0.08)',
          transition: 'background 0.2s',
        }}
      >
        View Projects
      </Link>
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
