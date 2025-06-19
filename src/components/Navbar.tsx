"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <span>MyPortfolio</span>
        </Link>
      </div>
      <ul className="navbar__links">
        {navLinks.map(link => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <li key={link.href}>
              <Link href={link.href}>
                <span className={isActive ? 'active' : ''}>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.7rem 1.5rem;
          background: #181a20;
          border-bottom: 2.5px solid #ffb86c;
          font-family: var(--font-terminal);
          box-shadow: 0 2px 12px 0 #000a;
          z-index: 100;
        }
        .navbar__logo span {
          font-weight: 700;
          font-size: 1.1rem;
          color: #ffb86c;
          letter-spacing: 1px;
        }
        .navbar__links {
          display: flex;
          gap: 1.1rem;
          list-style: none;
        }
        .navbar__links li span {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-terminal);
          transition: color 0.2s, border-bottom 0.2s;
          border-bottom: 2.5px solid transparent;
          padding-bottom: 2px;
          cursor: pointer;
        }
        .navbar__links li span.active {
          color: #ffb86c;
          border-bottom: 2.5px solid #ffb86c;
        }
        .navbar__links li span:hover {
          color: #ffb86c;
        }
        @media (max-width: 600px) {
          .navbar__links {
            gap: 0.5rem;
          }
          .navbar {
            padding: 0.7rem 0.7rem;
          }
        }
      `}</style>
    </nav>
  );
} 