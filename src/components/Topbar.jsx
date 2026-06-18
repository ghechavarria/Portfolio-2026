import { useState } from 'react';
import { navLinks, site } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme';

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="topbar" id="top">
      <a className="topbar-brand" href="#top" onClick={() => setNavOpen(false)}>
        {site.name}
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={navOpen}
        aria-controls="site-nav"
        aria-label={navOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setNavOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`topbar-nav${navOpen ? ' is-open' : ''}`} id="site-nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        aria-label="Toggle color theme"
        aria-pressed={theme === 'light'}
        onClick={toggleTheme}
      >
        <span className="theme-track" aria-hidden="true">
          <span className="theme-thumb"></span>
        </span>
        <span className="theme-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
}
